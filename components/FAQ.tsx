import type { ReactNode } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

interface FAQItem {
  question: ReactNode;
  answer: ReactNode;
}

interface FAQContent {
  heading: string;
  items: FAQItem[];
}

const faqContent: Record<Language, FAQContent> = {
  es: {
    heading: 'Preguntas frecuentes',
    items: [
      {
        question: <>1. ¿Hasta cuándo puedo confirmar mi asistencia?</>,
        answer: (
          <div className="space-y-3">
            <p>
              ¡Nos encantaría saber si podrás celebrar este día con nosotros! Por favor, confirma tu asistencia a través de nuestra página web <strong>antes del 20 de junio de 2026</strong>, para que podamos cerrar el número de invitados y organizar el catering.
            </p>
          </div>
        ),
      },
      {
        question: <>2. ¿Hay aparcamiento disponible en la finca?</>,
        answer: (
          <div className="space-y-3">
            <p>¡Sí! Para quienes prefieran venir en coche, habrá mucho aparcamiento gratuito disponible en la propia finca.</p>
          </div>
        ),
      },
      {
        question: <>3. ¿Y si prefiero no conducir?</>,
        answer: (
          <div className="space-y-3">
            <p>Para que todos podáis celebrar con tranquilidad y disfrutar de la noche, tendremos un servicio de autobuses gratuitos para el día del evento. Este es el horario:</p>
            <p><strong>Ida a la finca - salida a las 19:30:</strong></p>
            <p>El <strong>autobús 1</strong> saldrá desde la entrada del <strong>Restaurante Cien Vinos</strong>.</p>
            <p>El <strong>autobús 2</strong> saldrá desde el <strong>Hotel B&B Écija</strong>.</p>
            <p><strong>Vuelta a Écija - salidas de madrugada:</strong></p>
            <p>Los autobuses saldrán de la finca a las <strong>3:00</strong> y de nuevo a las <strong>6:00</strong>.</p>
            <p>Ambos autobuses de vuelta pararán tanto en el <strong>Restaurante Cien Vinos</strong> como en el <strong>Hotel B&B Écija</strong>.</p>
          </div>
        ),
      },
      {
        question: <>4. Si voy en coche o en taxi en lugar de usar el autobús, ¿a qué hora debería llegar?</>,
        answer: (
          <div className="space-y-3">
            <p>Si vienes en coche o en transporte privado, por favor, <strong>intenta llegar a la finca sobre las 20:00</strong>, para que puedas instalarte tranquilamente antes de que empiece la celebración.</p>
          </div>
        ),
      },
      {
        question: <>5. ¿La ceremonia y la fiesta serán en interior o exterior?</>,
        answer: (
          <div className="space-y-3">
            <p>Estamos preparando una preciosa celebración al aire libre. Pero si el tiempo decide no acompañar, no os preocupéis: la finca cuenta con un bonito espacio interior preparado como plan alternativo.</p>
          </div>
        ),
      },
      {
        question: <>6. ¿Habrá baile?</>,
        answer: (
          <div className="space-y-3">
            <p>¡Por supuesto! Ponte tus zapatos más cómodos para bailar y empieza a practicar tus mejores pasos. ¡Estamos deseando compartir la pista de baile contigo!</p>
          </div>
        ),
      },
      {
        question: <>7. ¿A qué hora terminará la celebración?</>,
        answer: (
          <div className="space-y-3">
            <p>No tenemos una hora estricta de cierre para la fiesta: queremos que el amor y la música sigan todo lo posible. Eso sí, ten en cuenta los horarios de salida de los autobuses, a las <strong>3:00</strong> y a las <strong>6:00</strong>, para organizar tu noche.</p>
          </div>
        ),
      },
      {
        question: <>8. Me gustaría dar un discurso, organizar un juego o preparar una sorpresa. ¿Con quién debo coordinarlo?</>,
        answer: (
          <div className="space-y-3">
            <p>¡Nos haría muchísima ilusión! Para ayudarnos a que todo vaya bien organizado -y para que algunas sorpresas sigan siendo sorpresa para nosotros-, por favor, <strong>contacta con Jimena por WhatsApp en el +34 610 464 030</strong>. Puedes escribirle en inglés o en español, y ella ayudará a coordinar todos los detalles.</p>
          </div>
        ),
      },
    ],
  },
  en: {
    heading: 'Frequently Asked Questions',
    items: [
      {
        question: <>1. Until when can I confirm my attendance?</>,
        answer: (
          <div className="space-y-3">
            <p>We would love to know if you can celebrate this day with us. Please confirm your attendance through our website <strong>before June 20th, 2026</strong>, so we can finalize the guest count and organize the catering.</p>
          </div>
        ),
      },
      {
        question: <>2. Is parking available at the venue?</>,
        answer: (
          <div className="space-y-3">
            <p>Yes. For those who prefer to come by car, there will be plenty of free parking available at the venue itself.</p>
          </div>
        ),
      },
      {
        question: <>3. What if I would rather not drive?</>,
        answer: (
          <div className="space-y-3">
            <p>So everyone can celebrate comfortably and enjoy the evening, we will have a free shuttle bus service on the day of the event. This is the schedule:</p>
            <p><strong>Outbound to the venue - departure at 7:30 PM:</strong></p>
            <p><strong>Bus 1</strong> will leave from the entrance of <strong>Restaurante Cien Vinos</strong>.</p>
            <p><strong>Bus 2</strong> will leave from <strong>Hotel B&B Ecija</strong>.</p>
            <p><strong>Return to Ecija - early morning departures:</strong></p>
            <p>The buses will leave the venue at <strong>3:00 AM</strong> and again at <strong>6:00 AM</strong>.</p>
            <p>Both return buses will stop at both <strong>Restaurante Cien Vinos</strong> and <strong>Hotel B&B Ecija</strong>.</p>
          </div>
        ),
      },
      {
        question: <>4. If I come by car or taxi instead of taking the bus, what time should I arrive?</>,
        answer: (
          <div className="space-y-3">
            <p>If you are coming by car or private transport, please <strong>try to arrive at the venue around 8:00 PM</strong>, so you can settle in calmly before the celebration begins.</p>
          </div>
        ),
      },
      {
        question: <>5. Will the ceremony and party be indoors or outdoors?</>,
        answer: (
          <div className="space-y-3">
            <p>We are planning a beautiful outdoor celebration. But if the weather decides not to cooperate, do not worry: the venue has a lovely indoor space ready as a backup plan.</p>
          </div>
        ),
      },
      {
        question: <>6. Will there be dancing?</>,
        answer: (
          <div className="space-y-3">
            <p>Of course. Put on your most comfortable dancing shoes and start practicing your best moves. We cannot wait to share the dance floor with you.</p>
          </div>
        ),
      },
      {
        question: <>7. What time will the celebration end?</>,
        answer: (
          <div className="space-y-3">
            <p>We do not have a strict closing time for the party: we want the love and the music to last as long as possible. That said, please keep the shuttle departure times in mind, at <strong>3:00 AM</strong> and <strong>6:00 AM</strong>, when planning your night.</p>
          </div>
        ),
      },
      {
        question: <>8. I would like to give a speech, organize a game, or prepare a surprise. Who should I coordinate with?</>,
        answer: (
          <div className="space-y-3">
            <p>We would be absolutely delighted. To help us keep everything organized -and to make sure some surprises remain a surprise for us-, please <strong>contact Jimena on WhatsApp at +34 610 464 030</strong>. You can write to her in English or Spanish, and she will help coordinate all the details.</p>
          </div>
        ),
      },
    ],
  },
  yue: {
    heading: '常見問題',
    items: [
      {
        question: <>1. 最遲幾時可以確認出席？</>,
        answer: (
          <div className="space-y-3">
            <p>我哋好希望知道你可唔可以同我哋一齊慶祝呢一日。請你透過網站 <strong>喺2026年6月20日之前</strong> 確認出席，方便我哋落實賓客人數同安排餐飲。</p>
          </div>
        ),
      },
      {
        question: <>2. 莊園有冇泊車位？</>,
        answer: (
          <div className="space-y-3">
            <p>有。鍾意自己揸車嘅朋友可以直接去莊園，現場會有充足嘅免費泊車位。</p>
          </div>
        ),
      },
      {
        question: <>3. 如果我唔想揸車呢？</>,
        answer: (
          <div className="space-y-3">
            <p>為咗等大家可以安心慶祝、盡情享受夜晚，我哋喺婚禮當日會安排免費巴士服務。時間如下：</p>
            <p><strong>去程到莊園 - 19:30 出發：</strong></p>
            <p><strong>1號巴士</strong> 會喺 <strong>Restaurante Cien Vinos</strong> 門口開出。</p>
            <p><strong>2號巴士</strong> 會喺 <strong>Hotel B&B Ecija</strong> 開出。</p>
            <p><strong>回程去 Ecija - 凌晨班次：</strong></p>
            <p>巴士會喺凌晨 <strong>3:00</strong> 同埋 <strong>6:00</strong> 由莊園開出。</p>
            <p>兩班回程巴士都會停靠 <strong>Restaurante Cien Vinos</strong> 同 <strong>Hotel B&B Ecija</strong>。</p>
          </div>
        ),
      },
      {
        question: <>4. 如果我揸車或者坐的士唔搭巴士，應該幾點到？</>,
        answer: (
          <div className="space-y-3">
            <p>如果你會揸車或者坐私人交通工具前往，請你 <strong>盡量喺晚上8:00左右到達莊園</strong>，咁就可以喺慶祝開始之前從容安頓好。</p>
          </div>
        ),
      },
      {
        question: <>5. 儀式同派對會喺室內定室外舉行？</>,
        answer: (
          <div className="space-y-3">
            <p>我哋正準備一場好靚嘅戶外慶典。不過如果天氣唔配合，都唔使擔心：莊園已經準備好一個漂亮嘅室內空間作為後備方案。</p>
          </div>
        ),
      },
      {
        question: <>6. 會唔會有跳舞？</>,
        answer: (
          <div className="space-y-3">
            <p>梗係會啦。著上你最舒服嘅跳舞鞋，開始練定你最勁嘅舞步啦。我哋好期待同你一齊踏上舞池。</p>
          </div>
        ),
      },
      {
        question: <>7. 慶祝活動會幾點完？</>,
        answer: (
          <div className="space-y-3">
            <p>派對冇嚴格嘅結束時間，我哋希望愛同音樂可以延續得愈耐愈好。不過你都可以留意返巴士回程時間，凌晨 <strong>3:00</strong> 同 <strong>6:00</strong>，方便安排你嘅夜晚。</p>
          </div>
        ),
      },
      {
        question: <>8. 如果我想致辭、安排遊戲或者準備驚喜，應該同邊個聯絡？</>,
        answer: (
          <div className="space-y-3">
            <p>我哋一定會非常開心。為咗令所有安排更順利，亦都令部分驚喜可以繼續對我哋保密，請你 <strong>透過 WhatsApp 聯絡 Jimena：+34 610 464 030</strong>。你可以用英文或者西班牙文同佢聯絡，佢會幫手統籌所有細節。</p>
          </div>
        ),
      },
    ],
  },
};

const FAQ = () => {
  const { lang } = useLanguage();
  const content = faqContent[lang];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 text-gray-800">{content.heading}</h2>
          <div className="h-[1px] w-12 bg-amber-600 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {content.items.map((item, index) => (
            <article key={index} className="bg-[#fdfbf7] border border-amber-100 p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-amber-900 mb-4">{item.question}</h3>
              <div className="text-gray-600 leading-relaxed text-left">{item.answer}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;