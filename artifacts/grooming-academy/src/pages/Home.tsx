import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { FaTelegramPlane, FaWhatsapp, FaCheck, FaPaw } from "react-icons/fa";
import { Menu, X, ChevronUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const NAV_LINKS = [
  { href: "#nashi-kursy", label: "Наши курсы", testId: "link-nav-courses" },
  { href: "#master-klassy", label: "Мастер-классы", testId: "link-nav-masterclasses" },
  { href: "#ob-akademii", label: "Об академии", testId: "link-nav-about" },
  { href: "#online", label: "Онлайн-обучение", testId: "link-nav-online" },
  { href: "#svyaz", label: "Связь", testId: "link-nav-contact" },
];

const TG_BOT_TOKEN = "8021390193:AAHtBelK9tzRK3-KZsvve7eVEdk4h6HjQcI";
const TG_CHAT_ID = "616597664";

async function sendToTelegram(name: string, phone: string, method: string) {
  const text =
    `📋 *Новая заявка с сайта*\n\n` +
    `👤 Имя: ${name}\n` +
    `📞 Телефон: ${phone}\n` +
    `💬 Способ связи: ${method}`;
  const url = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TG_CHAT_ID, text, parse_mode: "Markdown" }),
  });
  if (!res.ok) throw new Error("Telegram API error");
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMethod, setFormMethod] = useState("whatsapp");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* 1. Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tighter text-primary" data-testid="link-home">
              <FaPaw size={18} className="text-primary rotate-[-20deg]" />
              MILORD ACADEMY
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-primary transition-colors" data-testid={link.testId}>{link.label}</a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 mr-4">
              <a href="https://t.me/+79141591420" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 transition-opacity hover:opacity-80" style={{ color: "#0088cc" }} data-testid="link-social-telegram-nav">
                <MessageCircle size={22} />
              </a>
              <a href="https://wa.me/79141591420" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 transition-opacity hover:opacity-80" style={{ color: "#25D366" }} data-testid="link-social-whatsapp-nav">
                <MessageCircle size={22} />
              </a>
            </div>
            <Button asChild className="hidden md:inline-flex rounded-none font-bold uppercase tracking-wider text-sm" data-testid="button-nav-enroll">
              <a href="#svyaz">Запись на курс</a>
            </Button>
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Открыть меню"
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border bg-background"
              data-testid="nav-mobile-menu"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors py-2 border-b border-border last:border-0"
                    onClick={() => setMobileOpen(false)}
                    data-testid={`${link.testId}-mobile`}
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="rounded-none font-bold uppercase tracking-wider mt-2" data-testid="button-nav-enroll-mobile">
                  <a href="#svyaz" onClick={() => setMobileOpen(false)}>Запись на курс</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. Hero */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 z-10" />
          <img src="/images/hero.png" alt="Профессиональный грумер" className="w-full h-full object-cover" data-testid="img-hero" />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-4" data-testid="text-hero-tagline">
              Груминг — как стиль жизни
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tighter text-white" data-testid="text-hero-headline">
              Освойте востребованную профессию грумера <span className="text-primary">всего за 7 дней</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium" data-testid="text-hero-subtext">
              и начните зарабатывать сразу после обучения!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-none font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8" data-testid="button-hero-courses">
                <a href="#nashi-kursy">Выбрать программу обучения</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-none font-bold uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 px-8" data-testid="button-hero-masterclasses">
                <a href="#master-klassy">Выбрать мастер-класс</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats Strip */}
      <section className="bg-card border-y border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col items-center py-4 md:py-0">
              <div className="text-5xl font-black text-primary mb-2" data-testid="text-stat-years-val">15+ лет</div>
              <div className="text-sm uppercase tracking-widest text-white font-bold" data-testid="text-stat-years-label">Обучение грумингу</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center py-4 md:py-0">
              <div className="text-5xl font-black text-primary mb-2" data-testid="text-stat-students-val">5 000+</div>
              <div className="text-sm uppercase tracking-widest text-white font-bold" data-testid="text-stat-students-label">Студентов выпустилось</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col items-center py-4 md:py-0">
              <div className="text-5xl font-black text-primary mb-2" data-testid="text-stat-masters-val">50+</div>
              <div className="text-sm uppercase tracking-widest text-white font-bold" data-testid="text-stat-masters-label">Мастеров-выпускников</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Courses section */}
      <section id="nashi-kursy" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white flex items-center justify-center gap-4" data-testid="text-courses-title">
              <FaPaw size={28} className="text-primary opacity-80 rotate-[-15deg]" />
              Старт обучения
              <FaPaw size={28} className="text-primary opacity-80 rotate-[15deg] scale-x-[-1]" />
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "База Старт", duration: "5 дней", desc: "Быстрый старт в профессию. Основы салонного груминга для начинающих." },
              { title: "База Интенсив", duration: "7 дней", desc: "Самый популярный курс. Полное погружение в профессию за неделю." },
              { title: "База", duration: "10 дней", desc: "Расширенный курс с углубленной практикой на различных породах." },
              { title: "База Плюс", duration: "14 дней", desc: "Максимальная база. Включает работу с кошками и креативный груминг." },
              { title: "База выходного дня", duration: "По выходным", desc: "Удобный формат для тех, кто совмещает обучение с основной работой." },
              { title: "ПРО-ГРУМИНГ", duration: "Индивидуально", desc: "Персональное обучение под ваши цели с топ-преподавателем академии." }
            ].map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="rounded-none bg-card border-border hover:border-primary/50 transition-colors h-full flex flex-col group" data-testid={`card-course-${idx}`}>
                  <CardHeader>
                    <div className="text-secondary font-bold text-sm uppercase tracking-widest mb-2" data-testid={`text-course-duration-${idx}`}>{course.duration}</div>
                    <CardTitle className="text-2xl font-bold uppercase text-white group-hover:text-primary transition-colors" data-testid={`text-course-title-${idx}`}>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground" data-testid={`text-course-desc-${idx}`}>{course.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full rounded-none border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-wider font-bold" data-testid={`button-course-more-${idx}`}>
                      <a href="#svyaz">Подробнее</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Masterclasses section */}
      <section id="master-klassy" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white flex items-center justify-center gap-4" data-testid="text-mc-title">
              <FaPaw size={24} className="text-primary opacity-70 rotate-[-10deg]" />
              Мастер-классы
              <FaPaw size={24} className="text-primary opacity-70 rotate-[10deg] scale-x-[-1]" />
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/images/mc1.png", title: "Азиатский стиль", desc: "Секреты создания идеальных форм в азиатском стиле для пуделей и йорков." },
              { img: "/images/mc2.png", title: "Экспресс-линька", desc: "Правильная техника вычеса и работы с двойным типом шерсти." },
              { img: "/images/mc3.png", title: "Породный груминг шпица", desc: "Тонкости работы с шерстью шпица. Создание объемных форм." },
              { img: "/images/mc4.png", title: "Креативный груминг", desc: "Окрашивание, блеск-тату, выстригание орнаментов." }
            ].map((mc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
                data-testid={`card-mc-${idx}`}
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={mc.img} alt={mc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-testid={`img-mc-${idx}`} />
                </div>
                <h3 className="text-xl font-bold uppercase text-white mb-2 group-hover:text-secondary transition-colors" data-testid={`text-mc-title-${idx}`}>{mc.title}</h3>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-mc-desc-${idx}`}>{mc.desc}</p>
                <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-white uppercase tracking-widest text-sm font-bold" data-testid={`button-mc-enroll-${idx}`}>
                  <a href="#svyaz">Записаться →</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. For-whom section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-12 text-center" data-testid="text-forwhom-title">
              Для кого наше обучение
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Хочу сменить рутинную работу",
                "Хочу работать в своём графике",
                "Хочу проявить любовь к животным",
                "Хочу освоить новую профессию легко",
                "Хочу выйти на новый уровень дохода",
                "Хочу работать в сфере, которая мне нравится"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-card p-6 border border-border"
                  data-testid={`card-forwhom-${idx}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <FaCheck />
                  </div>
                  <span className="font-bold text-white text-lg" data-testid={`text-forwhom-item-${idx}`}>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. About section */}
      <section id="ob-akademii" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6" data-testid="text-about-title">
                Академия груминга Хабаровск — это...
              </h2>
              <div className="w-24 h-1 bg-secondary mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-about-desc1">
                Мы являемся официальной франшизой Международной академии груминга Милорд — крупнейшей площадки по обучению грумеров в России. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-desc2">
                Академия сертифицирована и имеет лицензию на образовательную деятельность. По окончании обучения выдаются дипломы государственного образца.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 border-2 border-primary/20 transform translate-x-4 translate-y-4"></div>
              <img src="/images/team.png" alt="Команда академии" className="w-full h-auto relative z-10" data-testid="img-about-team" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online learning section */}
      <section id="online" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6" data-testid="text-online-title">Онлайн-обучение</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-online-desc">
              Мы предоставляем доступ к записанным урокам и обучающим материалам в удобном формате. Учитесь в своём темпе — из любой точки мира, без привязки к расписанию.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
              {[
                { title: "Видеолекции", desc: "Подробные записи занятий с преподавателями академии" },
                { title: "Практические материалы", desc: "Учебные пособия, схемы стрижек и чек-листы" },
                { title: "Поддержка куратора", desc: "Ответы на вопросы от сертифицированных мастеров" }
              ].map((item, idx) => (
                <div key={idx} className="bg-background border border-border p-6" data-testid={`card-online-${idx}`}>
                  <div className="text-primary font-black text-sm uppercase tracking-widest mb-2" data-testid={`text-online-item-title-${idx}`}>{item.title}</div>
                  <p className="text-muted-foreground text-sm" data-testid={`text-online-item-desc-${idx}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <a href="#svyaz" className="inline-block bg-secondary text-white font-black uppercase tracking-widest px-8 py-4 hover:bg-secondary/90 transition-colors" data-testid="button-online-enroll">
              Записаться на онлайн-курс
            </a>
          </motion.div>
        </div>
      </section>

      {/* 8. Contact/Form section */}
      <section id="svyaz" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto bg-card border border-border p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-2 text-center" data-testid="text-contact-title">
              Подобрать курс
            </h2>
            <p className="text-center text-muted-foreground mb-8" data-testid="text-contact-desc">
              Оставьте заявку, и мы свяжемся с вами для консультации
            </p>

            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setFormStatus("sending");
                try {
                  await sendToTelegram(formName, formPhone, formMethod);
                  setFormStatus("success");
                  setFormName("");
                  setFormPhone("");
                  setFormMethod("whatsapp");
                } catch {
                  setFormStatus("error");
                }
              }}
              data-testid="form-contact"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold">Имя</Label>
                <Input
                  id="name"
                  placeholder="Ваше имя"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="rounded-none bg-background border-border focus-visible:ring-primary h-12"
                  data-testid="input-contact-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  required
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="rounded-none bg-background border-border focus-visible:ring-primary h-12"
                  data-testid="input-contact-phone"
                />
              </div>

              <div className="space-y-3 pt-2">
                <Label className="text-xs uppercase tracking-widest font-bold">Предпочтительный способ связи</Label>
                <RadioGroup value={formMethod} onValueChange={setFormMethod} className="flex flex-row flex-wrap gap-x-8 gap-y-3 pt-1" data-testid="radio-contact-method">
                  <div className="flex items-center gap-2.5">
                    <RadioGroupItem value="whatsapp" id="r-whatsapp" data-testid="radio-whatsapp" />
                    <Label htmlFor="r-whatsapp" className="cursor-pointer font-medium">WhatsApp</Label>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <RadioGroupItem value="telegram" id="r-telegram" data-testid="radio-telegram" />
                    <Label htmlFor="r-telegram" className="cursor-pointer font-medium">Telegram</Label>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <RadioGroupItem value="call" id="r-call" data-testid="radio-call" />
                    <Label htmlFor="r-call" className="cursor-pointer font-medium">Звонок</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-start gap-3 pt-2" data-testid="consent-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  data-testid="checkbox-consent"
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#cda434] rounded-none border border-border"
                />
                <Label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  Я даю согласие на обработку персональных данных в соответствии с Федеральным законом №&nbsp;152-ФЗ
                </Label>
              </div>

              {formStatus === "success" && (
                <div className="text-center py-3 px-4 bg-primary/10 border border-primary text-primary font-bold uppercase tracking-widest text-sm" data-testid="form-success-message">
                  ✓ Заявка отправлена! Мы свяжемся с вами.
                </div>
              )}
              {formStatus === "error" && (
                <div className="text-center py-3 px-4 bg-red-500/10 border border-red-500 text-red-400 font-bold uppercase tracking-widest text-sm" data-testid="form-error-message">
                  Ошибка отправки. Попробуйте ещё раз.
                </div>
              )}

              <Button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full rounded-none font-black uppercase tracking-widest h-14 bg-primary text-primary-foreground hover:bg-primary/90 mt-2 disabled:opacity-60"
                data-testid="button-contact-submit"
              >
                {formStatus === "sending" ? "Отправка..." : "Отправить"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white mb-2" data-testid="text-footer-brand">
                <FaPaw size={20} className="text-primary rotate-[-20deg]" />
                MILORD ACADEMY
              </div>
              <div className="text-muted-foreground text-sm space-y-1" data-testid="text-footer-address">
                <div>Академия груминга</div>
                <div>г. Хабаровск, ул. Ленинградская, д. 99</div>
                <a href="tel:+79141591420" className="text-white font-bold hover:text-primary transition-colors" data-testid="link-footer-phone">
                  +7 (914) 159 14 20
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex flex-col gap-3">
                <a href="https://t.me/+79141591420" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-80" style={{ color: "#0088cc" }} data-testid="link-social-telegram-footer">
                  <MessageCircle size={24} />
                </a>
                <a href="https://wa.me/79141591420" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-80" style={{ color: "#25D366" }} data-testid="link-social-whatsapp-footer">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-widest" data-testid="text-footer-copyright">
            <span>© {new Date().getFullYear()} MILORD ACADEMY KHABAROVSK. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</span>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">
                Политика обработки данных
              </Link>
              <Link href="/consent" className="hover:text-primary transition-colors" data-testid="link-footer-consent">
                Согласие на обработку
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-muted-foreground/40">
            Сайт создан{" "}
            <a href="https://ai-rss.ru" target="_blank" rel="noreferrer" className="hover:text-muted-foreground transition-colors">
              ai-rss.ru
            </a>
          </div>
        </div>
      </footer>
      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform drop-shadow-lg"
            aria-label="Наверх"
            data-testid="button-scroll-top"
          >
            <FaPaw size={32} className="absolute text-primary rotate-[-20deg]" />
            <ChevronUp size={10} strokeWidth={3} className="relative z-10 text-primary-foreground translate-y-1" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
