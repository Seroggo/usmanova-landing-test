function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Онлайн-тренировки с Катей Усмановой</p>

          <h1>Приведите тело в форму с программой под вашу цель</h1>

          <p className="hero__lead">
            Выберите направление: похудение, ягодицы, плоский живот, тренировки
            в зале или мягкий старт после паузы. Мини-лендинг ведёт к простому
            подбору программы.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#programs">
              Выбрать программу
            </a>

            <a className="button button--ghost" href="#trust">
              Как это работает
            </a>
          </div>

          <div className="hero__bullets" aria-label="Преимущества">
            <span>Дом / зал</span>
            <span>Понятный старт</span>
            <span>Цель без перегруза</span>
          </div>
        </div>

        <div className="hero__visual" aria-label="Фото тренера и преимущества программы">
          <div className="fitness-card">
            <div className="fitness-card__top">
              <span className="fitness-card__label">Тренировка дня</span>
              <span className="fitness-card__time">35 мин</span>
            </div>

            <div className="fitness-card__figure fitness-card__figure--photo">
              <img
                className="fitness-card__image"
                src="/hero-katya.png"
                alt="Фитнес-тренер с гантелей"
              />
            </div>

            <div className="fitness-card__stats">
              <div>
                <strong>4</strong>
                <span>цели</span>
              </div>

              <div>
                <strong>12</strong>
                <span>недель</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>онлайн</span>
              </div>
            </div>
          </div>

          <div className="hero__floating-card">
            <strong>Подбор за 1 минуту</strong>
            <span>Оставьте цель — получите подходящее направление</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero