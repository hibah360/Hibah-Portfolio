import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description: "Bridging the gap between aesthetics and functionality."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and pushing boundaries."
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          I'm a full-stack developer with a keen eye for detail and a passion for creating 
          exceptional user experiences. With expertise in modern web technologies, I transform 
          ideas into elegant, functional applications.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
