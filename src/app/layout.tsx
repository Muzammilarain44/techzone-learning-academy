import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "../components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techzone Learning Academy — Build Your Future in Technology",
  description:
    "Techzone Learning Academy, Karachi — 605 Shahrah-e-Faisal, Block 6, P.E.C.H.S. Admission Open. 21 real courses: Full Stack Development, Python with AI, Graphic Design, Digital Marketing, Web Designing, Shopify Dropshipping, Cyber Security and more. Classes are 2 hours, 3 days a week. Call or WhatsApp +92 330 3094425.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
