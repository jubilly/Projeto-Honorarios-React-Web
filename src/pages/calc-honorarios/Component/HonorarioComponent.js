import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HonorarioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        indexControl:'',
        value: 'select',
        price: ''
    }
  }

  render() {
    return (
        <>
      {this.handleValue}

        <div className="new_calc_column" key={this.props.key} id={this.props.id}>
            <span className="new_calc_column-name">
            </span>
            <div className="new_calc_column__group">
                <input className="new_calc_column-input" onChange={(e)=> this.props.columnName(e, this.props.index)} placeholder="Digite o nome do campo"/>
                <input className="new_calc_column-input" onChange={(e)=> this.props.columnValue(e, this.props.index)} onKeyUp={(event)=>this.props.calculaFuncao(event, this.props.index)} placeholder="Digite o valor do campo"/>
            </div>
        </div>
        <div className={`new_calc_column__select` }>
            <select className="new_calc_column__select" onChange={(e)=> this.props.selectValues(e, this.props.index)}>
            {this.props.optionsSelect.map((item, index) => (
            <option value={item.op}>{item.op}</option>
            ))} 
            </select>
        </div>
        <div className="new_calc_column" key={this.props.key}>
            <span className="new_calc_column-name">
            </span>
            <div className="new_calc_column__group">
                <input className="new_calc_column-input" onChange={(e)=> this.props.columnNameDouble(e, this.props.index)} placeholder="Digite o nome do campo"/>
                <input className="new_calc_column-input" onChange={(e)=> this.props.columnValueDouble(e, this.props.index)} onKeyUp={(event)=>this.props.calculaFuncao(event, this.props.index)} placeholder="Digite o valor do campo"/>
            </div>
        </div>
        <div className={`new_calc_column__select` }>
            <label>=</label>
        </div>
        <div className="new_calc_column new_calc_column--total" key={this.props.key}>
            <span className="new_calc_column-name">
                <button className={`new_calc__area-button new_calc__area-button--salve `} 
                    onClick={(e) => this.props.save(e, this.props.index)}>Salvar</button>
                <button className={`new_calc__area-button new_calc__area-button--remove `} 
                    onClick={() => this.props.removeNewCalcArea(this.props.index)}>-</button>
                
            </span>
            <div className="new_calc_column__group">
                <input className="new_calc_column-input"
                onChange={(e)=> this.props.columnSaidaNome(e, this.props.index)} placeholder="Digite o nome do campo"/>
                {this.props.calccolumnSaidaValores && this.props.calccolumnSaidaValores.map((item, index) =>{
                    if(index === this.props.index)
                        return (
                            <>
                            <input className="new_calc_column-input new_calc_column-input--saida" value={item} onChange={(e)=> this.props.columnSaidaValores(e, this.props.index)} placeholder="Valor do campo"/>
                            </>
                        )
                })}
            </div>
        </div>
        </>
    )
  }
}
  
  