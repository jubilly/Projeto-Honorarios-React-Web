import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HonorarioComponent from './HonorarioComponent'


export default class HonorarioGroup extends Component {
  constructor(props) {
    super(props);
        this.state = {
            entradasDinamicas: [],
            name:[],
            columnValue:[]
        }
    }

    addNewCalcArea = () =>{
        this.setState({entradasDinamicas: [...this.state.entradasDinamicas, ""]})
    }

    removeNewCalcArea = (index) =>{
        console.log(index)
        this.state.entradasDinamicas.splice(index, 1)
        this.setState({entradasDinamicas: this.state.entradasDinamicas})
    }
    columnName = (e, index) =>{
        this.state.name[index] = e.target.value
        this.setState({name: this.state.name})
        console.log(this.state.name)
    }

    columnValue = (e, index) =>{
        this.state.columnValue[index] = e.target.value;
        this.setState({columnValue: this.state.columnValue})
    }

  render() {
    return (
        <>
        <div className="new_calc">
            <div className="new_calc_input_group">
                <div className="new_calc_titles">
                    <label className="new_calc_title">Digite o nome do Cálculo</label>
                    <input className="new_calc_input" placeholder="Nome do Cálculo"/>
                </div>
                <div className="new_calc_titles">
                    <label className="new_calc_title">Digite a data</label>
                    <input className="new_calc_input" placeholder="dd/mm/aaaa"/>
                </div>
                <div className="new_calc_titles new_calc_titles--size">
                    <label className="new_calc_title">Digite a descrição</label>
                    <textarea className="new_calc_input new_calc_titles--size" placeholder="Digite a descrição"/>
                </div>
            </div>
            {this.state.name.map((item, index) =>{
                return (
                    <>
                    <p>{item}</p>
                    </>
                )
            })}
            {this.state.columnValue.map((item, index) =>{
                return (
                    <>
                    <p>{item}</p>
                    </>
                )
            })}
            <hr className="new_calc_divisor"></hr>
            <div className="new_calc_area">
                {this.state.entradasDinamicas.map((element, index)=>{
                    return(
                        <HonorarioComponent
                            key={index}
                            index={index}
                            id={index}
                            columnIndex={index+2}
                            {...this.props}
                            columnName={this.columnName} 
                            columnValue={this.columnValue} 
                            addNewCalcArea={this.addNewCalcArea}
                            removeNewCalcArea={this.removeNewCalcArea}
                        />
                    )
                })}
                <div className="new_calc__area-button__content">
                    <label>Clique no Botão ao Lado para Adicionar Um Novo Campo</label>
                    <button className="new_calc__area-button" onClick={this.addNewCalcArea}> + </button>
                </div>
            </div>
        </div>
        </>
    )
  }
}
  
  