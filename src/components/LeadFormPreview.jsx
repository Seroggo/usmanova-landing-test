import { useEffect, useState } from 'react'

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyM9uurYQJIFIhMF5j92pwtcInNp5AGCyWTTnCkWGtVHP3P4uto440DMHCvSjCB6hNN/exec'

function LeadFormPreview({ selectedProgram }) {
  const [goal, setGoal] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setGoal(selectedProgram?.id || '')
    setSuccess(false)
    setError('')
  }, [selectedProgram])

  const handleGoalChange = (event) => {
    setGoal(event.target.value)
    setSuccess(false)
    setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name') || '',
      contact: formData.get('contact') || '',
      goal,
      selectedProgram: selectedProgram?.title || goal || '',
      source: 'usmanova-demo-landing',
      pageUrl: window.location.href,
      userAgent: window.navigator.userAgent,
    }

    setIsSubmitting(true)
    setSuccess(false)
    setError('')

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      form.reset()
      setGoal(selectedProgram?.id || '')
      setSuccess(true)
    } catch (requestError) {
      setError('Не удалось отправить заявку. Попробуйте ещё раз.')
    } finally {
      setIsSubmitting(false)
    }
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
          <input
            type="text"
            name="name"
            placeholder="Например, Анна"
            required
          />
        </label>

        <label>
          <span>Телефон или Telegram</span>
          <input
            type="text"
            name="contact"
            placeholder="+7 или @username"
            required
          />
        </label>

        <label>
          <span>Главная цель</span>
          <select name="goal" value={goal} onChange={handleGoalChange} required>
            <option value="" disabled>
              Выберите цель
            </option>
            <option value="weight-loss">Похудение</option>
            <option value="glutes">Ягодицы</option>
            <option value="flat-belly">Плоский живот</option>
            <option value="start">Старт / восстановление</option>
          </select>
        </label>

        <button
          className="button button--primary lead-form__button"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправляем...' : 'Получить подборку'}
        </button>

        {success && (
          <p className="lead-form__success" role="status">
            Готово. Заявка отправлена, выбранное направление зафиксировано для подбора программы.
          </p>
        )}

        {error && (
          <p className="lead-form__error" role="alert">
            {error}
          </p>
        )}
      </form>
    </aside>
  )
}

export default LeadFormPreview