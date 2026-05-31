
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
    <path d="M12 20s-6.5-4.35-8.5-8.1C1.98 8.95 3.7 5.5 7.3 5.5c2.06 0 3.29 1.11 4.2 2.46.91-1.35 2.14-2.46 4.2-2.46 3.6 0 5.32 3.45 3.8 6.4C18.5 15.65 12 20 12 20Z" />
  </svg>
);

const CardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
    <rect x="3.5" y="6" width="17" height="12" rx="2" />
    <path d="M3.5 10h17" />
    <path d="M7 14.5h3.5" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
    <rect x="3.5" y="6" width="17" height="12" rx="2" />
    <path d="m5.5 8 6.5 5 6.5-5" />
  </svg>
);

const BranchIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.1" className="h-16 w-16" aria-hidden="true">
    <path d="M18 52c9-9 14-19 17-40" />
    <path d="M31 27c-7 1-11-2-13-8 6-1 10 2 13 8Z" />
    <path d="M38 21c1-7 5-11 11-13 1 6-2 10-8 13Z" />
    <path d="M27 39c-6 2-10 0-14-5 5-2 10 0 14 5Z" />
    <path d="M35 35c1-6 5-10 11-12 1 6-2 10-8 12Z" />
  </svg>
);

const Registry: React.FC = () => {
  const { t } = useLanguage();

  const accounts = [
    {
      label: t.registry.spanishBankLabel,
      bank: t.registry.spanishBankName,
      value: t.registry.spanishBankValue,
      icon: <CardIcon />,
    },
    {
      label: t.registry.hongKongBankLabel,
      bank: t.registry.hongKongBankName,
      value: t.registry.hongKongBankValue,
      icon: <EnvelopeIcon />,
    },
  ];

  return (
    <section id="registry" className="py-24 bg-[#fdfbf7] relative overflow-hidden">
      <div className="absolute -left-12 top-16 h-44 w-44 rounded-full bg-amber-100/40 blur-3xl" aria-hidden="true"></div>
      <div className="absolute -right-16 bottom-10 h-52 w-52 rounded-full bg-stone-200/30 blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 text-gray-800">{t.registry.heading}</h2>
          <div className="h-[1px] w-16 bg-amber-300 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-3 text-amber-700/70 mb-6">
            <span className="h-px w-10 bg-amber-200"></span>
            <HeartIcon />
            <span className="h-px w-10 bg-amber-200"></span>
          </div>

          <p className="text-gray-600 text-lg leading-8 md:leading-9 max-w-2xl mx-auto">
            {t.registry.text}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-sm border border-amber-200/80 bg-[#fffdfa] px-6 py-7 shadow-[0_20px_50px_rgba(120,53,15,0.10)] md:px-8 md:py-9">
            <div className="absolute right-6 top-6 hidden text-amber-200 md:block" aria-hidden="true">
              <BranchIcon />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {accounts.map((account) => (
                <div key={account.label} className="rounded-sm border border-amber-100 bg-white/85 p-5 text-left">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                      {account.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-amber-700/80">{account.label}</p>
                      <p className="mt-2 font-serif text-xl text-gray-800">{account.bank}</p>
                      <p className="mt-3 text-sm font-medium leading-7 text-gray-600 tracking-[0.03em] break-words md:text-[15px] md:leading-8 lg:whitespace-nowrap">
                        {account.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center font-serif text-lg italic text-gray-500">
            {t.registry.thanks}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registry;
