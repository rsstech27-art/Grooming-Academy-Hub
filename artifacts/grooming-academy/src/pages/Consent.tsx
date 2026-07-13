import { Link } from "wouter";
import { FaPaw } from "react-icons/fa";

export default function Consent() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tighter text-primary">
            <FaPaw size={18} className="text-primary rotate-[-20deg]" />
            АКАДЕМИЯ МИЛОРД
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-10">
          Согласие на обработку персональных данных
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">

          <p>
            Настоящим, в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных», оставляя запрос на обратную связь, заявку либо совершая иные действия, связанные с внесением своих персональных данных в специальных формах на сайте <span className="text-white">https://milordkhv.ru</span> в Телеграм-боте <span className="text-white">https://t.me/InvestBooking_bot</span>, Пользователь выражает своё согласие на обработку персональных данных оператором: <span className="text-white font-semibold">ИП Садыгова Ирина Николаевна</span>, ИНН 272385245996, ОГРНИП 321272400043002, адрес: 680021, Хабаровский край, г. Хабаровск, ул. Владивостокская, д. 44а, корп. 85 (далее — «Оператор»).
          </p>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">1. Способы обработки</h2>
            <p>Согласие дается на обработку персональных данных с использованием и без использования средств автоматизации.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">2. Перечень персональных данных</h2>
            <p>Согласие дается на обработку следующих персональных данных (не являющихся специальными или биометрическими):</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>фамилия, имя, отчество;</li>
              <li>адрес электронной почты;</li>
              <li>номер телефона;</li>
              <li>информация, автоматически получаемая при доступе к Сервисам, в том числе с использованием cookies;</li>
              <li>информация, полученная в результате действий Субъекта персональных данных, в том числе сведения о направленных заявках, запросах и обращениях.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">3. Цели обработки персональных данных</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>направление сообщений, уведомлений, запросов, ответов, документов, сообщений рекламного или информационного характера;</li>
              <li>обработка обращений, жалоб, запросов, сообщений, направляемых Оператором и Пользователем друг другу;</li>
              <li>оставление отзывов об услугах Оператора.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">4. Правовое основание</h2>
            <p>Основанием для обработки персональных данных является: ст. 24 Конституции Российской Федерации; Гражданский кодекс Российской Федерации; ст. 6 Федерального закона № 152-ФЗ «О персональных данных»; настоящее согласие на обработку персональных данных, Политика обработки персональных данных Оператора.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">5. Действия с персональными данными</h2>
            <p>В ходе обработки с персональными данными будут совершены следующие действия: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), электронное копирование, извлечение, использование, передача (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">6. Срок обработки</h2>
            <p>Персональные данные обрабатываются до удаления учетной записи. Также обработка персональных данных может быть прекращена по запросу Субъекта персональных данных.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">7. Порядок отзыва согласия</h2>
            <p>Согласие может быть отозвано путём направления письменного заявления (в том числе в форме электронного документа, подписанного электронной подписью) на адрес электронной почты <span className="text-white">dogicat@inbox.ru</span>. Согласие прекращает своё действие с даты, следующей за датой получения Оператором заявления об отзыве.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">8. Последствия отзыва согласия</h2>
            <p>В случае отзыва согласия Оператор вправе продолжить обработку персональных данных без согласия при наличии оснований, указанных в пунктах 2–11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона № 152-ФЗ «О персональных данных».</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">9. Срок действия согласия</h2>
            <p>Согласие является бессрочным и действует всё время до момента прекращения обработки персональных данных, указанных в п. 7 и п. 8 настоящего Согласия.</p>
          </section>

          <p className="text-xs pt-4 border-t border-border">
            Согласие предоставляется путём отправки формы на сайте академии или иных активных действий Пользователя на сайте / в Телеграм-боте.
          </p>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 mt-12 text-primary hover:text-primary/80 font-bold uppercase tracking-wider text-sm transition-colors">
          ← Вернуться на главную
        </Link>
      </main>
    </div>
  );
}
