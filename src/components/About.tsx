import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Introduction */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Designing Solutions, Not Just Visuals
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate computer science student with a keen interest in frontend development 
                and problem-solving. My journey in technology is driven by curiosity and the desire 
                to create innovative solutions that make a real impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my BTech in Computer Science Engineering, I'm actively building 
                projects and expanding my skills in modern web technologies. I believe in continuous 
                learning and staying updated with the latest trends in technology.
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">
                        BTech Computer Science Engineering
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Graphic Era Hill University Bhimtal</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">2023 - 2027</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                      <GraduationCap className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">
                        High School & Intermediate
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Inspiration Sr. Sec. School</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">2021 - 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;