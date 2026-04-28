import { useReveal } from "@/hooks/use-reveal"

const networks = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    url: "https://chat.openai.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/240px-ChatGPT_logo.svg.png",
    description: "Самый популярный ИИ-ассистент. Пишет тексты, составляет планы уроков, объясняет сложные темы простым языком, помогает с творческими заданиями.",
    tag: "Текст · Диалог",
  },
  {
    name: "GigaChat",
    company: "Сбер",
    url: "https://gigachat.ru",
    logo: "https://avatars.githubusercontent.com/u/136580992?s=200&v=4",
    description: "Российский ИИ-ассистент от Сбера. Отлично понимает русский язык, знает российские образовательные стандарты. Работает без VPN.",
    tag: "Текст · Русский язык",
  },
  {
    name: "Qwen",
    company: "Alibaba",
    url: "https://chat.qwen.ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Qwen_logo.svg/240px-Qwen_logo.svg.png",
    description: "Мощный ИИ-ассистент от Alibaba. Поддерживает русский язык, хорошо справляется с длинными текстами, анализом документов и написанием учебных материалов.",
    tag: "Текст · Анализ",
  },
  {
    name: "Gemini",
    company: "Google",
    url: "https://gemini.google.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/240px-Google_Gemini_logo.svg.png",
    description: "ИИ от Google с доступом к актуальной информации. Работает с изображениями и документами Google. Интегрирован в Google Workspace.",
    tag: "Текст · Изображения",
  },
  {
    name: "YandexGPT",
    company: "Яндекс",
    url: "https://300.ya.ru",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Yandex_logo_en.svg/240px-Yandex_logo_en.svg.png",
    description: "ИИ от Яндекса: пересказывает документы, помогает с поиском, встроен в сервисы Яндекса. Доступен в России без ограничений.",
    tag: "Текст · Поиск",
  },
  {
    name: "Wolfram Alpha",
    company: "Wolfram Research",
    url: "https://www.wolframalpha.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Wolfram_Language_Logo_2016.svg/240px-Wolfram_Language_Logo_2016.svg.png",
    description: "Интеллектуальная система вычислений и поиска знаний. Незаменима на уроках математики, физики и химии — решает задачи, строит графики и объясняет шаги решения.",
    tag: "Математика · Наука",
  },
  {
    name: "Midjourney",
    company: "Midjourney Inc.",
    url: "https://midjourney.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/240px-Midjourney_Emblem.png",
    description: "Генерация изображений по текстовому описанию. Создаёт иллюстрации для учебных материалов, презентаций и плакатов.",
    tag: "Изображения",
  },
  {
    name: "Kandinsky",
    company: "Сбер",
    url: "https://fusionbrain.ai",
    logo: "https://fusionbrain.ai/static/img/logo/logo.svg",
    description: "Российская нейросеть для генерации изображений от Сбера. Бесплатно создаёт иллюстрации и арты по текстовому описанию на русском языке.",
    tag: "Изображения · Бесплатно",
  },
  {
    name: "Suno",
    company: "Suno AI",
    url: "https://suno.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Suno_logo_%28symbol%29.svg/240px-Suno_logo_%28symbol%29.svg.png",
    description: "Генерирует музыку и песни по текстовому описанию. Подходит для создания образовательных песен, гимнов класса и фоновой музыки к мероприятиям.",
    tag: "Музыка · Аудио",
  },
  {
    name: "DeepSeek",
    company: "DeepSeek AI",
    url: "https://chat.deepseek.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/240px-DeepSeek_logo.svg.png",
    description: "Бесплатный ИИ-ассистент с сильными аналитическими способностями. Отлично решает задачи по математике, программированию и логике, хорошо понимает русский язык.",
    tag: "Текст · Математика",
  },
  {
    name: "Perplexity",
    company: "Perplexity AI",
    url: "https://www.perplexity.ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Perplexity_AI_logo.svg/240px-Perplexity_AI_logo.svg.png",
    description: "ИИ-поисковик, который отвечает на вопросы со ссылками на источники. Помогает учителям быстро находить достоверную информацию для подготовки к урокам.",
    tag: "Поиск · Исследования",
  },
  {
    name: "MathGPTPro",
    company: "MathGPT",
    url: "https://mathgptpro.com",
    logo: "https://mathgptpro.com/favicon.ico",
    description: "Специализированный ИИ для решения математических задач. Пошагово объясняет решения, строит графики и помогает ученикам разобраться в сложных темах.",
    tag: "Математика · Обучение",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-20 md:px-12 lg:px-16 overflow-y-auto"
    >
      <div className="mx-auto w-full max-w-7xl py-8">
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Нейросети
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Популярные инструменты для образования</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {networks.map((net, i) => (
            <a
              key={net.name}
              href={net.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-xl border border-foreground/10 bg-foreground/5 p-4 backdrop-blur-sm transition-all duration-700 hover:border-foreground/30 hover:bg-foreground/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-foreground/10 bg-white/10 p-1.5">
                  <img
                    src={net.logo}
                    alt={net.name}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none"
                      const parent = (e.target as HTMLImageElement).parentElement
                      if (parent) parent.innerHTML = `<span class="font-mono text-sm font-bold text-foreground/70">${net.name[0]}</span>`
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans text-base font-medium text-foreground transition-transform duration-300 group-hover:translate-x-1">
                    {net.name}
                  </h3>
                  <p className="font-mono text-xs text-foreground/45">{net.company}</p>
                </div>
                <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/70">↗</span>
              </div>

              <p className="mb-3 flex-1 text-xs leading-relaxed text-foreground/70 md:text-sm">
                {net.description}
              </p>

              <div className="border-t border-foreground/10 pt-3">
                <span className="rounded-full border border-foreground/15 px-2 py-0.5 font-mono text-xs text-foreground/40">
                  {net.tag}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 pb-8">
          <p className="font-mono text-xs text-foreground/35">Нажмите на карточку, чтобы перейти на сайт нейросети</p>
        </div>
      </div>
    </section>
  )
}