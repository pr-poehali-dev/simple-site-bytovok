import { useState } from "react";
import Icon from "@/components/ui/icon";

const CATALOG = [
  {
    id: 1,
    name: "Бытовка стандарт",
    size: "6×2.4 м",
    price: "68 000",
    desc: "Металлический каркас, вагонка внутри, утеплитель 50 мм. Оптимально для строительной площадки.",
    img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/a6491b85-4409-4a13-8dd6-3bfbae25858b.jpg",
    tag: "Хит продаж",
  },
  {
    id: 2,
    name: "Бытовка-офис",
    size: "6×3 м",
    price: "95 000",
    desc: "Ламинат, пластиковые окна, встроенная электрика. Идеально для прорабской или офиса.",
    img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/6bcb1fe9-b20c-403f-b86e-a47b9e1ee1c0.jpg",
    tag: "Популярное",
  },
  {
    id: 3,
    name: "Склад-бытовка",
    size: "9×3 м",
    price: "120 000",
    desc: "Усиленный каркас, раздвижные ворота 2.4×2 м, антикоррозийное покрытие. Для хранения техники.",
    img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/9fa34a07-789a-41aa-aab2-37b4cea13d6a.jpg",
    tag: "Новинка",
  },
];

const ADVANTAGES = [
  { icon: "Zap", title: "Доставка за 3 дня", text: "Собственный автопарк, доставляем по всей России" },
  { icon: "Shield", title: "Гарантия 3 года", text: "На каркас и кровлю, устраняем дефекты бесплатно" },
  { icon: "Wrench", title: "Установка под ключ", text: "Бригада на месте — выравниваем, подключаем" },
  { icon: "BadgeCheck", title: "Сертифицировано", text: "ГОСТ и ТУ, все документы в комплекте" },
];

const GUARANTEES = [
  { num: "3", unit: "года", label: "гарантия на конструкцию" },
  { num: "500+", unit: "", label: "объектов сдано" },
  { num: "24/7", unit: "", label: "поддержка клиентов" },
  { num: "1", unit: "день", label: "монтаж на объекте" },
];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="font-sans bg-[#F7F5F2] text-[#1E1A16] min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F2]/90 backdrop-blur-sm border-b border-[#E8E4DF]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-semibold tracking-wide uppercase text-[#1E1A16]">
            Бытовки<span className="text-[#C8963E]">Про</span>
          </a>
          <nav className="hidden md:flex gap-8">
            {[
              { label: "Главная", id: "hero" },
              { label: "Преимущества", id: "advantages" },
              { label: "Каталог", id: "catalog" },
              { label: "Гарантии", id: "guarantees" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-[#6B6259] hover:text-[#C8963E] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("contacts")}
            className="hidden md:block bg-[#C8963E] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#A07830] transition-colors"
          >
            Получить прайс
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-[#F7F5F2] border-t border-[#E8E4DF] px-6 py-4 flex flex-col gap-4">
            {[
              { label: "Главная", id: "hero" },
              { label: "Преимущества", id: "advantages" },
              { label: "Каталог", id: "catalog" },
              { label: "Гарантии", id: "guarantees" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-base font-medium text-[#1E1A16] hover:text-[#C8963E] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <p className="text-[#C8963E] font-display text-sm tracking-[0.2em] uppercase mb-4">
              Производство и продажа
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight uppercase mb-6 text-[#1E1A16]">
              Бытовки<br />
              <span className="text-[#C8963E]">под ключ</span>
            </h1>
            <p className="text-lg text-[#6B6259] leading-relaxed mb-8 max-w-md">
              Производим и доставляем бытовки для строительных площадок, дач и складов. Быстро, надёжно, с гарантией 3 года.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("catalog")}
                className="bg-[#C8963E] text-white font-semibold px-8 py-4 hover:bg-[#A07830] transition-colors text-base"
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo("contacts")}
                className="border border-[#1E1A16] text-[#1E1A16] font-semibold px-8 py-4 hover:bg-[#1E1A16] hover:text-white transition-colors text-base"
              >
                Рассчитать стоимость
              </button>
            </div>
          </div>

          {/* Banner 4:3 */}
          <div className="animate-fade-in relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/a6491b85-4409-4a13-8dd6-3bfbae25858b.jpg"
                alt="Бытовка стандарт"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#C8963E] text-white px-6 py-4">
              <p className="font-display text-3xl font-semibold">от 68 000 ₽</p>
              <p className="text-sm opacity-90">без предоплаты</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#C8963E] font-display text-sm tracking-[0.2em] uppercase mb-3">Почему мы</p>
            <h2 className="font-display text-4xl font-semibold uppercase">Наши преимущества</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="group">
                <div className="w-12 h-12 bg-[#F7F5F2] flex items-center justify-center mb-4 group-hover:bg-[#C8963E] transition-colors">
                  <Icon name={a.icon} size={22} className="text-[#C8963E] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg uppercase mb-2">{a.title}</h3>
                <p className="text-[#6B6259] text-sm leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-[#F7F5F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#C8963E] font-display text-sm tracking-[0.2em] uppercase mb-3">Выбор</p>
            <h2 className="font-display text-4xl font-semibold uppercase">Каталог бытовок</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {CATALOG.map((item) => (
              <div key={item.id} className="bg-white group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#C8963E] text-white text-xs font-semibold px-3 py-1 font-display uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-semibold text-xl uppercase">{item.name}</h3>
                    <span className="text-[#C8963E] text-sm font-medium bg-[#F7F5F2] px-2 py-1 whitespace-nowrap ml-2">
                      {item.size}
                    </span>
                  </div>
                  <p className="text-[#6B6259] text-sm leading-relaxed mb-5">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-display font-semibold text-2xl">{item.price} ₽</p>
                    <button className="bg-[#1E1A16] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#C8963E] transition-colors">
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section id="guarantees" className="bg-[#1E1A16] py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#C8963E] font-display text-sm tracking-[0.2em] uppercase mb-3">Уверенность</p>
            <h2 className="font-display text-4xl font-semibold uppercase">Наши гарантии</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {GUARANTEES.map((g) => (
              <div key={g.label} className="border-t border-[#3A3530] pt-6">
                <p className="font-display text-5xl font-semibold text-[#C8963E]">
                  {g.num}<span className="text-2xl ml-1">{g.unit}</span>
                </p>
                <p className="text-[#A8A09A] text-sm mt-2 leading-snug">{g.label}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "FileCheck", title: "Договор", text: "Работаем официально по договору купли-продажи. Все условия прописаны заранее." },
              { icon: "Hammer", title: "Бесплатный ремонт", text: "Любые производственные дефекты устраняем за наш счёт в течение 3 лет." },
              { icon: "RotateCcw", title: "Возврат и замена", text: "Если бытовка не подошла при получении — заменяем или возвращаем деньги." },
            ].map((g) => (
              <div key={g.title} className="bg-[#2A2520] p-6">
                <Icon name={g.icon} size={24} className="text-[#C8963E] mb-4" />
                <h3 className="font-display font-semibold text-lg uppercase mb-2">{g.title}</h3>
                <p className="text-[#A8A09A] text-sm leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#C8963E] font-display text-sm tracking-[0.2em] uppercase mb-3">Связь</p>
            <h2 className="font-display text-4xl font-semibold uppercase mb-6">Контакты</h2>
            <p className="text-[#6B6259] leading-relaxed mb-10 max-w-sm">
              Оставьте заявку — менеджер свяжется в течение 15 минут и подберёт нужную модель.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: "Phone", text: "+7 (800) 123-45-67", label: "Бесплатный звонок" },
                { icon: "MapPin", text: "Москва, ул. Производственная, 12", label: "Шоурум и склад" },
                { icon: "Clock", text: "Пн–Пт 9:00–19:00, Сб 10:00–16:00", label: "График работы" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F7F5F2] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={c.icon} size={18} className="text-[#C8963E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E1A16]">{c.text}</p>
                    <p className="text-sm text-[#6B6259]">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F7F5F2] p-8">
            <h3 className="font-display text-xl font-semibold uppercase mb-6">Оставить заявку</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium text-[#6B6259] block mb-1.5">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full bg-white border border-[#E8E4DF] px-4 py-3 text-[#1E1A16] placeholder:text-[#B0A89E] focus:outline-none focus:border-[#C8963E] transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#6B6259] block mb-1.5">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-white border border-[#E8E4DF] px-4 py-3 text-[#1E1A16] placeholder:text-[#B0A89E] focus:outline-none focus:border-[#C8963E] transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#6B6259] block mb-1.5">Что интересует?</label>
                <textarea
                  rows={3}
                  placeholder="Размер, количество, условия доставки..."
                  className="w-full bg-white border border-[#E8E4DF] px-4 py-3 text-[#1E1A16] placeholder:text-[#B0A89E] focus:outline-none focus:border-[#C8963E] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#C8963E] text-white font-semibold py-4 hover:bg-[#A07830] transition-colors font-display uppercase tracking-wide"
              >
                Отправить заявку
              </button>
              <p className="text-xs text-[#B0A89E] text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1E1A16] text-[#A8A09A] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="font-display font-semibold text-white uppercase tracking-wide">
            Бытовки<span className="text-[#C8963E]">Про</span>
          </p>
          <p>© 2024 БытовкиПро. Все права защищены.</p>
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
}
