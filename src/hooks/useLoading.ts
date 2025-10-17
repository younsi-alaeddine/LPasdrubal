'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface LoadingState {
  isLoading: boolean;
  progress: number;
  message: string;
}

interface UseLoadingReturn extends LoadingState {
  startLoading: (message?: string) => void;
  updateProgress: (progress: number, message?: string) => void;
  finishLoading: () => void;
  navigateWithLoading: (url: string, message?: string) => void;
}

export function useLoading(initialState: Partial<LoadingState> = {}): UseLoadingReturn {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    progress: 0,
    message: 'Chargement...',
    ...initialState
  });

  const router = useRouter();

  const startLoading = useCallback((message: string = 'Chargement...') => {
    setLoadingState({
      isLoading: true,
      progress: 0,
      message
    });
  }, []);

  const updateProgress = useCallback((progress: number, message?: string) => {
    setLoadingState(prev => ({
      ...prev,
      progress: Math.min(100, Math.max(0, progress)),
      ...(message && { message })
    }));
  }, []);

  const finishLoading = useCallback(() => {
    setLoadingState(prev => ({
      ...prev,
      progress: 100
    }));
    
    // Attendre un peu pour que l'utilisateur voie le 100%
    setTimeout(() => {
      setLoadingState({
        isLoading: false,
        progress: 0,
        message: 'Chargement...'
      });
    }, 300);
  }, []);

  const navigateWithLoading = useCallback((url: string, message: string = 'Chargement de la page...') => {
    startLoading(message);
    
    // Simuler le chargement progressif
    const steps = [
      { progress: 20, message: 'Préparation...' },
      { progress: 50, message: 'Chargement du contenu...' },
      { progress: 80, message: 'Finalisation...' },
      { progress: 100, message: 'Terminé !' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        if (step) {
          updateProgress(step.progress, step.message);
        }
        currentStep++;
      } else {
        clearInterval(interval);
        finishLoading();
        router.push(url);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [startLoading, updateProgress, finishLoading, router]);

  return {
    ...loadingState,
    startLoading,
    updateProgress,
    finishLoading,
    navigateWithLoading
  };
}

// Hook pour les formulaires
export function useFormLoading() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const startSubmission = useCallback((message: string = 'Envoi en cours...') => {
    setIsSubmitting(true);
    setSubmitMessage(message);
  }, []);

  const finishSubmission = useCallback(() => {
    setIsSubmitting(false);
    setSubmitMessage('');
  }, []);

  const submitWithLoading = useCallback(async (
    submitFn: () => Promise<any>,
    successMessage: string = 'Envoyé avec succès !',
    errorMessage: string = 'Erreur lors de l\'envoi'
  ) => {
    try {
      startSubmission();
      const result = await submitFn();
      setSubmitMessage(successMessage);
      
      // Attendre un peu pour que l'utilisateur voie le message de succès
      setTimeout(() => {
        finishSubmission();
      }, 1500);
      
      return result;
    } catch (error) {
      setSubmitMessage(errorMessage);
      setTimeout(() => {
        finishSubmission();
      }, 2000);
      throw error;
    }
  }, [startSubmission, finishSubmission]);

  return {
    isSubmitting,
    submitMessage,
    startSubmission,
    finishSubmission,
    submitWithLoading
  };
}

// Hook pour les données asynchrones
export function useAsyncLoading<T>() {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (asyncFn: () => Promise<T>, loadingMessage?: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await asyncFn();
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    data,
    isLoading,
    error,
    execute,
    reset
  };
}
