
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Events: React.FC = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: t.events.ceremony.title,
      time: t.events.ceremony.time,
      location: t.events.ceremony.location,
      address: t.events.ceremony.address,
      description: t.events.ceremony.description,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: t.events.reception.title,
      time: t.events.reception.time,
      location: t.events.reception.location,
      address: t.events.reception.address,
      description: t.events.reception.description,
      image: 'https://images.unsplash.com/photo-1465495910483-34a1be90c003?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="event" className="py-24 bg-[#fdfbf7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 text-gray-800">{t.events.heading}</h2>
          <div className="h-[1px] w-12 bg-amber-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white p-2 shadow-xl">
              <img src={event.image} alt={event.title} className="w-full h-64 object-cover mb-8" />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
                <p className="text-amber-700 font-medium mb-4">{event.time}</p>
                <div className="space-y-2 text-gray-600 mb-6">
                  <p className="font-semibold">{event.location}</p>
                  <p className="text-sm">{event.address}</p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{event.description}</p>
                <button 
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`, '_blank')}
                  className="inline-block px-6 py-2 border border-gray-200 text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors"
                >
                  {t.events.viewMap}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
