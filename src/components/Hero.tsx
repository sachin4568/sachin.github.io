import { Button } from "@/components/ui/button";
import { Code, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-purple-600 to-secondary">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-secondary/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/15 rounded-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              Sachin Chaubey
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <Code className="w-6 h-6 text-secondary" />
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              BTech CSE Student | Frontend Developer | C++, Python, JavaScript, Java
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building projects that make a difference. 
            Currently pursuing BTech in Computer Science at Graphic Era Hill University.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-secondary hover:bg-secondary/90 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              View Projects
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-background">
          <path d="M0,120V60c240,0,480-60,600-60s360,60,600,60v60Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;