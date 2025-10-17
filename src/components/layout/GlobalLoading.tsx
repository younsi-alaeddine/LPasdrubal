'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loading from '@/components/ui/Loading';
import Image from 'next/image';

interface GlobalLoadingProps {
  children: React.ReactNode;
}

export default function GlobalLoading({ children }: GlobalLoadingProps) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500); // Adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-col space-y-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/images/logo-white.png" // Assurez-vous d'avoir un logo blanc pour le fond sombre
                alt="Lycée Asdrubal Logo"
                width={150}
                height={150}
                priority
              />
            </motion.div>
            <Loading variant="spinner" size="lg" />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white text-xl font-medium"
            >
              Chargement de l'expérience Asdrubal...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}

// Hook pour gérer le chargement global
export function useGlobalLoading() {
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Chargement...');

  const startGlobalLoading = (message?: string) => {
    setLoadingMessage(message || 'Chargement...');
    setIsGlobalLoading(true);
  };

  const stopGlobalLoading = () => {
    setIsGlobalLoading(false);
  };

  return {
    isGlobalLoading,
    loadingMessage,
    startGlobalLoading,
    stopGlobalLoading
  };
}
