const trustFacts = [
  {
    value: '01',
    title: 'Система подбора за 2 минуты',
    text: 'Вы быстро понимаете, с какого направления начать, без случайных упражнений и перегруженного выбора.',
  },
  {
    value: '02',
    title: 'От новичка до продвинутого',
    text: 'Можно начать мягко после паузы, тренироваться дома или выбрать более активный формат для занятий в зале.',
  },
  {
    value: '03',
    title: 'Фокус на конкретную цель',
    text: 'Каждое направление собрано под понятный запрос: похудение, ягодицы, плоский живот или комфортный старт.',
  },
  {
    value: '04',
    title: 'Быстрый старт',
    text: 'После выбора направления вы сразу переходите к форме подбора и можете сделать следующий шаг без лишних действий.',
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
            Система подбора программы, которая учитывает вашу цель, уровень
            подготовки и ритм жизни — без случайных упражнений и лишнего хаоса.
          </p>
        </div>

        <div className="trust__grid">
          <div className="trust__quote">
            <p>
              «Главная задача программы — не просто дать упражнения, а помочь
              выбрать реалистичный путь под вашу цель, уровень и ритм жизни.
              Чтобы вы начали тренироваться, а не откладывали».
            </p>
            <span>Принцип подбора программы</span>
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