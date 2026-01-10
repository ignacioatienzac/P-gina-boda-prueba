
import React, { useState, useEffect } from 'react';
import { geminiService } from '../services/gemini';

const OurStory: React.FC = () => {
  const [story, setStory] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      const generatedStory = await geminiService.generateOurStory();
      setStory(generatedStory);
      setLoading(false);
    };
    fetchStory();
  }, []);

  return (
    <section id="story" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-amber-200"></div>
            <img 
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" 
              alt="The Couple" 
              className="relative z-10 w-full h-[500px] object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <span className="font-script text-3xl text-amber-700 block mb-4">Nuestra Historia</span>
            <h2 className="text-4xl font-serif mb-8 text-gray-800">Cómo todo comenzó</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed italic">
              {loading ? (
                <div className="space-y-3">
                  <div className="h-4 bg-gray-100 animate-pulse rounded w-full"></div>
                  <div className="h-4 bg-gray-100 animate-pulse rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 animate-pulse rounded w-5/6"></div>
                </div>
              ) : (
                <p className="text-lg">"{story}"</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
