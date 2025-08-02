import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "chaubeysachin63@gmail.com",
      href: "mailto:chaubeysachin63@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/sachin-chaubey-001b1830a/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/sachin4568",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Ready to collaborate, discuss opportunities, or just say hello? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${method.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {method.label}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {method.value}
                  </p>
                  
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a 
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      Connect
                      <Send className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Message */}
          <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Open for Opportunities
              </h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
                I'm currently seeking internship opportunities and exciting projects where I can 
                contribute my skills in frontend development and continue learning from experienced professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;