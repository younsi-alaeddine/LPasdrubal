'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
  animated?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const colorClasses = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  purple: 'bg-purple-600',
  red: 'bg-red-600',
  yellow: 'bg-yellow-600'
};

const sizeClasses = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4'
};

export default function ProgressBar({
  progress,
  className,
  showPercentage = false,
  animated = true,
  color = 'blue',
  size = 'md',
  label
}: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showPercentage && (
            <span className="text-sm text-gray-500">{clampedProgress}%</span>
          )}
        </div>
      )}
      
      <div className={cn(
        'w-full bg-gray-200 rounded-full overflow-hidden',
        sizeClasses[size]
      )}>
        <motion.div
          className={cn(
            'h-full rounded-full transition-colors duration-300',
            colorClasses[color]
          )}
          initial={{ width: 0 }}
          animate={{ width: `${clampedProgress}%` }}
          transition={animated ? {
            duration: 0.8,
            ease: 'easeOut'
          } : {
            duration: 0
          }}
        />
      </div>
      
      {!label && showPercentage && (
        <div className="text-right mt-1">
          <span className="text-sm text-gray-500">{clampedProgress}%</span>
        </div>
      )}
    </div>
  );
}

// Composant de barre de progression circulaire
interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  showPercentage?: boolean;
}

export function CircularProgress({
  progress,
  size = 120,
  strokeWidth = 8,
  color = '#3B82F6',
  className,
  showPercentage = true
}: CircularProgressProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Cercle de fond */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Cercle de progression */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </svg>
      
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-700">
            {Math.round(clampedProgress)}%
          </span>
        </div>
      )}
    </div>
  );
}

// Composant de barre de progression avec étapes
interface StepProgressProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function StepProgress({ steps, currentStep, className }: StepProgressProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isUpcoming = index > currentStep;

          return (
            <div key={index} className="flex flex-col items-center flex-1">
              {/* Cercle d'étape */}
              <div className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300',
                isCompleted && 'bg-green-600 text-white',
                isCurrent && 'bg-blue-600 text-white',
                isUpcoming && 'bg-gray-200 text-gray-500'
              )}>
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✓
                  </motion.div>
                ) : (
                  index + 1
                )}
              </div>
              
              {/* Ligne de connexion */}
              {index < steps.length - 1 && (
                <div className={cn(
                  'w-full h-0.5 mt-4 transition-colors duration-300',
                  isCompleted ? 'bg-green-600' : 'bg-gray-200'
                )} />
              )}
              
              {/* Label de l'étape */}
              <div className="mt-2 text-center">
                <p className={cn(
                  'text-sm font-medium transition-colors duration-300',
                  isCurrent && 'text-blue-600',
                  isCompleted && 'text-green-600',
                  isUpcoming && 'text-gray-500'
                )}>
                  {step}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
