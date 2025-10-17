'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CardLoading } from './Loading';
import { cn } from '@/lib/utils';

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
}

export default function ImageWithLoading({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  quality = 75,
  sizes,
  fill = false,
  style,
  ...props
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoading(false);
    setImageLoaded(true);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Reset states when src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setImageLoaded(false);
  }, [src]);

  const imageProps = {
    src,
    alt,
    width,
    height,
    className: cn(
      'transition-opacity duration-500',
      imageLoaded ? 'opacity-100' : 'opacity-0',
      className
    ),
    priority,
    placeholder,
    blurDataURL,
    quality,
    sizes,
    fill,
    style,
    onLoad: handleLoad,
    onError: handleError,
    ...props
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-100"
          >
            <div className="text-center space-y-2">
              <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto" />
              <p className="text-sm text-gray-500">Chargement...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-100"
          >
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Image non disponible</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!hasError && (
        <Image {...imageProps} />
      )}
    </div>
  );
}

// Composant pour les images de galerie avec lazy loading
export function GalleryImage({ src, alt, className, ...props }: Omit<ImageWithLoadingProps, 'width' | 'height'>) {
  return (
    <motion.div
      className={cn('relative overflow-hidden rounded-lg', className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <ImageWithLoading
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </motion.div>
  );
}

// Composant pour les images de cartes
export function CardImage({ src, alt, className, ...props }: Omit<ImageWithLoadingProps, 'width' | 'height'>) {
  return (
    <div className={cn('relative h-48 overflow-hidden rounded-t-lg', className)}>
      <ImageWithLoading
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        {...props}
      />
    </div>
  );
}

// Composant pour les avatars
export function AvatarImage({ src, alt, size = 40, className, ...props }: ImageWithLoadingProps & { size?: number }) {
  return (
    <div className={cn('relative rounded-full overflow-hidden', className)}>
      <ImageWithLoading
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
        {...props}
      />
    </div>
  );
}
