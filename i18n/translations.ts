export type Language = 'es' | 'en' | 'yue';

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

  yue: {
    nav: {
      home: '主頁',
      story: '故事',
      event: '活動',
      dressCode: '着裝',
      gifts: '禮物',
      rsvp: '回覆',
      date: '2026年8月8日',
      openMenu: '打開選單',
    },
    hero: {
      subtitle: '我哋結婚喇！',
      date: '2026年8月8日 • Finca Puerta de Hierro',
      days: '日',
      hrs: '時',
      min: '分',
      sec: '秒',
    },
    story: {
      title: '我哋嘅故事',
      heading: '一切係點開始嘅',
      fallback: '我哋嘅故事係人生中最美麗嘅旅程。',
      aiPrompt:
        '用廣東話寫一個短篇愛情故事（最多150字），關於一對叫Vicky同Ignacio嘅情侶。佢哋喺秋天嘅咖啡店相遇，鍾意旅行，決定喺日落時分嘅莊園結婚。語氣要浪漫同富有詩意。只回覆故事正文。',
    },
    events: {
      heading: '大日子',
      ceremony: {
        title: '婚禮儀式',
        time: '晚上8:00',
        location: '莊園花園',
        address: 'Finca Puerta de Hierro',
        description:
          '請同我哋一齊，喺星空下見證我哋交換誓詞嘅親密儀式。',
      },
      reception: {
        title: '晚宴及派對',
        time: '晚上9:30',
        location: '大宴會廳',
        address: 'Finca Puerta de Hierro',
        description:
          '晚餐、跳舞，同無盡嘅歡樂，一齊慶祝我哋嘅新開始。',
      },
      viewMap: '睇地圖',
    },
    gallery: {
      heading: '我哋嘅時刻',
      subtitle: '活在我哋嘅夢想中⋯⋯',
    },
    dressCode: {
      heading: '着裝指南',
      intro:
        '活動冇正式嘅着裝要求。不過，如果你想融入當地風情，以下係安達盧西亞慶祝呢啲場合嘅簡短指南：',
      men: '男士',
      menText:
        '西裝配領帶係最傳統嘅選擇，特別係日間婚禮。晚間慶典常見深色西裝，甚至晨禮服（chaqué）用於非常正式嘅場合。安達盧西亞風格注重細節——袋巾、袖扣同擦亮嘅皮鞋。',
      women: '女士',
      womenText:
        '雞尾酒裙或長裙係標準選擇，視乎時間而定。日間婚禮好傳統會戴頭飾、闊邊帽（pamelas）或髮箍，增添優雅節日感。晚間婚禮則偏好長款優雅禮服，配搭珠寶同小型手拿包。',
    },
    registry: {
      heading: '禮物',
      text: '對我哋嚟講，最珍貴嘅禮物就係你哋喺呢個特別日子嘅出席。不過，如果你想送禮，我哋喺下面提供咗銀行資料方便你：',
    },
    rsvp: {
      title: 'R.S.V.P.',
      heading: '敬請回覆',
      deadline: '請喺2026年6月1日前回覆',
      name: '全名',
      email: '電郵地址',
      attending: '你會出席嗎？',
      attendYes: '會，好開心！',
      attendNo: '好可惜，去唔到',
      guests: '賓客人數',
      dietary: '飲食限制（選填）',
      dietaryPlaceholder: '過敏、素食等',
      message: '畀新人嘅訊息',
      aiSuggest: '✨ AI建議',
      generating: '生成中⋯⋯',
      submitting: '提交中⋯⋯',
      submit: '確認出席',
      thankYou: '多謝你嘅確認！',
      received:
        '我哋已經收到你嘅回覆。好快就見，一齊慶祝！',
      another: '提交另一個回覆',
      nameRequired: '請先輸入你嘅名。',
      errorSending:
        '發送回覆時出現連接問題，請再試一次。',
      aiFallback: '恭喜！我哋為你哋感到好開心。',
      aiPrompt: (name: string, attending: boolean) =>
        `用廣東話寫一段簡短、優雅同感人嘅訊息，畀一對新人（Vicky同Ignacio），來自一位叫${name}嘅賓客。答案係佢${attending ? '會出席' : '去唔到'}。語氣要溫暖同尊重。只回覆訊息正文。`,
    },
    footer: {
      madeWith: '為我哋嘅大日子用愛製作',
    },
  },
} as const;

export type Translations = (typeof translations)[Language];
