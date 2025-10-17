'use client';

import { useTranslations } from 'next-intl';

export default function AdmissionsPageSimple() {
  const t = useTranslations('admissions');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('subtitle')}
        </p>
      </div>
    </div>
  );
}
