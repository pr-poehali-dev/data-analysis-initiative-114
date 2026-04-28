import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const prompts = [
  {
    title: "План урока",
    category: "Подготовка к уроку",
    prompt: `Ты опытный методист. Составь подробный план урока по теме «[ТЕМА]» для [КЛАСС] класса. Предмет: [ПРЕДМЕТ]. Продолжительность: 45 минут. Включи: цели и задачи урока, этапы урока с временем, методы работы, вопросы для обсуждения, домашнее задание. Форма — таблица.`,
    direction: "top",
  },
  {
    title: "Объяснение темы",
    category: "Подготовка к уроку",
    prompt: `Объясни тему «[ТЕМА]» для ученика [КЛАСС] класса простым и понятным языком. Используй аналогии из повседневной жизни. Приведи 2–3 примера. В конце дай 3 вопроса для самопроверки.`,
    direction: "right",
  },
  {
    title: "План воспитательной работы",
    category: "Классный руководитель",
    prompt: `Составь план воспитательной работы с классом на [МЕСЯЦ / ЧЕТВЕРТЬ] для [КЛАСС] класса. Включи: тематические классные часы, мероприятия по направлениям (гражданское, нравственное, спортивное, творческое), работу с родителями. Оформи в виде таблицы с датами.`,
    direction: "left",
  },
  {
    title: "Родительское собрание",
    category: "Классный руководитель",
    prompt: `Разработай план проведения родительского собрания на тему «[ТЕМА]» для родителей учеников [КЛАСС] класса. Включи: вступительное слово, основные вопросы повестки, рекомендации для родителей, время на вопросы и обратную связь. Продолжительность: 60 минут.`,
    direction: "bottom",
  },
  {
    title: "Внеклассное мероприятие",
    category: "Внеурочная деятельность",
    prompt: `Составь подробный план внеклассного мероприятия для учеников 10 класса на тему «[ТЕМА]». Укажи: цель и задачи, форму проведения, этапы с временем, необходимое оборудование, ожидаемые результаты. Мероприятие должно быть интерактивным и вовлекающим.`,
    direction: "top",
  },
  {
    title: "Викторина по теме",
    category: "Подготовка к уроку",
    prompt: `Составь викторину из 10 вопросов по теме «[ТЕМА]» для [КЛАСС] класса. К каждому вопросу дай 4 варианта ответа, отметь правильный. Вопросы должны быть разного уровня сложности: 3 лёгких, 4 средних, 3 сложных.`,
    direction: "right",
  },
  {
    title: "Проверочная работа",
    category: "Контроль знаний",
    prompt: `Создай проверочную работу по теме «[ТЕМА]» для [КЛАСС] класса. Включи 3 уровня заданий: базовый (тест), средний (краткие ответы), повышенный (задача или эссе). Добавь критерии оценивания.`,
    direction: "left",
  },
  {
    title: "Классный час",
    category: "Классный руководитель",
    prompt: `Разработай сценарий классного часа на тему «[ТЕМА]» для [КЛАСС] класса. Продолжительность: 40 минут. Включи: вступление, основную часть с активностями и дискуссией, рефлексию. Мероприятие должно быть интерактивным.`,
    direction: "bottom",
  },
  {
    title: "Характеристика ученика",
    category: "Документация",
    prompt: `Помоги написать педагогическую характеристику ученика [КЛАСС] класса для [ЦЕЛЬ: портфолио / комиссия / перевод]. Ученик: [КРАТКОЕ ОПИСАНИЕ]. Стиль — официальный, доброжелательный, объективный. Объём — 1 страница.`,
    direction: "top",
  },
  {
    title: "Сценарий праздника",
    category: "Внеурочная деятельность",
    prompt: `Напиши сценарий школьного праздника «[НАЗВАНИЕ]» для учеников [КЛАСС] класса. Включи: ведущего, конкурсы, творческие номера, поздравления. Продолжительность: 1,5 часа. Стиль — весёлый и торжественный.`,
    direction: "right",
  },
  {
    title: "Индивидуальный маршрут",
    category: "Подготовка к уроку",
    prompt: `Составь индивидуальный образовательный маршрут для ученика [КЛАСС] класса, испытывающего трудности с темой «[ТЕМА]». Включи: диагностику пробелов, план восполнения, рекомендуемые ресурсы, сроки и критерии достижения результата.`,
    direction: "left",
  },
]

const categories = ["Все", "Подготовка к уроку", "Классный руководитель", "Внеурочная деятельность", "Контроль знаний", "Документация"]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [activeCategory, setActiveCategory] = useState("Все")
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const filtered = activeCategory === "Все" ? prompts : prompts.filter(p => p.category === activeCategory)

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-20 md:px-12 lg:px-16 overflow-y-auto"
    >
      <div className="mx-auto w-full max-w-7xl py-8">
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Промты
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Шаблоны запросов для учителей</p>
        </div>

        {/* Category filter */}
        <div
          className={`mb-8 flex flex-wrap gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition-all duration-200 ${
                activeCategory === cat
                  ? "border-foreground/60 bg-foreground/15 text-foreground"
                  : "border-foreground/20 text-foreground/50 hover:border-foreground/40 hover:text-foreground/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <div
              key={item.title}
              className={`group relative rounded-xl border border-foreground/10 bg-foreground/5 p-4 backdrop-blur-sm transition-all duration-700 hover:border-foreground/25 hover:bg-foreground/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <span className="mb-1 block font-mono text-xs text-foreground/40">{item.category}</span>
                  <h3 className="font-sans text-base font-medium text-foreground md:text-lg">{item.title}</h3>
                </div>
                <button
                  onClick={() => handleCopy(item.prompt, i)}
                  className="shrink-0 rounded-lg border border-foreground/15 bg-foreground/10 px-2.5 py-1 font-mono text-xs text-foreground/60 transition-all hover:border-foreground/30 hover:text-foreground"
                >
                  {copiedIndex === i ? "✓ Скопировано" : "Копировать"}
                </button>
              </div>
              <p className="text-xs leading-relaxed text-foreground/65 md:text-sm">{item.prompt}</p>
              <div className="mt-3 border-t border-foreground/10 pt-3">
                <p className="font-mono text-xs text-foreground/35">Замените текст в [скобках] на свои данные</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pb-8">
          <p className="font-mono text-xs text-foreground/40">Всего промтов: {prompts.length} · Отфильтровано: {filtered.length}</p>
        </div>
      </div>
    </section>
  )
}
