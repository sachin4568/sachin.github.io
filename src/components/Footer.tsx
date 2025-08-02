import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lg font-medium">Built with</span>
          <Heart className="w-5 h-5 text-secondary animate-pulse" />
          <span className="text-lg font-medium">by Sachin Chaubey</span>
        </div>
        
        <p className="text-white/70 mb-4">
          © 2024 Sachin Chaubey. All rights reserved.
        </p>
        
        <div className="flex justify-center space-x-6 text-sm text-white/60">
          <span>BTech CSE Student</span>
          <span>•</span>
          <span>Frontend Developer</span>
          <span>•</span>
          <span>Problem Solver</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;