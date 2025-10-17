'use client';

import { useTranslations } from 'next-intl';

export default function ContactPageMinimal() {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('title')}
      </h1>
      <p className="text-xl text-gray-600">
        {t('subtitle')}
      </p>
    </div>
  );
}
