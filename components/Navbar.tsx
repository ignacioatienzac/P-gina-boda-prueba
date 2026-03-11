
import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.story, href: '#story' },
    { name: t.nav.event, href: '#event' },
    { name: t.nav.dressCode, href: '#accommodation' },
    { name: t.nav.gifts, href: '#registry' },
    { name: t.nav.rsvp, href: '#rsvp' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'yue', label: '粵' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className={`relative z-50 font-serif text-2xl font-bold tracking-widest transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-amber-900' : 'text-white'}`}>
            V & I
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-[0.2em] font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-amber-700' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <div className={`flex items-center space-x-1 text-xs font-medium tracking-wider ${isScrolled ? 'text-gray-400' : 'text-white/60'}`}>
              {languages.map((l, i) => (
                <span key={l.code} className="flex items-center">
                  {i > 0 && <span className="mx-1">|</span>}
                  <button
                    type="button"
                    onClick={() => setLang(l.code)}
                    className={`transition-colors ${lang === l.code ? (isScrolled ? 'text-amber-700 font-bold' : 'text-white font-bold') : 'hover:text-amber-700'}`}
                  >
                    {l.label}
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden relative z-50 p-2 transition-colors duration-300 outline-none ${isScrolled || isMenuOpen ? 'text-amber-900' : 'text-white'}`}
            aria-label={t.nav.openMenu}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-serif text-amber-900 tracking-widest hover:text-amber-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-2 text-sm font-medium tracking-wider text-gray-400">
            {languages.map((l, i) => (
              <span key={l.code} className="flex items-center">
                {i > 0 && <span className="mx-1">|</span>}
                <button
                  type="button"
                  onClick={() => setLang(l.code)}
                  className={`transition-colors ${lang === l.code ? 'text-amber-700 font-bold' : 'hover:text-amber-700'}`}
                >
                  {l.label}
                </button>
              </span>
            ))}
          </div>
          <div className="pt-8 text-center">
            <div className="h-[1px] w-12 bg-amber-200 mx-auto mb-8"></div>
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em]">{t.nav.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
