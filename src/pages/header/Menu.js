import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {/* Awesome State Not Yet Used */}
  }
  
  render() {
    return (
      <div className={`menuToggle ${this.props.isMenuOpen === true ? 'menuToggle--open' : ''}`}>
        <div className="menuToggle__header">
          <p className="menuToggle__title">Menu</p>
          <button type="button" className="menuToggle__button" onClick={this.props.onMenuToggle}>X</button>
        </div>
        <ul className="menuToggle__list">
          <li className="menuToggle__element"><Link to='/'>Início</Link></li>
          <li className="menuToggle__element"><Link to='calc-honorarios'>Calcular Honorário</Link></li>
          {/* <li className="menuToggle__element"><Link to='my-honorarios-detailed'>Minhas Fórmulas</Link></li> */}
          <li className="menuToggle__element"><Link to='my-honorarios'>Histórico de Cálculos</Link></li>
          <li className="menuToggle__element"><Link to='my-honorarios-detailed'>Honorários Padrões</Link></li>
        </ul>
      </div>
    )
  }
}
  
  