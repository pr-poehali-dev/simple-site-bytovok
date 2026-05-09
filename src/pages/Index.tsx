import { useState } from "react";
import Icon from "@/components/ui/icon";

const CATALOG_ITEMS = [
  {
    id: 1,
    name: "Бытовка стандарт",
    size: "24 м²",
    rooms: 1,
    price: "68 000",
    img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/8b174e08-296e-4599-a565-7fd45a624de4.jpg",
    category: "standard",
  },
  {
    id: 2,
    name: "Деревянная бытовка",
    size: "18 м²",
    rooms: 1,
    price: "54 000",
    img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/2a6db8e0-6c9c-4253-90f5-b1d4eae58231.jpg",
    category: "wood",
  },
  {
    id: 3,
    name: "Склад-бытовка",
    size: "36 м²",
    rooms: 1,
    price: "120 000",
    img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/6ae1aba4-864a-4742-becc-5361ec1aed0d.jpg",
    category: "storage",
  },
  {
    id: 4,
    name: "Бытовка-офис",
    size: "28 м²",
    rooms: 2,
    price: "95 000",
    img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/98069637-0581-48d1-ad55-76ca06a7ac5c.jpg",
    category: "office",
  },
  {
    id: 5,
    name: "Бытовка усиленная",
    size: "32 м²",
    rooms: 2,
    price: "105 000",
    img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/a6491b85-4409-4a13-8dd6-3bfbae25858b.jpg",
    category: "standard",
  },
];

const FILTERS = [
  { id: "all", label: "Все модели" },
  { id: "standard", label: "Стандарт" },
  { id: "wood", label: "Деревянные" },
  { id: "office", label: "Офисные" },
  { id: "storage", label: "Склады" },
];

const STEPS = [
  { num: "01", title: "Выбор модели", time: "1 день", desc: "Выбираете подходящую бытовку из каталога или мы подбираем по вашим параметрам." },
  { num: "02", title: "Договор и оплата", time: "1 день", desc: "Подписываем договор, фиксируем цену. Работаем официально, предоплата по договорённости." },
  { num: "03", title: "Производство", time: "5–10 дней", desc: "Изготавливаем бытовку согласно выбранной комплектации и размерам на собственном производстве." },
  { num: "04", title: "Доставка", time: "1–3 дня", desc: "Доставляем собственным транспортом, устанавливаем на площадке, выравниваем." },
  { num: "05", title: "Сдача объекта", time: "1 день", desc: "Принимаете работу и подписываете акт. Передаём все документы и гарантийный талон." },
];

const TEAM = [
  { name: "Андрей Смирнов", role: "Директор", img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/b530cc2f-fbaf-4e20-8e97-726d4cc92b7e.jpg" },
  { name: "Игорь Колесов", role: "Главный инженер", img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/d9ebdd76-d46c-4a9f-b570-31cdff04cf9b.jpg" },
  { name: "Сергей Петров", role: "Прораб", img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/b530cc2f-fbaf-4e20-8e97-726d4cc92b7e.jpg" },
];

const NAV_LINKS = [
  { label: "Каталог", id: "catalog" },
  { label: "О компании", id: "about" },
  { label: "Этапы", id: "steps" },
  { label: "Контакты", id: "contacts" },
];

export default function Index() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const filtered = activeFilter === "all"
    ? CATALOG_ITEMS
    : CATALOG_ITEMS.filter(i => i.category === activeFilter);

  return (
    <div className="font-sans bg-white text-[#1a1a1a] min-h-screen">

      {/* TOP BAR */}
      <div className="bg-[#2d2d2d] text-white text-xs py-2 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6 text-[#aaa]">
            <span className="flex items-center gap-1.5"><Icon name="MapPin" size={12} />Москва, ул. Производственная, 12</span>
            <span className="flex items-center gap-1.5"><Icon name="Mail" size={12} />info@bytovki.ru</span>
          </div>
          <div className="flex items-center gap-6 text-[#aaa]">
            <span className="flex items-center gap-1.5"><Icon name="Phone" size={12} />+7 (800) 123-45-67</span>
            <span className="text-[#4CAF50]">Пн–Пт 9:00–18:00</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4CAF50] flex items-center justify-center rounded">
              <Icon name="Home" size={16} className="text-white" />
            </div>
            <span className="font-display font-semibold text-lg uppercase tracking-wide">БытовкиПро</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm font-medium text-[#444] hover:text-[#4CAF50] transition-colors">
                {l.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("contacts")}
            className="hidden md:flex items-center gap-2 bg-[#1a1a1a] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#4CAF50] transition-colors rounded-full"
          >
            Заказать звонок
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left font-medium hover:text-[#4CAF50]">{l.label}</button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="bg-white pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Бытовки{" "}
            <img
              src="https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/8b174e08-296e-4599-a565-7fd45a624de4.jpg"
              className="w-14 h-14 rounded-full object-cover inline-block align-middle border-2 border-[#4CAF50] mx-1"
              alt=""
            />
            под ключ<br />по всей России
          </h1>
          <button
            onClick={() => scrollTo("catalog")}
            className="inline-flex items-center gap-2 bg-[#4CAF50] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#388E3C] transition-colors"
          >
            Перейти в каталог
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>

        {/* INFO CARDS */}
        <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-4">
          <div className="bg-[#2d2d2d] text-white rounded-2xl p-6">
            <p className="text-[#4CAF50] font-semibold text-sm mb-2">Скидка 13%</p>
            <p className="font-semibold text-lg leading-snug mb-2">Скидки при заказе от 2 бытовок</p>
            <p className="text-[#aaa] text-sm">Подберём выгодные условия, проконсультируем по комплектациям</p>
          </div>
          <div className="rounded-2xl overflow-hidden relative aspect-video md:aspect-auto">
            <img src="https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/a6491b85-4409-4a13-8dd6-3bfbae25858b.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="bg-[#F7F5F2] rounded-2xl p-6">
            <p className="text-[#4CAF50] font-semibold text-sm mb-2">Рассрочка 0%</p>
            <p className="font-semibold text-lg leading-snug mb-2">Бытовка в рассрочку на 12 месяцев</p>
            <p className="text-[#777] text-sm">Выбираем выгодные условия с нулевой переплатой</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#4CAF50] text-sm font-semibold uppercase tracking-widest mb-4">О компании</p>
          <p className="text-xl md:text-2xl text-[#444] leading-relaxed max-w-3xl mb-12">
            Компания «БытовкиПро» работает с 2012 года. Производим, доставляем и устанавливаем бытовки для строительных площадок, дачных участков и коммерческих объектов по всей России.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {[
              { num: "12", unit: "лет", label: "на рынке" },
              { num: "500+", unit: "", label: "сданных объектов" },
              { num: "3000+", unit: "", label: "доставленных бытовок" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl md:text-5xl font-semibold text-[#1a1a1a]">
                  {s.num}<span className="text-2xl ml-1 text-[#4CAF50]">{s.unit}</span>
                </p>
                <p className="text-[#777] text-sm mt-1">{s.label}</p>
              </div>
            ))}
            <div className="flex justify-end">
              <button
                onClick={() => scrollTo("catalog")}
                className="w-14 h-14 bg-[#4CAF50] rounded-full flex items-center justify-center hover:bg-[#388E3C] transition-colors"
              >
                <Icon name="ArrowUpRight" size={22} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WE OFFER — green band */}
      <section className="bg-[#4CAF50] py-14 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-4xl font-semibold text-white">Мы предлагаем</h2>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="ArrowLeft" size={16} className="text-white" />
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-2">
            {[
              { label: "Строительные", img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/8b174e08-296e-4599-a565-7fd45a624de4.jpg" },
              { label: "Деревянные", img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/2a6db8e0-6c9c-4253-90f5-b1d4eae58231.jpg" },
              { label: "Складские", img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/6ae1aba4-864a-4742-becc-5361ec1aed0d.jpg" },
              { label: "Офисные", img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/98069637-0581-48d1-ad55-76ca06a7ac5c.jpg" },
              { label: "Усиленные", img: "https://cdn.poehali.dev/projects/21ee6267-32ce-4a66-b293-2efa87c1f6a6/files/a6491b85-4409-4a13-8dd6-3bfbae25858b.jpg" },
            ].map((cat) => (
              <button key={cat.label} className="flex-shrink-0 flex flex-col items-center gap-2 group" onClick={() => scrollTo("catalog")}>
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 group-hover:border-white transition-colors">
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
                </div>
                <p className="text-white text-sm font-medium text-center">{cat.label}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-semibold text-center mb-2">Ознакомьтесь<br />с нашими моделями</h2>
          <p className="text-center text-[#777] mb-10">Широкий выбор бытовок — от стандартных до премиальных</p>

          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeFilter === f.id
                    ? "bg-[#4CAF50] text-white border-[#4CAF50]"
                    : "bg-white text-[#444] border-[#e0e0e0] hover:border-[#4CAF50] hover:text-[#4CAF50]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filtered.slice(0, 4).map(item => (
              <div key={item.id} className="group cursor-pointer rounded-2xl overflow-hidden bg-[#F7F5F2] hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-white/90 text-[#1a1a1a] text-xs font-semibold px-3 py-1 rounded-full">
                      {item.size}
                    </span>
                    <span className="bg-white/90 text-[#1a1a1a] text-xs font-semibold px-3 py-1 rounded-full">
                      {item.rooms === 1 ? "1 помещение" : `${item.rooms} помещения`}
                    </span>
                  </div>
                  <button className="absolute top-3 right-3 w-9 h-9 bg-[#4CAF50] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="ArrowUpRight" size={16} className="text-white" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-1">{item.name}</h3>
                  <p className="font-display text-xl font-semibold text-[#4CAF50]">{item.price} ₽</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-[#F7F5F2] flex flex-col items-center justify-center p-8 gap-4 min-h-[200px]">
              <div className="w-14 h-14 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <Icon name="ArrowUpRight" size={24} className="text-white" />
              </div>
              <p className="font-semibold text-center text-[#1a1a1a]">Перейти<br />в каталог</p>
              <button onClick={() => scrollTo("contacts")} className="text-sm text-[#4CAF50] font-medium hover:underline">
                Смотреть все →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="steps" className="py-20 bg-[#F7F5F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-semibold mb-12">Этапы<br />работы</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className={`rounded-2xl p-6 ${i === 3 ? "bg-[#4CAF50] text-white" : "bg-white"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-semibold ${i === 3 ? "text-white/70" : "text-[#aaa]"}`}>{s.num}</span>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${i === 3 ? "bg-white/20 text-white" : "bg-[#F7F5F2] text-[#555]"}`}>
                    {s.time}
                  </span>
                </div>
                <h3 className={`font-semibold text-lg mb-3 ${i === 3 ? "text-white" : "text-[#1a1a1a]"}`}>{s.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 3 ? "text-white/80" : "text-[#777]"}`}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-semibold mb-12">Команда</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex gap-4 flex-wrap">
              {TEAM.map((m, i) => (
                <button
                  key={m.name}
                  onClick={() => setActiveTeam(i)}
                  className={`rounded-full overflow-hidden transition-all ${
                    activeTeam === i ? "w-32 h-32 ring-4 ring-[#4CAF50]" : "w-24 h-24 opacity-60 hover:opacity-80"
                  }`}
                >
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div>
              <p className="text-[#4CAF50] text-sm font-semibold uppercase tracking-widest mb-2">{TEAM[activeTeam].role}</p>
              <h3 className="font-display text-3xl font-semibold mb-4">{TEAM[activeTeam].name}</h3>
              <p className="text-[#777] leading-relaxed text-sm">
                Опытный специалист с профильным образованием. Контролирует качество производства, ведёт переговоры с клиентами и обеспечивает соблюдение сроков на каждом этапе.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#4CAF50] py-20 mx-4 md:mx-6 rounded-3xl mb-6">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight">
            Поработаем<br />вместе?
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
              <Icon name="ArrowUpRight" size={32} className="text-white" />
            </div>
            <button
              onClick={() => scrollTo("contacts")}
              className="bg-white text-[#1a1a1a] font-semibold px-8 py-3 rounded-full hover:bg-[#F7F5F2] transition-colors"
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacts" className="bg-[#1a1a1a] text-white pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <p className="font-display font-semibold text-lg uppercase mb-4">
                Бытовки<span className="text-[#4CAF50]">Про</span>
              </p>
              <div className="flex flex-col gap-3 text-[#aaa] text-sm">
                {NAV_LINKS.map(l => (
                  <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left hover:text-white transition-colors">{l.label}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">Свяжитесь с нами</p>
              <div className="flex flex-col gap-3 text-[#aaa] text-sm mb-6">
                <p className="flex items-center gap-2"><Icon name="Mail" size={14} />info@bytovki.ru</p>
                <p className="flex items-center gap-2"><Icon name="Phone" size={14} />+7 (800) 123-45-67</p>
                <p className="flex items-center gap-2"><Icon name="MapPin" size={14} />Москва, ул. Производственная, 12</p>
              </div>
              <p className="font-semibold mb-3 text-sm">Быстрая заявка</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Ваше имя" className="bg-[#2d2d2d] border-none px-4 py-2.5 text-sm text-white placeholder:text-[#666] focus:outline-none focus:ring-1 focus:ring-[#4CAF50] rounded-lg" />
                <input type="tel" placeholder="+7 (___) ___-__-__" className="bg-[#2d2d2d] border-none px-4 py-2.5 text-sm text-white placeholder:text-[#666] focus:outline-none focus:ring-1 focus:ring-[#4CAF50] rounded-lg" />
                <button type="submit" className="bg-[#4CAF50] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#388E3C] transition-colors">
                  Отправить
                </button>
              </form>
            </div>
            <div>
              <p className="font-semibold mb-4">Мы в соцсетях</p>
              <div className="flex gap-3">
                {["MessageCircle", "Send", "Youtube", "Instagram"].map(icon => (
                  <div key={icon} className="w-10 h-10 bg-[#2d2d2d] rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors cursor-pointer">
                    <Icon name={icon} size={16} className="text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#333] pt-6 flex flex-col md:flex-row justify-between text-[#666] text-xs gap-2">
            <p>© 2012–2024 БытовкиПро</p>
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
