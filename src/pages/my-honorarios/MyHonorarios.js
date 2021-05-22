import React from 'react';
import './my-honorarios.css'

const MyHonorarios = () => { 
    return (
      <>
       <h1 className="honorarios__title">Meus Honorarios</h1>
       <div className="honorarios__content">
           <label className="honorarios__name">Cálculo de honorários do cliente A</label>
           <label className="honorarios__author">Lorem Ipsum</label>
           <a href="my-honorarios-detailed" className="honorarios__button">Ver Detalhes</a>
       </div>
       <div className="honorarios__back">
            <a href="/" className="register__link">&#x2190; Voltar para página inicial</a> 
       </div>
      </>
    )
}

export default MyHonorarios;