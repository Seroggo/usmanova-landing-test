import { programs } from '../data/programs'
import LeadFormPreview from './LeadFormPreview'

function ProgramsSection({ selectedProgram, onSelectProgram }) {
  return (
    <section className="programs section" id="programs">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Выбор направления</p>
          <h2>Выберите программу под свою цель</h2>

        </div>

        <div className="programs__layout">
          <div className="programs__grid">
            {programs.map((program) => {
              const isSelected = selectedProgram?.id === program.id

              return (
                <article
                  className={`program-card ${isSelected ? 'program-card--selected' : ''}`}
                  key={program.id}
                >
                  <span className="program-card__tag">{program.tag}</span>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <small>{program.bestFor}</small>

                  <a
                    className="program-card__button"
                    href="#lead-form"
                    onClick={() => onSelectProgram(program)}
                  >
                    {isSelected ? 'Выбрано' : 'Выбрать'}
                  </a>
                </article>
              )
            })}
          </div>

          <LeadFormPreview selectedProgram={selectedProgram} />
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection