import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class HonorariosOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {/* Awesome State Not Yet Used */}
  }
  
  render() {
    return (
      <div className="honorarios-filters">
       <h2>Honorários</h2>
       <div className="honorarios-actions">
         <span className="honorarios-content">
           <label>Novas cálculos</label>
           <Link to="new-honorarios" className="honorarios-btn">Adicionar</Link>
         </span>
         {/* <span className="honorarios-content">
           <label>Fórmulas cadastradas</label>
           <Link to="honorarios-formulas" className="honorarios-btn">Ver</Link>
         </span> */}
         <span className="honorarios-content">
           <label>Histórico de Honorários</label>
           <Link to="my-honorarios" className="honorarios-btn">Ver</Link>
         </span>
       </div>
      </div>
    )
  }
}
  
  