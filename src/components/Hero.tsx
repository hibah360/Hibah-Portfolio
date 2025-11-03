import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-50" />

      <div className="container max-w-4xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="mb-6">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-8 animate-in zoom-in duration-700 delay-200 overflow-hidden">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          Hi, I'm <span className="text-gradient">Hibah</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-500">
          Full Stack Developer
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in duration-700 delay-700">
          Crafting elegant solutions through clean code and thoughtful design.
          Passionate about building impactful digital experiences.
        </p>

        <div className="flex gap-4 justify-center mb-12 animate-in slide-in-from-bottom-4 duration-700 delay-900">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="group"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center animate-in fade-in duration-700 delay-1000">
          {/* GitHub */}
          <a
            href="https://github.com/hibah360?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Github className="h-5 w-5" />
            </Button>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hibah-abdul-razak-13b038199/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>

          {/* Email */}
          <a
            href="mailto:hibahrazak@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section >
  );
}
