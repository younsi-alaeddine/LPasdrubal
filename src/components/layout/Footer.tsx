'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const t = useTranslations('navigation');
  const locale = useLocale();

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { name: t('home'), href: `/${locale}` },
        { name: t('about'), href: `/${locale}/about` },
        { name: t('programs'), href: `/${locale}/programs` },
        { name: t('admissions'), href: `/${locale}/admissions` },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: t('schoolLife'), href: `/${locale}/school-life` },
        { name: t('news'), href: `/${locale}/news` },
        { name: t('gallery'), href: `/${locale}/gallery` },
        { name: t('contact'), href: `/${locale}/contact` },
      ],
    },
    {
      title: 'Portails',
      links: [
        { name: t('parentPortal'), href: `/${locale}/portal/parent` },
        { name: t('studentPortal'), href: `/${locale}/portal/student` },
        { name: t('teacherPortal'), href: `/${locale}/portal/teacher` },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Lycée Asdrubal</span>
            </div>
            <p className="text-gray-300 mb-6">
              {locale === 'ar' 
                ? 'ثانوية أسدروبال الخاصة - التميز في التعليم منذ 1995'
                : 'Lycée Privé Asdrubal - Excellence en éducation depuis 1995'
              }
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {locale === 'ar' ? 'معلومات الاتصال' : 'Contact'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  {locale === 'ar' 
                    ? 'تونس، تونس العاصمة'
                    : 'Tunis, Tunisie'
                  }
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+216 XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">contact@asdrubal.edu.tn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Lycée Privé Asdrubal. {locale === 'ar' ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.'}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href={`/${locale}/legal/terms`} className="text-gray-400 hover:text-white transition-colors duration-200">
                {locale === 'ar' ? 'شروط الاستخدام' : 'Mentions légales'}
              </Link>
              <Link href={`/${locale}/legal/privacy`} className="text-gray-400 hover:text-white transition-colors duration-200">
                {locale === 'ar' ? 'سياسة الخصوصية' : 'Politique de confidentialité'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
