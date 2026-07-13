import { Link } from "wouter";
import { FaPaw } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tighter text-primary">
            <FaPaw size={18} className="text-primary rotate-[-20deg]" />
            MILORD ACADEMY
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8">
          Политика обработки персональных данных
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">1. Общие положения</h2>
            <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных, проводимой Академией груминга «MILORD ACADEMY» (г. Хабаровск, ул. Ленинградская, д. 99).</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">2. Цели обработки персональных данных</h2>
            <p>Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>запись на курсы, мастер-классы и консультации;</li>
              <li>информирование об услугах, акциях и новых программах;</li>
              <li>исполнение договорных обязательств;</li>
              <li>обратная связь с клиентами.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">3. Перечень обрабатываемых данных</h2>
            <p>Оператор обрабатывает следующие персональные данные:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>фамилия, имя, отчество;</li>
              <li>номер телефона;</li>
              <li>предпочтительный способ связи.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">4. Порядок и условия обработки</h2>
            <p>Обработка персональных данных осуществляется с согласия субъекта персональных данных. Передача персональных данных третьим лицам не осуществляется, за исключением случаев, предусмотренных законодательством Российской Федерации.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">5. Сроки хранения</h2>
            <p>Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не более 3 (трёх) лет с момента получения согласия субъекта, если иное не предусмотрено законодательством.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">6. Права субъекта</h2>
            <p>Субъект персональных данных вправе:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>получить информацию об обработке своих персональных данных;</li>
              <li>потребовать уточнения, блокирования или уничтожения данных;</li>
              <li>отозвать согласие на обработку персональных данных.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">7. Контакты оператора</h2>
            <p>По вопросам обработки персональных данных обращайтесь:<br />
            г. Хабаровск, ул. Ленинградская, д. 99<br />
            Телефон: указан на сайте</p>
          </section>

          <p className="text-xs pt-4 border-t border-border">
            Дата актуализации: {new Date().getFullYear()} г.
          </p>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 mt-12 text-primary hover:text-primary/80 font-bold uppercase tracking-wider text-sm transition-colors">
          ← Вернуться на главную
        </Link>
      </main>
    </div>
  );
}
