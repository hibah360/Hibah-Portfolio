import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen">
      {/* ✅ Pass state to Navbar */}
      <Navbar isOpen={menuOpen} setIsOpen={setMenuOpen} />

      <ThemeToggle />

      {/* ✅ Tell Hero when menu is open */}
      <Hero menuOpen={menuOpen} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
