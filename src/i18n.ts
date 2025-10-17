import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['fr', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    // Configuration pour l'arabe (RTL)
    timeZone: locale === 'ar' ? 'Africa/Tunis' : 'Europe/Paris',
    now: new Date(),
  };
});
