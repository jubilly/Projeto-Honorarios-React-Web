import Routes from '../navigation/Routes';
import '../style/App.css';

const App = () => (
  <main className="App">
      <Routes/>
    <footer className="footer">
      <ul className="footer__menu">
        <li>
          <a href="https://cfc.org.br/" className="about-us">Conselho Federal de Contabilidade</a>
        </li>
        <li>
          <a href="https://cfc.org.br/tecnica/perguntas-frequentes/honorarios/" className="about-us">Honorários</a>
        </li>
        <li>
          <a href="about-us" className="about-us">Sobre Nós</a>
        </li>
      </ul>
      <p className="copyright">Todos os Direitos Reservados - DG LOPES 2021</p>
    </footer>
  </main>
)

export default App