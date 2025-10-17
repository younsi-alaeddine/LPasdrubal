import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['fr', 'ar'] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  const locale = await requestLocale;
  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    // Configuration pour l'arabe (RTL)
    timeZone: locale === 'ar' ? 'Africa/Tunis' : 'Europe/Paris',
    now: new Date(),
  };
});
