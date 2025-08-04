import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Download, Sparkles, Zap, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-secondary transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.68) 0%, rgba(147, 51, 234, 0.51) 25%, rgba(251, 146, 60, 0.34) 50%, rgba(99, 102, 241, 0.68) 100%)`
        }}
      ></div>

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-orange-500/20 animate-pulse"></div>
      </div>

      {/* Enhanced floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float backdrop-blur-sm border border-white/20"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-secondary/20 rounded-lg rotate-45 animate-float backdrop-blur-sm border border-secondary/30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-white/15 rounded-full animate-float backdrop-blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/15 rounded-lg animate-float backdrop-blur-sm border border-secondary/20" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Additional geometric elements */}
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-white/20 rotate-45 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-10 w-12 h-12 border-2 border-white/30 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Sparkle effects */}
        <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-white/40 animate-pulse" />
        <Zap className="absolute top-3/4 right-1/4 w-8 h-8 text-secondary/60 animate-bounce" />
        <Rocket className="absolute top-1/2 right-1/3 w-5 h-5 text-white/50 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container px-6 text-center text-white relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Enhanced greeting section */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">Available for opportunities</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent animate-glow">
              Sachin Chaubey
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
              <Code className="w-5 h-5 text-secondary" />
              <span className="text-white/90 font-medium">BTech CSE Student</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
              <span className="text-white/90 font-medium">Frontend Developer</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building projects that make a difference. 
            Specializing in <span className="text-secondary font-semibold">C++, Python, JavaScript, and Java</span> with 
            a focus on modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-secondary hover:bg-secondary/90 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-secondary/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
            >
              <Rocket className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Projects
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Contact Me
            </Button>

          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: "4+", label: "Languages" },
              { number: "2+", label: "Projects" },
              { number: "95%", label: "Success Rate" },
              { number: "2027", label: "Graduation" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-background">
          <path d="M0,120V60c240,0,480-60,600-60s360,60,600,60v60Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;