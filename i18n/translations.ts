export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Navbar
    nav: {
      home: 'Inicio',
      story: 'Historia',
      event: 'Evento',
      dressCode: 'Vestimenta',
      gifts: 'Regalos',
      rsvp: 'RSVP',
      date: '8 de Agosto, 2026',
      openMenu: 'Abrir menú',
    },
    // Hero
    hero: {
      subtitle: 'Nos Casamos',
      date: '8 de Agosto, 2026 • Finca Puerta de Hierro',
      days: 'Días',
      hrs: 'Hrs',
      min: 'Min',
      sec: 'Seg',
    },
    // Our Story
    story: {
      title: 'Nuestra Historia',
      heading: 'Cómo todo comenzó',
      fallback: 'Nuestra historia es el viaje más hermoso de nuestras vidas.',
      aiPrompt:
        'Escribe una historia de amor corta (máximo 150 palabras) sobre una pareja llamada Vicky e Ignacio. Se conocieron en un café en otoño, les encanta viajar y decidieron casarse en una hermosa finca al atardecer. El tono debe ser romántico y poético.',
    },
    // Events
    events: {
      heading: 'El Gran Día',
      ceremony: {
        title: 'La Ceremonia',
        time: '20:00 HRS',
        location: 'Jardines de la Finca',
        address: 'Finca Puerta de Hierro',
        description:
          'Acompáñanos mientras intercambiamos nuestros votos en una ceremonia íntima bajo las estrellas.',
      },
      reception: {
        title: 'Banquete & Fiesta',
        time: '21:30 HRS',
        location: 'Gran Salón Principal',
        address: 'Finca Puerta de Hierro',
        description:
          'Cena, baile y mucha felicidad para celebrar nuestro nuevo comienzo.',
      },
      viewMap: 'Ver Mapa',
    },
    // Gallery
    gallery: {
      heading: 'Nuestros Momentos',
      subtitle: 'Viviendo nuestro sueño...',
    },
    // Accommodation (Dress Code)
    dressCode: {
      heading: 'Vestimenta',
      intro:
        'No hay un código de vestimenta para el evento. Sin embargo, os explicamos aquí cómo se visten los andaluces en estas ocasiones por si queréis adaptaros a la vestimenta local.',
      men: 'Hombres',
      menText:
        'Lo más habitual es llevar traje y corbata, sobre todo en bodas de día. En las de tarde o noche, es frecuente optar por trajes oscuros o incluso chaqué si la boda es muy formal. Los andaluces suelen cuidar mucho los complementos (pañuelo, gemelos, zapatos elegantes).',
      women: 'Mujeres',
      womenText:
        'Los vestidos de cóctel o largos son lo más común, dependiendo de la hora de la boda. En bodas de día es muy típico el uso de tocados, pamelas o diademas, que aportan un toque elegante y festivo. En bodas de noche suelen llevar vestidos largos o más sofisticados, acompañados de joyas y bolsos de mano pequeños.',
    },
    // Registry
    registry: {
      heading: 'Regalos',
      text: 'Para nosotros, lo más importante es compartir este día con vosotros. Si de todas formas tenéis ilusión por hacernos un regalo, os dejamos aquí nuestro número de cuenta para vuestra comodidad:',
    },
    // RSVP
    rsvp: {
      title: 'R.S.V.P.',
      heading: 'Confirma tu Asistencia',
      deadline: 'Por favor responde antes del 1 de Junio, 2026',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      attending: '¿Asistirás?',
      attendYes: '¡Sí, con mucho gusto!',
      attendNo: 'Lamentablemente no puedo',
      guests: 'Número de Invitados',
      dietary: 'Restricciones Alimentarias (Opcional)',
      dietaryPlaceholder: 'Alergias, vegetariano, etc.',
      message: 'Mensaje para los novios',
      aiSuggest: '✨ Sugerir con IA',
      generating: 'Generando...',
      submitting: 'Enviando...',
      submit: 'Confirmar Asistencia',
      thankYou: '¡Gracias por confirmar!',
      received:
        'Hemos recibido tu respuesta correctamente. Nos vemos muy pronto para celebrar juntos.',
      another: 'Enviar otra respuesta',
      nameRequired: 'Por favor, ingresa tu nombre primero.',
      errorSending:
        'Hubo un problema de conexión al enviar tu respuesta. Por favor intenta de nuevo.',
      aiFallback: '¡Muchísimas felicidades! Estamos muy emocionados por ustedes.',
      aiPrompt: (name: string, attending: boolean) =>
        `Escribe un mensaje corto, elegante y emocional para una pareja de novios (Vicky e Ignacio) de parte de un invitado llamado ${name}. La respuesta es que ${attending ? 'SÍ asistirá' : 'NO podrá asistir'}. El tono debe ser cálido y respetuoso. Responde solo con el texto del mensaje en español.`,
    },
    // Footer
    footer: {
      madeWith: 'Hecho con amor para nuestro gran día',
    },
  },

  en: {
    nav: {
      home: 'Home',
      story: 'Story',
      event: 'Event',
      dressCode: 'Dress Code',
      gifts: 'Gifts',
      rsvp: 'RSVP',
      date: 'August 8th, 2026',
      openMenu: 'Open menu',
    },
    hero: {
      subtitle: "We're Getting Married!",
      date: 'August 8th, 2026 • Finca Puerta de Hierro',
      days: 'Days',
      hrs: 'Hrs',
      min: 'Min',
      sec: 'Sec',
    },
    story: {
      title: 'Our Story',
      heading: 'How it all began',
      fallback: 'Our story is the most beautiful journey of our lives.',
      aiPrompt:
        'Write a short love story (max 150 words) about a couple named Vicky and Ignacio. They met at a café in autumn, love traveling, and decided to get married at a beautiful estate at sunset. The tone should be romantic and poetic. Respond only with the text in English.',
    },
    events: {
      heading: 'The Big Day',
      ceremony: {
        title: 'The Ceremony',
        time: '8:00 PM',
        location: 'The Estate Gardens',
        address: 'Finca Puerta de Hierro',
        description:
          'Join us as we exchange our vows in an intimate ceremony under the stars.',
      },
      reception: {
        title: 'Reception & Party',
        time: '9:30 PM',
        location: 'The Grand Ballroom',
        address: 'Finca Puerta de Hierro',
        description:
          'Dinner, dancing, and endless joy to celebrate our new beginning.',
      },
      viewMap: 'View Map',
    },
    gallery: {
      heading: 'Our Moments',
      subtitle: 'Living our dream...',
    },
    dressCode: {
      heading: 'Dress Code',
      intro:
        'There is no formal dress code for the event. However, for those who wish to embrace the local flair, here is a brief guide on how Andalusia celebrates these occasions:',
      men: 'Men',
      menText:
        'A suit and tie is the most traditional choice, especially for daytime weddings. For evening celebrations, dark suits are common, or even a morning coat (chaqué) for very formal events. Andalusian style often focuses on the details—pocket squares, cufflinks, and polished dress shoes.',
      women: 'Women',
      womenText:
        'Cocktail or long dresses are the standard, depending on the time of day. For daytime weddings, it is very traditional to wear fascinators, wide-brimmed hats (pamelas), or headbands for an elegant, festive touch. For evening weddings, long, sophisticated gowns accompanied by jewelry and small clutches are preferred.',
    },
    registry: {
      heading: 'Gifts',
      text: 'The greatest gift to us is your presence on our special day. However, if you would like to honor us with a gift, we have provided our bank details below for your convenience:',
    },
    rsvp: {
      title: 'R.S.V.P.',
      heading: 'Kindly Reply',
      deadline: 'Please respond by June 1st, 2026',
      name: 'Full Name',
      email: 'Email Address',
      attending: 'Will you be attending?',
      attendYes: 'Yes, with great pleasure!',
      attendNo: "Unfortunately I can't",
      guests: 'Number of Guests',
      dietary: 'Dietary Restrictions (Optional)',
      dietaryPlaceholder: 'Allergies, vegetarian, etc.',
      message: 'A Message for the Couple',
      aiSuggest: '✨ Suggest with AI',
      generating: 'Generating...',
      submitting: 'Submitting...',
      submit: 'Confirm Attendance',
      thankYou: 'Thank you for confirming!',
      received:
        'We have received your response. See you very soon to celebrate together!',
      another: 'Submit another response',
      nameRequired: 'Please enter your name first.',
      errorSending:
        'There was a connection problem sending your response. Please try again.',
      aiFallback: 'Congratulations! We are so excited for you both.',
      aiPrompt: (name: string, attending: boolean) =>
        `Write a short, elegant and emotional message for a couple (Vicky and Ignacio) from a guest named ${name}. The answer is that they ${attending ? 'WILL attend' : 'will NOT be able to attend'}. The tone should be warm and respectful. Respond only with the message text in English.`,
    },
    footer: {
      madeWith: 'Made with love for our big day',
    },
  },
} as const;

export type Translations = typeof translations['es'];
