'use client';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();


  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{t('Welcome to the Language Switcher App!')}</h1>

      <p>
        {
          t(`Welcome to the Language Switcher App!`)
        }
      </p>

    </main>
  );
}
