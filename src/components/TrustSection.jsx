const trustFacts = [
  {
    value: '01',
    title: 'Экспертный подход',
    text: 'Фокус не на случайных упражнениях, а на понятной системе под конкретную цель.',
  },
  {
    value: '02',
    title: 'Разные уровни',
    text: 'Можно стартовать мягко, выбрать домашний формат или тренироваться в зале.',
  },
  {
    value: '03',
    title: 'Без хаоса',
    text: 'Пользователь быстро понимает, какая программа ему подходит и что делать дальше.',
  },
  {
    value: '04',
    title: 'Воронка до заявки',
    text: 'После выбора направления человек сразу переходит к форме подбора.',
  },
]

function TrustSection() {
  return (
    <section className="trust section" id="trust">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Доверие и экспертность</p>
            <h2>Тренировки должны быть понятными, а не случайными</h2>
          </div>

          <p>
            Этот блок усиливает первый экран: объясняет подход, показывает
            структуру и переводит внимание от эмоции к решению.
          </p>
        </div>

        <div className="trust__grid">
          <div className="trust__quote">
            <p>
              «Главная задача программы — не просто дать упражнения, а помочь
              выбрать реалистичный путь под цель, уровень и привычный ритм жизни».
            </p>
            <span>Подход мини-лендинга</span>
          </div>

          <div className="trust__facts">
            {trustFacts.map((fact) => (
              <article className="fact-card" key={fact.value}>
                <span>{fact.value}</span>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection