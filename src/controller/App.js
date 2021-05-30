import Routes from '../navigation/Routes';
import '../style/App.css';

const App = () => (
  <main className="App">
      <Routes/>
    <footer className="footer">
        <p className="copyright">Todos os Direitos Reservados - DG LOPES 2021</p>
        <a href="about-us" className="about-us">Sobre Nós</a>
    </footer>
  </main>
)

export default App