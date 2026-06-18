import { useEffect, useState } from 'react'

function LeadFormPreview({ selectedProgram }) {
  const [goal, setGoal] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setGoal(selectedProgram?.id || '')
    setSuccess(false)
  }, [selectedProgram])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSuccess(true)
  }

  return (
    <aside className="lead-form-card" id="lead-form">
      <p className="eyebrow">Заявка</p>

      <h2>Подобрать программу</h2>

      <p className="lead-form-card__intro">
        Оставьте контакты и цель — подберём подходящее направление и следующий шаг.
      </p>

      {selectedProgram && (
        <div className="lead-form-card__selected" aria-live="polite">
          <span>Желаемая программа:</span>{' '}
          <strong>{selectedProgram.title}</strong>
        </div>
      )}

      <form className="lead-form" onSubmit={handleSubmit}>
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
          <select
            name="goal"
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
          >
            <option value="" disabled>
              Выберите цель
            </option>
            <option value="weight-loss">Похудение</option>
            <option value="glutes">Ягодицы</option>
            <option value="flat-belly">Плоский живот</option>
            <option value="start">Старт / восстановление</option>
          </select>
        </label>

        <button className="button button--primary lead-form__button" type="submit">
          Получить подборку
        </button>

        {success && (
          <p className="lead-form__success" role="status">
            Готово. Мы зафиксировали выбранное направление для подбора программы.
          </p>
        )}

      </form>
    </aside>
  )
}

export default LeadFormPreview