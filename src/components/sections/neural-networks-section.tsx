import { useReveal } from "@/hooks/use-reveal"

const networks = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    url: "https://chat.openai.com",
    logo: "🤖",
    description: "Самый известный ИИ-помощник. Умеет вести диалог, объяснять темы, писать тексты, составлять планы уроков и проверять задания. Идеален для начинающих пользователей.",
    direction: "top",
  },
  {
    name: "GigaChat",
    company: "Сбер",
    url: "https://gigachat.ru",
    logo: "🇷🇺",
    description: "Российский ИИ-ассистент от Сбера. Отлично понимает русский язык, знает российские реалии и образовательные стандарты. Рекомендован для работы в российских школах.",
    direction: "right",
  },
  {
    name: "Claude",
    company: "Anthropic",
    url: "https://claude.ai",
    logo: "✨",
    description: "ИИ-ассистент с акцентом на безопасность и точность. Особенно хорошо справляется с анализом текстов, подготовкой документов и методических материалов.",
    direction: "left",
  },
  {
    name: "Gemini",
    company: "Google",
    url: "https://gemini.google.com",
    logo: "💎",
    description: "ИИ от Google с доступом к актуальной информации из интернета. Умеет работать с изображениями, таблицами и документами Google. Интегрирован в Google Workspace.",
    direction: "bottom",
  },
  {
    name: "Яндекс ИИ",
    company: "Яндекс",
    url: "https://ya.ru/ai",
    logo: "🔴",
    description: "Экосистема ИИ-инструментов от Яндекса: Алиса, YandexGPT и нейросетевые сервисы. Доступны без VPN, хорошо адаптированы под российских пользователей.",
    direction: "right",
  },
  {
    name: "Copilot",
    company: "Microsoft",
    url: "https://copilot.microsoft.com",
    logo: "🪟",
    description: "ИИ-помощник Microsoft, встроенный в Windows, Word и Teams. Помогает писать документы, создавать презентации и анализировать данные прямо в привычных программах.",
    direction: "left",
  },
]

export function NeuralNetworksSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-start px-6 pt-20 md:px-12 lg:px-16 overflow-y-auto"
    >
      <div className="mx-auto w-full max-w-7xl py-8">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Нейросети
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Популярные инструменты</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {networks.map((net, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                switch (net.direction) {
                  case "left": return "-translate-x-16 opacity-0"
                  case "right": return "translate-x-16 opacity-0"
                  case "top": return "-translate-y-16 opacity-0"
                  case "bottom": return "translate-y-16 opacity-0"
                  default: return "translate-y-12 opacity-0"
                }
              }
              return "translate-x-0 translate-y-0 opacity-100"
            }

            return (
              <a
                key={i}
                href={net.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-xl border border-foreground/10 bg-foreground/5 p-4 backdrop-blur-sm transition-all duration-700 hover:border-foreground/25 hover:bg-foreground/10 md:p-5 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-foreground/15 bg-foreground/10 text-xl">
                    {net.logo}
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-medium text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-lg">
                      {net.name}
                    </h3>
                    <p className="font-mono text-xs text-foreground/50">{net.company}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="font-mono text-xs text-foreground/30 transition-colors group-hover:text-foreground/60">→</span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-foreground/70 md:text-sm">
                  {net.description}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
