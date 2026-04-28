import { useReveal } from "@/hooks/use-reveal"

const definitions = [
  {
    term: "Искусственный интеллект",
    short: "AI",
    description:
      "Искусственный интеллект (ИИ) — это область информатики, занимающаяся созданием систем, способных выполнять задачи, которые обычно требуют человеческого интеллекта: распознавание речи и изображений, принятие решений, перевод текста, обучение на основе опыта. ИИ уже используется в поисковых системах, умных помощниках, рекомендательных сервисах и образовании.",
    direction: "top",
  },
  {
    term: "Нейросеть",
    short: "NN",
    description:
      "Нейронная сеть — это математическая модель, вдохновлённая строением человеческого мозга. Она состоит из слоёв искусственных нейронов, которые обучаются на огромных массивах данных. Нейросети умеют генерировать текст, изображения, музыку, отвечать на вопросы и помогать в творческих задачах. Чем больше данных — тем точнее результат.",
    direction: "right",
  },
  {
    term: "Промт",
    short: "PT",
    description:
      "Промт (prompt) — это запрос или инструкция, которую пользователь передаёт нейросети. От качества промта зависит качество ответа: чем точнее и подробнее сформулирован запрос, тем полезнее результат. Хороший промт содержит контекст, роль, задачу и ожидаемый формат ответа. Это ключевой навык работы с ИИ-инструментами.",
    direction: "left",
  },
]

export function DefinitionsSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16 overflow-y-auto"
    >
      <div className="mx-auto w-full max-w-7xl py-8">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            ИИ: термины
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Ключевые определения</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {definitions.map((def, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                switch (def.direction) {
                  case "left": return "-translate-x-16 opacity-0"
                  case "right": return "translate-x-16 opacity-0"
                  case "top": return "-translate-y-16 opacity-0"
                  default: return "translate-y-12 opacity-0"
                }
              }
              return "translate-x-0 translate-y-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`group border-b border-foreground/10 pb-6 transition-all duration-700 hover:border-foreground/20 md:pb-8 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start gap-4 md:gap-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-foreground/20 bg-foreground/10 backdrop-blur-sm md:h-12 md:w-12">
                    <span className="font-mono text-xs font-bold text-foreground/70">{def.short}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-2xl lg:text-3xl">
                      {def.term}
                    </h3>
                    <p className="max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base">
                      {def.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}