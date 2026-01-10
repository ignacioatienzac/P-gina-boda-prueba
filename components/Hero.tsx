
import { useState, useEffect } from 'react';

const Hero = () => {
  const weddingDate = new Date('2025-10-12T18:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
          alt="Wedding Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="font-serif text-lg md:text-xl uppercase tracking-[0.5em] mb-4 opacity-90">Nos Casamos</p>
        <h1 className="text-6xl md:text-9xl font-serif mb-6 leading-tight">Alejandro & Valeria</h1>
        <div className="h-[1px] w-24 bg-white/50 mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl font-script mb-12">12 de Octubre, 2025 • Finca El Paraíso</p>
        
        {/* Countdown */}
        <div className="flex justify-center space-x-4 md:space-x-12">
          {[
            { label: 'Días', value: timeLeft.days },
            { label: 'Hrs', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Seg', value: timeLeft.seconds }
          ].map((item) => (
            <div key={item.label} className="text-center">
              <span className="block text-3xl md:text-5xl font-serif mb-1">{item.value < 0 ? 0 : item.value}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
