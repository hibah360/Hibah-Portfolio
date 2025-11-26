import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

export function About() {
  // const highlights = [
  //   {
  //     icon: Code2,
  //     title: "Clean Code",
  //     description: "Writing maintainable, scalable, and efficient code is my passion."
  //   },
  //   {
  //     icon: Palette,
  //     title: "Design Thinking",
  //     description: "Bridging the gap between aesthetics and functionality."
  //   },
  //   {
  //     icon: Rocket,
  //     title: "Innovation",
  //     description: "Always exploring new technologies and pushing boundaries."
  //   }
  // ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          About <span className="text-gradient">Me</span>
        </h2>

        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Hi there! I'm a Full Stack Developer with over 2 years of experience working with the MERN stack
          (MongoDB, Express, React, and Node.js). I love building clean, functional, and user-friendly web
          applications. Recently, I've been diving into Python to level up my skills and explore the exciting
          world of AI.
          <br /><br />
          I've also had hands-on experience with Jenkins and CI/CD pipelines, which has helped me understand
          the complete development and deployment process. I'm a certified Full Stack Developer, with a solid
          foundation in Java, SQL, HTML, CSS, and JavaScript — and I'm always curious to learn and experiment
          with new technologies.
        </p>

        {/* <div className="grid md:grid-cols-3 gap-8">
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
        </div> */}
      </div>
    </section>
  );
}
