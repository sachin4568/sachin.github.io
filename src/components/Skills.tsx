import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Database, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      gradient: "from-primary to-blue-600",
      delay: "0s"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "C++",
      description: "System programming and competitive programming",
      gradient: "from-secondary to-red-500",
      delay: "0.1s"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Python",
      description: "Data analysis, AI/ML, and backend development",
      gradient: "from-green-500 to-blue-600",
      delay: "0.2s"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "JavaScript",
      description: "Modern web development and dynamic applications",
      gradient: "from-yellow-500 to-orange-500",
      delay: "0.3s"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Expertise in modern technologies and programming languages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: skill.delay }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${skill.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-foreground mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Java', 'HTML/CSS', 'Git', 'Linux', 'Data Structures', 'Algorithms'].map((tech, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-foreground font-medium hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;