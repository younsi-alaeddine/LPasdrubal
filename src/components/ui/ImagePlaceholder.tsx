'use client';

import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  children?: React.ReactNode;
  gradient?: string;
}

const ImagePlaceholder = ({
  width = 400,
  height = 300,
  className,
  alt = "Image placeholder",
  children,
  gradient = "from-blue-400 to-blue-600"
}: ImagePlaceholderProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-gradient-to-br text-white font-medium rounded-lg shadow-lg',
        gradient,
        className
      )}
      style={{ width, height }}
      role="img"
      aria-label={alt}
    >
      {children || (
        <div className="text-center">
          <div className="text-2xl mb-2">🖼️</div>
          <div className="text-sm opacity-90">{alt}</div>
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder;
