'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'skeleton';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};

export default function Loading({ 
  size = 'md', 
  variant = 'spinner',
  className,
  text,
  fullScreen = false
}: LoadingProps) {
  const baseClasses = cn(
    'flex items-center justify-center',
    fullScreen && 'fixed inset-0 bg-white/80 backdrop-blur-sm z-50',
    className
  );

  const contentClasses = cn(
    'flex flex-col items-center space-y-4',
    fullScreen && 'bg-white rounded-2xl p-8 shadow-2xl'
  );

  const renderSpinner = () => (
    <motion.div
      className={cn(
        'border-4 border-gray-200 border-t-blue-600 rounded-full',
        sizeClasses[size]
      )}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );

  const renderDots = () => (
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={cn(
            'bg-blue-600 rounded-full',
            size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'
          )}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <motion.div
      className={cn(
        'bg-blue-600 rounded-full',
        sizeClasses[size]
      )}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );

  const renderBars = () => (
    <div className="flex space-x-1">
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className={cn(
            'bg-blue-600 rounded-full',
            size === 'sm' ? 'w-1 h-4' : size === 'md' ? 'w-1 h-6' : 'w-1 h-8'
          )}
          animate={{
            scaleY: [1, 2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: index * 0.1
          }}
        />
      ))}
    </div>
  );

  const renderSkeleton = () => (
    <div className="space-y-3 w-full max-w-md">
      <motion.div
        className="h-4 bg-gray-200 rounded-full"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        className="h-4 bg-gray-200 rounded-full w-3/4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="h-4 bg-gray-200 rounded-full w-1/2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'bars':
        return renderBars();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={baseClasses}>
      <div className={contentClasses}>
        {renderVariant()}
        {text && (
          <motion.p
            className="text-gray-600 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </div>
  );
}

// Composant de chargement de page
export function PageLoading({ text = "Chargement..." }: { text?: string }) {
  return (
    <Loading
      fullScreen
      size="lg"
      variant="spinner"
      text={text}
      className="bg-gradient-to-br from-blue-50 to-purple-50"
    />
  );
}

// Composant de chargement de section
export function SectionLoading({ text }: { text?: string }) {
  return (
    <div className="py-20">
      <Loading
        size="lg"
        variant="dots"
        text={text || "Chargement du contenu..."}
        className="flex justify-center"
      />
    </div>
  );
}

// Composant de chargement de carte
export function CardLoading() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}
