import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Hibah Abdul Razak
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/hibah360?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            ><Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/hibah-abdul-razak-13b038199/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=hibahar321@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>


          </div>
        </div>
      </div>
    </footer>
  );
}
