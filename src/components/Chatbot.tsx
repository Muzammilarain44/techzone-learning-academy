"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, Send, Volume2, VolumeX, X } from "lucide-react";
import { GREETING, QUICK_TOPICS, getBotReply } from "../data/chatbot";
import type { BotLang, BotLink } from "../data/chatbot";

type ChatMessage = {
  id: number;
  role: "bot" | "user";
  text: string;
  links?: BotLink[];
};

type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((event: {
    results: { [index: number]: { transcript: string } }[];
  }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  }
}

const TOPIC_QUERY: Record<string, string> = {
  career: "career guidance",
  courses: "courses",
  admission: "admission",
  timings: "timings",
  contact: "contact",
  apply: "apply",
};

let messageId = 0;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"intro" | "chat">("intro");
  const [lang, setLang] = useState<BotLang>("en");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const [speakingId, setSpeakingId] = useState<number | null>(null);
  const [voiceNote, setVoiceNote] = useState("");
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  const voiceSupported =
    typeof window !== "undefined" &&
    ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function startChat(selectedLang: BotLang) {
    setLang(selectedLang);
    setView("chat");
    setMessages((prev) =>
      prev.length === 0
        ? [{ id: ++messageId, role: "bot", text: GREETING[selectedLang] }]
        : prev,
    );
  }

  function sendBotReply(userText: string, replyLang: BotLang) {
    setTyping(true);
    window.setTimeout(() => {
      const reply = getBotReply(userText, replyLang);
      setMessages((prev) => [
        ...prev,
        { id: ++messageId, role: "bot", text: reply.text, links: reply.links },
      ]);
      setTyping(false);
    }, 600);
  }

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { id: ++messageId, role: "user", text: trimmed }]);
    setInput("");
    sendBotReply(trimmed, lang);
  }

  function sendQuickTopic(topicId: string) {
    const topic = QUICK_TOPICS.find((t) => t.id === topicId);
    if (!topic) return;
    const label = lang === "en" ? topic.en : topic.ur;
    setMessages((prev) => [...prev, { id: ++messageId, role: "user", text: label }]);
    sendBotReply(TOPIC_QUERY[topicId] ?? label, lang);
  }

  function toggleListening() {
    if (!voiceSupported) {
      setVoiceNote(
        lang === "en"
          ? "Voice input is not supported in this browser. Please try Chrome."
          : "اس براؤزر میں وائس ان پٹ سپورٹ نہیں ہے۔ براہ کرم کروم استعمال کریں۔",
      );
      return;
    }
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }
    const Ctor = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!Ctor) return;
    const recognition = new Ctor();
    recognition.lang = lang === "ur" ? "ur-PK" : "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onresult = (event) => {
      const transcript = event.results[0]?.[0]?.transcript ?? "";
      if (transcript.trim()) sendMessage(transcript);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    setVoiceNote("");
    setListening(true);
    recognition.start();
  }

  function toggleSpeak(message: ChatMessage) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setVoiceNote(
        lang === "en"
          ? "Voice playback is not supported in this browser."
          : "اس براؤزر میں وائس پلے بیک سپورٹ نہیں ہے۔",
      );
      return;
    }
    if (speakingId === message.id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message.text);
    utterance.lang = lang === "ur" ? "ur-PK" : "en-US";
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    setSpeakingId(message.id);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[100vw] flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="flex h-[600px] max-h-[calc(100vh-7rem)] w-[min(24rem,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-white/15 bg-navy-900/95 shadow-2xl shadow-black/60 backdrop-blur"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-navy-950/80 px-4 py-3">
              <span className="relative h-11 w-11 shrink-0">
                <Image src="/tz-agent.png" alt="Techzone Agent robot" width={33} height={44} className="h-full w-auto object-contain drop-shadow-[0_4px_12px_rgba(59,130,246,0.5)]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-extrabold text-white">
                  Techzone <span className="text-sky-400">Agent</span>
                </p>
                <p className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {lang === "en" ? "ONLINE • READY" : "آن لائن • تیار ہے"}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLang(lang === "en" ? "ur" : "en")}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/10"
                  aria-label="Switch language"
                >
                  {lang === "en" ? "اردو" : "EN"}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {view === "intro" ? (
              <div className="flex flex-1 flex-col items-center justify-start overflow-y-auto px-6 py-6 text-center">
                <motion.span
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative block shrink-0"
                >
                  <Image src="/tz-agent.png" alt="TZ Agent robot" width={168} height={224} className="h-56 w-auto object-contain drop-shadow-[0_18px_30px_rgba(37,99,235,0.45)]" />
                </motion.span>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">
                  Techzone Learning Academy • AI Assistant
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-white">
                  Techzone <span className="text-sky-400">Agent</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Ask me about careers, courses, student life and admission. I
                  talk back!
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  کیریئر، کورسز، داخلہ اور کلاس کے اوقات کے بارے میں مجھ سے
                  پوچھیں — میں جواب دوں گا!
                </p>
                <div className="mt-6 flex w-full flex-col gap-3">
                  <button
                    onClick={() => startChat("en")}
                    className="rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-3.5 text-base font-extrabold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5"
                  >
                    English
                    <span className="block text-xs font-semibold text-sky-100">
                      START IN ENGLISH
                    </span>
                  </button>
                  <button
                    onClick={() => startChat("ur")}
                    className="rounded-2xl border border-sky-400/40 bg-white/5 px-5 py-3.5 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    اردو
                    <span className="block text-xs font-semibold text-sky-200">
                      اردو میں شروع کریں
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div ref={messagesRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          message.role === "user"
                            ? "rounded-br-sm bg-gradient-to-r from-sky-500 to-violet-600 text-white"
                            : "rounded-bl-sm border border-white/10 bg-white/[0.07] text-slate-100"
                        }`}
                      >
                        <p dir="auto" className="whitespace-pre-line">{message.text}</p>
                        {message.links && message.links.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {message.links.map((link) => (
                              <a
                                key={link.href + link.label}
                                href={link.href}
                                className="rounded-full bg-sky-500/20 px-3 py-1.5 text-xs font-bold text-sky-300 transition hover:bg-sky-500/30 hover:text-sky-200"
                              >
                                {link.label} →
                              </a>
                            ))}
                          </div>
                        )}
                        {message.role === "bot" && (
                          <button
                            onClick={() => toggleSpeak(message)}
                            className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 transition hover:text-sky-300"
                            aria-label={speakingId === message.id ? "Stop voice" : "Listen to this reply"}
                          >
                            {speakingId === message.id ? (
                              <VolumeX className="h-3.5 w-3.5" />
                            ) : (
                              <Volume2 className="h-3.5 w-3.5" />
                            )}
                            {speakingId === message.id
                              ? lang === "en"
                                ? "Stop"
                                : "روکیں"
                              : lang === "en"
                                ? "Listen"
                                : "سنیں"}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {typing && (
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-slate-300">
                        {lang === "en"
                          ? "Techzone Agent is typing…"
                          : "ٹیک زون ایجنٹ لکھ رہا ہے…"}
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick topics */}
                <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-3 py-2.5">
                  {QUICK_TOPICS.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => sendQuickTopic(topic.id)}
                      className="shrink-0 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1.5 text-xs font-bold text-sky-300 transition hover:bg-sky-500/20"
                    >
                      {lang === "en" ? topic.en : topic.ur}
                    </button>
                  ))}
                </div>

                {voiceNote && (
                  <p className="border-t border-white/10 px-4 pt-2 text-xs text-amber-300">
                    {voiceNote}
                  </p>
                )}

                {/* Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(input);
                  }}
                  className="flex items-center gap-2 border-t border-white/10 bg-navy-950/80 px-3 py-3"
                >
                  <button
                    type="button"
                    onClick={toggleListening}
                    aria-label={listening ? "Stop listening" : "Speak your question"}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                      listening
                        ? "animate-pulse bg-red-500 text-white"
                        : "border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    <Mic className="h-5 w-5" />
                  </button>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    dir="auto"
                    lang={lang === "ur" ? "ur" : "en"}
                    placeholder={
                      lang === "en"
                        ? "Type your question…"
                        : "اپنا سوال یہاں لکھیں…"
                    }
                    className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Send message"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
                <p className="bg-navy-950/80 px-4 pb-2.5 text-center text-[11px] leading-relaxed text-slate-500">
                  {lang === "en"
                    ? "Voice is free in your browser — tap the mic to speak, or Listen to hear replies."
                    : "وائس آپ کے براؤزر میں مفت ہے — بولنے کے لیے مائک دبائیں یا جواب سننے کے لیے سنیں دبائیں۔ اردو میں لکھنے کے لیے اپنے کی بورڈ سے اردو منتخب کریں۔"}
                </p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button — TZ Agent only, no text label, SS size (~140px tall) */}
      {open ? (
        <motion.button
          onClick={() => setOpen(false)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Close Techzone Agent"
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-sky-400/50 bg-navy-900 shadow-xl shadow-blue-600/40"
        >
          <X className="h-7 w-7 text-white" />
        </motion.button>
      ) : (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="shrink-0"
        >
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Open Techzone Agent"
            className="relative block bg-transparent"
          >
            <Image src="/tz-agent.png" alt="TZ Agent" width={105} height={140} className="h-[140px] w-auto object-contain drop-shadow-[0_14px_24px_rgba(37,99,235,0.5)]" priority />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
