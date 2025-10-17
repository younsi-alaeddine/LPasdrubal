'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import { ChevronRight, Play } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta, 
  backgroundImage,
  className = '' 
}: HeroProps) => {
  return (
    <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}
      
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-primary-900/90" />
      
      {/* Simplified background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-400/10 rounded-full blur-xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCta && (
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
              >
                {primaryCta.text}
              </Button>
            )}
            
            {secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4"
                icon={<Play className="w-5 h-5" />}
                iconPosition="left"
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Simplified */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
