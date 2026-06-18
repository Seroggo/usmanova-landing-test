import { programs } from '../data/programs'
import LeadFormPreview from './LeadFormPreview'

function ProgramsSection() {
  return (
    <section className="programs section" id="programs">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Выбор направления</p>
          <h2>Выберите программу под свою цель</h2>
          <p>
            Четыре понятных сценария вместо перегруженного каталога. Так страница
            остаётся короткой и ведёт пользователя к заявке.
          </p>
        </div>

        <div className="programs__layout">
          <div className="programs__grid">
            {programs.map((program) => (
              <article className="program-card" key={program.id}>
                <span className="program-card__tag">{program.tag}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <small>{program.bestFor}</small>

                <a className="program-card__button" href="#lead-form">
                  Выбрать
                </a>
              </article>
            ))}
          </div>

          <LeadFormPreview />
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection