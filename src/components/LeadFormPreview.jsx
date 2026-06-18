function LeadFormPreview() {
  return (
    <aside className="lead-form-card" id="lead-form">
      <p className="eyebrow">Заявка</p>

      <h2>Подобрать программу</h2>

      <p className="lead-form-card__intro">
        Оставьте контакты и цель. Отправку формы подключим на следующем этапе.
      </p>

      <form className="lead-form">
        <label>
          <span>Имя</span>
          <input type="text" name="name" placeholder="Например, Анна" />
        </label>

        <label>
          <span>Телефон или Telegram</span>
          <input type="text" name="contact" placeholder="+7 или @username" />
        </label>

        <label>
          <span>Главная цель</span>
          <select name="goal" defaultValue="">
            <option value="" disabled>
              Выберите цель
            </option>
            <option value="weight-loss">Похудение</option>
            <option value="glutes">Ягодицы</option>
            <option value="flat-belly">Плоский живот</option>
            <option value="start">Старт / восстановление</option>
          </select>
        </label>

        <button className="button button--primary lead-form__button" type="button">
          Получить подборку
        </button>

        <p className="lead-form__note">
          Пока это визуальная форма. Реальная отправка будет подключена отдельно.
        </p>
      </form>
    </aside>
  )
}

export default LeadFormPreview