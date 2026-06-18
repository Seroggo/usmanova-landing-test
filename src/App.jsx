import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import ProgramsSection from './components/ProgramsSection'

function App() {
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
        <ProgramsSection />
      </main>
    </div>
  )
}

export default App