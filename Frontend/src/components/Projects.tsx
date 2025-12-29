import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Screener",
      description: "A full-featured candidate screening platform with aptitude testing, coding assessments, and interview scheduling.",
      tags: ["MongoDB", "Express", "Node", "React"],
      gradient: "from-primary to-accent",
      liveUrl: "https://screener.infomaticscorp.com/",
    },
    // {
    //   title: "Task Management App",
    //   description: "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
    //   tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    //   gradient: "from-accent to-primary"
    // },
    // {
    //   title: "AI Content Generator",
    //   description: "ML-powered tool for generating marketing content, blog posts, and social media captions.",
    //   tags: ["Python", "OpenAI", "React", "FastAPI"],
    //   gradient: "from-primary via-accent to-primary"
    // },
    // {
    //   title: "Portfolio CMS",
    //   description: "Headless CMS for creative professionals to showcase their work with custom themes and layouts.",
    //   tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    //   gradient: "from-accent via-primary to-accent"
    // }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          A selection of my recent work showcasing various technologies and problem-solving approaches.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* <Button size="sm" variant="outline" className="group/btn">
                    <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button size="sm" className="group/btn">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button> */}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="group/btn"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
