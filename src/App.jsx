import { useState } from 'react'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import ProgramsSection from './components/ProgramsSection'

function App() {
  const [selectedProgram, setSelectedProgram] = useState(null)

  const handleSelectProgram = (program) => {
    setSelectedProgram(program)
  }

  return (
    <div className="page">
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="site-logo" href="#top" aria-label="На первый экран">
            UFIT
          </a>

          <nav className="site-nav" aria-label="Навигация по странице">
            <a href="#trust">Экспертность</a>
            <a href="#programs">Программы</a>
            <a href="#lead-form">Заявка</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TrustSection />
        <ProgramsSection
          selectedProgram={selectedProgram}
          onSelectProgram={handleSelectProgram}
        />
      </main>
    </div>
  )
}

export default App