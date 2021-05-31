import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HonorarioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        indexControl:''
    }
  }
  render() {
    return (
        <>
        <div className="new_calc_column" key={this.props.key} id={this.props.id}>
            <span className="new_calc_column-name">
                <button className={`new_calc__area-button new_calc__area-button--remove ${this.props.showButton === true ? 'new_calc__area-button--hide' : ''}`} 
                    onClick={() => this.props.removeNewCalcArea(this.props.index)}>-</button>
            </span>
            <div className="new_calc_column__group">
                <input className="new_calc_column-input" onChange={(e)=> this.props.columnName(e, this.props.index)} placeholder="Digite o nome do campo"/>
                <input className="new_calc_column-input" onChange={(e)=> this.props.columnValue(e, this.props.index)} placeholder="Digite o valor do campo"/>
            </div>
        </div>
        <div className={`new_calc_column__select` }>
            <select className="new_calc_column__select" onChange={(e)=> this.props.selectValues}>
                <option value="-"> - </option>
                <option value="+"> + </option>
                <option value="/"> / </option>
                <option value="*"> * </option>
            </select>
        </div>
        <div className="new_calc_column" key={this.props.key} id={this.props.id}>
            <span className="new_calc_column-name">
                <button className={`new_calc__area-button new_calc__area-button--remove `} 
                    onClick={() => this.props.removeNewCalcArea(this.props.index)}>-</button>
            </span>
            <div className="new_calc_column__group">
                <input className="new_calc_column-input" onChange={(e)=> this.props.columnName(e, this.props.index)} placeholder="Digite o nome do campo"/>
                <input className="new_calc_column-input" onChange={(e)=> this.props.columnValue(e, this.props.index)} placeholder="Digite o valor do campo"/>
            </div>
        </div>
        <div className={`new_calc_column__select` }>
            <label>=</label>
        </div>
        <div className="new_calc_column" key={this.props.key} id={this.props.id}>
            <span className="new_calc_column-name">
                <button className={`new_calc__area-button new_calc__area-button--remove `} 
                    onClick={() => this.props.removeNewCalcArea(this.props.index)}>-</button>
            </span>
            <div className="new_calc_column__group">
                <input className="new_calc_column-input" onChange={(e)=> this.props.columnName(e, this.props.index)} placeholder="Digite o nome do campo"/>
                <input className="new_calc_column-input" onChange={(e)=> this.props.columnValue(e, this.props.index)} placeholder="Digite o valor do campo"/>
            </div>
        </div>
        </>
    )
  }
}
  
  