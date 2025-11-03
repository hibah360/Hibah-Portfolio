import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5/CSS3"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Firebase", "Figma", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          A comprehensive toolkit for building modern, scalable applications.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-sm py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
