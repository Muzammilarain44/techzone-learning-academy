import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Courses from "../components/Courses";
import LearningJourney from "../components/LearningJourney";
import Environment from "../components/Environment";
import Projects from "../components/Projects";
import Admission from "../components/Admission";
import FAQ from "../components/FAQ";
import AdmissionCTA from "../components/AdmissionCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 text-white">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Courses />
      <LearningJourney />
      <Environment />
      <Projects />
      <Admission />
      <FAQ />
      <AdmissionCTA />
      <Contact />
      <Footer />
    </main>
  );
}
