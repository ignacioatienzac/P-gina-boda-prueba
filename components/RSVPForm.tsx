
import React, { useState } from 'react';
import { geminiService } from '../services/gemini';

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'yes',
    guests: 1,
    dietary: '',
    message: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleGenerateMessage = async () => {
    if (!formData.name) {
      alert("Por favor, ingresa tu nombre primero.");
      return;
    }
    setIsGenerating(true);
    const aiMessage = await geminiService.generateRSVPMessage(formData.name, formData.attendance);
    setFormData(prev => ({ ...prev, message: aiMessage }));
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 bg-amber-50">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-white p-12 shadow-2xl rounded-sm">
            <div className="text-5xl mb-6">✨</div>
            <h2 className="text-3xl font-serif mb-4">¡Gracias por confirmar!</h2>
            <p className="text-gray-600">Hemos recibido tu respuesta correctamente. Nos vemos muy pronto para celebrar juntos.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 text-amber-700 font-bold uppercase tracking-widest text-xs border-b border-amber-700"
            >
              Enviar otra respuesta
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-[#fdfbf7]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-white p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative frame */}
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-amber-100 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <span className="font-script text-3xl text-amber-700 block mb-2">R.S.V.P.</span>
              <h2 className="text-4xl font-serif text-gray-800">Confirma tu Asistencia</h2>
              <p className="text-gray-500 mt-4">Por favor responde antes del 1 de Septiembre, 2025</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-600 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-amber-400 focus:ring-0 outline-none transition-colors"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-600 mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-amber-400 focus:ring-0 outline-none transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-600 mb-2">¿Asistirás?</label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-200 focus:border-amber-400 focus:ring-0 outline-none appearance-none"
                    value={formData.attendance}
                    onChange={e => setFormData({...formData, attendance: e.target.value as 'yes' | 'no'})}
                  >
                    <option value="yes">¡Sí, con mucho gusto!</option>
                    <option value="no">Lamentablemente no puedo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-600 mb-2">Número de Invitados</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="5"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-amber-400 focus:ring-0 outline-none"
                    value={formData.guests}
                    onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-600 mb-2">Restricciones Alimentarias (Opcional)</label>
                <input 
                  type="text" 
                  placeholder="Alergias, vegetariano, etc."
                  className="w-full px-4 py-3 border border-gray-200 focus:border-amber-400 focus:ring-0 outline-none"
                  value={formData.dietary}
                  onChange={e => setFormData({...formData, dietary: e.target.value})}
                />
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-600">Mensaje para los novios</label>
                  <button 
                    type="button"
                    onClick={handleGenerateMessage}
                    disabled={isGenerating}
                    className="text-[10px] uppercase font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 disabled:opacity-50"
                  >
                    {isGenerating ? 'Generando...' : '✨ Sugerir con IA'}
                  </button>
                </div>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-amber-400 focus:ring-0 outline-none resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-amber-900 text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-amber-950 transition-all disabled:opacity-70"
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
