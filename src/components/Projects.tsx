import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, TreePine, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Moon Lander AI Agent",
      description: "Python-based 2D simulation to autonomously land a spacecraft with advanced physics modeling and AI decision-making algorithms.",
      features: [
        "Achieved 95% success rate in autonomous landing",
        "Real-time physics simulation with gravity and thrust",
        "Visualized results using Python plotting libraries",
        "Machine learning optimization for landing trajectories"
      ],
      technologies: ["Python", "NumPy", "Matplotlib", "AI/ML"],
      gradient: "from-primary to-purple-600",
      delay: "0s"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Red-Black Tree Visualizer",
      description: "Interactive visualization tool that demonstrates Red-Black tree operations with dynamic frontend animations and step-by-step explanations.",
      features: [
        "Real-time visualization of tree operations",
        "Interactive node insertion and deletion",
        "Dynamic frontend animations for rotations",
        "Educational tool with step-by-step explanations"
      ],
      technologies: ["Python", "HTML", "CSS", "JavaScript"],
      gradient: "from-secondary to-red-500",
      delay: "0.2s"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise through hands-on projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm animate-slide-up overflow-hidden"
              style={{ animationDelay: project.delay }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90 text-white"
                    disabled
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;