import Routes from '../navigation/Routes';
import '../style/App.css';
import logo from '../assets/logo.png'
const App = () => (
  <main className="App">
    <header>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo__image" width="280" height="54"/>
        </div>
        <div className="links">
        </div>
      </div>
    </header>
      <Routes/>
    <footer className="footer">
        <p className="copyright">Todos os Direitos Reservados - DG LOPES 2021</p>
        <a href="about-us" className="about-us">Sobre Nós</a>
    </footer>
  </main>
)

export default App