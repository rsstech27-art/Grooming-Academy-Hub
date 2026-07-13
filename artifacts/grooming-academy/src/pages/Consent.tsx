import { Link } from "wouter";
import { FaPaw } from "react-icons/fa";

export default function Consent() {
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
          Согласие на обработку персональных данных
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p>
            Настоящим я, субъект персональных данных, в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных», свободно, своей волей и в своём интересе даю согласие Академии груминга <strong className="text-white">«MILORD ACADEMY»</strong> (г. Хабаровск, ул. Ленинградская, д. 99) на обработку следующих персональных данных:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>фамилия, имя, отчество;</li>
            <li>номер телефона;</li>
            <li>предпочтительный способ связи.</li>
          </ul>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">Цели обработки</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>запись на курсы, мастер-классы и консультации;</li>
              <li>информирование об услугах и акциях академии;</li>
              <li>обратная связь.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">Действия с данными</h2>
            <p>Разрешаю осуществлять следующие действия: сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу (при необходимости), обезличивание, блокирование, удаление и уничтожение.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">Срок действия согласия</h2>
            <p>Согласие действует с момента его предоставления и до истечения 3 (трёх) лет с даты последнего обращения, либо до отзыва согласия.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">Порядок отзыва</h2>
            <p>Я вправе отозвать настоящее согласие в любой момент, направив письменное заявление оператору по адресу: г. Хабаровск, ул. Ленинградская, д. 99, или иным способом, предусмотренным законодательством.</p>
          </section>

          <p className="text-xs pt-4 border-t border-border">
            Согласие предоставляется путём отправки формы на сайте академии. Дата актуализации: {new Date().getFullYear()} г.
          </p>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 mt-12 text-primary hover:text-primary/80 font-bold uppercase tracking-wider text-sm transition-colors">
          ← Вернуться на главную
        </Link>
      </main>
    </div>
  );
}
