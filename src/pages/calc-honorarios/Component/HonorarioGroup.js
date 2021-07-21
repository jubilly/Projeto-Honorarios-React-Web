import React, { Component } from 'react';
import HonorarioComponent from './HonorarioComponent'
import baseURL from '../../services/api'
import { Link } from 'react-router-dom';

export default class HonorarioGroup extends Component {
  constructor(props) {
    super(props);
        this.state = {
            nomeCalculo: '',
            dataCalculo: '',
            descricaoCalculo: '',
            entradasDinamicas: [],
            name:[],
            columnValue:[],
            nameDouble:[],
            columnValueDouble:[],
            columnSaidaNome:[],
            columnSaidaValores:[],
            operador:[],
            calccolumnSaidaValores:[],
            controlCal: 1,
            getCalc:[],
            calcId: '',
            optionsSelect : [
                {op:''},
                {op:'-'},
                {op:'+'},
                {op:'/'},
                {op:'*'},
                {op:'%'},
                
              ]
        }
    }

    // Adiciona entradas dinamicas
    addNewCalcArea = () =>{
        var i = this.state.controlCal;
        if(i === 1){
            var usuario_logado = localStorage.getItem('@honorarios/id'),
                nome_cal = this.state.nomeCalculo;
            fetch(`${baseURL}/calculo`,{
                method: 'POST', 
                mode: 'cors',
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome_calculo : this.state.nomeCalculo,
                    data_calculo : this.state.dataCalculo,
                    descricao_calculo: this.state.descricaoCalculo,
                    fk_calc_honorario_usuario: usuario_logado
                })
            }).then((response) => {
                return response.json(); 
            }).then((data) => {
                this.setState({apiData: data})
            }).catch(error => console.log(error));
            this.setState({controlCal: 2})

            fetch(`${baseURL}/getCalculo/${nome_cal}`,{
                method: 'GET',
                mode: 'cors',
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((responseData)=>{
                return responseData.json();
            }).then((data) => {
                this.setState({getCalc: data})
                var calcId = data.map(item=>item.id_calculo_honorario)
                this.setState({calcId: calcId})
            })
        }
        this.setState({entradasDinamicas: [...this.state.entradasDinamicas, ""]})
    }

    // Remove entradas dinamicas e atualiza os dados
    removeNewCalcArea = (index) =>{
        var { entradasDinamicas, name, columnValue, nameDouble, columnValueDouble,  columnSaidaNome, columnSaidaValores, operador } = this.state;
        var tempentradasDinamicas = entradasDinamicas,
            tempname = name,
            tempcolumnValue = columnValue,
            tempnameValue = nameDouble,
            tempcolumnValueDouble = columnValueDouble,
            tempcolumnSaidaNome = columnSaidaNome,
            tempcolumnSaidaValores = columnSaidaValores,
            tempoperador = operador;

        let removeIndexName = null,
            removeIndexColumnValue = null,
            removeIndexnameDouble = null,
            removeIndexColumnValueDouble = null,
            removeIndexColumnSaidaNome = null,
            removeIndexColumnSaidaValores = null,
            removeIndexOperador = null;
        
        name.map((i)=>{
            if(index ===i){
                removeIndexName = i;
            }
        })
        columnValue.map((i)=>{
            if(index ===i){
                removeIndexColumnValue = i;
            }
        })   
        nameDouble.map((i)=>{
            if(index ===i){
                removeIndexnameDouble = i;
            }
        }) 
        columnValueDouble.map((i)=>{
            if(index ===i){
                removeIndexColumnValueDouble = i;
            }
        })
        columnSaidaNome.map((i)=>{
            if(index ===i){
                removeIndexColumnSaidaNome = i;
            }
        })       
        columnSaidaValores.map((i)=>{
            if(index ===i){
                removeIndexColumnSaidaValores = i;
            }
        })
        operador.map((i)=>{
            if(index ===i){
                removeIndexOperador = i;
            }
        })
        //Remove as entradas dinamicas
        tempentradasDinamicas.splice(index, 1)
        // Remove de um dos arrays a posição do campo removido
        tempname.splice(
            tempname.indexOf(removeIndexName),1
        );
        tempcolumnValue.splice(
            tempcolumnValue.indexOf(removeIndexColumnValue),1
        );
        tempnameValue.splice(
            tempnameValue.indexOf(removeIndexnameDouble),1
        );
        tempcolumnValueDouble.splice(
            tempcolumnValueDouble.indexOf(removeIndexnameDouble),1
        );
        tempcolumnSaidaNome.splice(
            tempcolumnSaidaNome.indexOf(removeIndexColumnSaidaNome),1
        );
        tempcolumnSaidaValores.splice(
            tempcolumnSaidaValores.indexOf(removeIndexColumnSaidaValores),1
        );
        tempoperador.splice(
            tempoperador.indexOf(removeIndexOperador),1
        );
        
        // Atualiza o novo estado em nos arrays da posição do campo removido
        this.setState({
            entradasDinamicas: tempentradasDinamicas,
            name: tempname,
            columnValue : tempcolumnValue,
            nameDouble : tempnameValue,
            columnValueDouble : tempcolumnValueDouble,
            columnSaidaNome : tempcolumnSaidaNome,
            columnSaidaValores : tempcolumnSaidaValores,
            operador : tempoperador
        })
    }

    //Captura os dados de cada campo dinâmico de forma individual
    columnName = (e, index) =>{
        this.state.name[index] = e.target.value
        this.setState({name: this.state.name})
        // console.log(this.state.name)
    }

    columnValue = (e, index) =>{
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.state.columnValue[index] = e.target.value;
            this.setState({columnValue: this.state.columnValue})
        }
        console.log(this.state.columnValue);
    }

    columnNameDouble = (e, index) =>{
        this.state.nameDouble[index] = e.target.value
        this.setState({nameDouble: this.state.nameDouble})
        // console.log(this.state.nameDouble)
    }

    columnValueDouble = (e, index) =>{
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.state.columnValueDouble[index] = e.target.value;
            this.setState({columnValueDouble: this.state.columnValueDouble})
        }
    }
    
    columnSaidaNome = (e, index) =>{
        this.state.columnSaidaNome[index] = e.target.value;
        this.setState({columnSaidaNome: this.state.columnSaidaNome})
    }
  
    selectValues = (e, index) =>{
        this.state.operador[index] = e.target.value
        this.setState({operador: this.state.operador})
    }
    
    columnSaidaValores = (e, index) =>{
        this.state.columnSaidaValores[index] = e.target.value;
        this.setState({columnSaidaValores: this.state.columnSaidaValores})
    }

    Calcula = (e, index) =>{
        var { columnValue, columnValueDouble, columnSaidaValores, operador } = this.state;
        var calccolumnValue = columnValue,
            calccolumnValueDouble = columnValueDouble,
            calccolumnSaidaValores = columnSaidaValores,
            calcoperador = operador[index];
    
            if(calccolumnValue !== '' && calccolumnValueDouble !==''){
                if(calcoperador ==="+")
                    calccolumnSaidaValores[index] = parseFloat(calccolumnValue[index]) + parseFloat(calccolumnValueDouble[index]);
                if(calcoperador ==="-")
                    calccolumnSaidaValores[index] = parseFloat(calccolumnValue[index]) - parseFloat(calccolumnValueDouble[index]);
                if(calcoperador ==="/")
                    calccolumnSaidaValores[index] = parseFloat(calccolumnValue[index]) / parseFloat(calccolumnValueDouble[index]);
                if(calcoperador ==="*")
                    calccolumnSaidaValores[index] = parseFloat(calccolumnValue[index]) * parseFloat(calccolumnValueDouble[index]);
                if(calcoperador ==="%")
                    calccolumnSaidaValores[index] = parseFloat(calccolumnValue[index]) * (parseFloat(calccolumnValueDouble[index])/100);
                this.setState({calccolumnSaidaValores: calccolumnSaidaValores})     
            }  
    }

    save = (e,index) =>{

        var nome1 = this.state.name[index],
            valor1 = this.state.columnValue[index],
            nome2 = this.state.nameDouble[index],
            valor2 = this.state.columnValueDouble[index],
            nome_saida = this.state.columnSaidaNome[index],
            saida = this.state.calccolumnSaidaValores[index],
            operador = this.state.operador[index],
            fk_calc = this.state.calcId,
            index_control = index;
             

        fetch(`${baseURL}/entrada1`,{
            method: 'POST', 
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome_entrada1 : nome1,
                valor_entrada1 : valor1,
                fk_calc: fk_calc,
                index_control: index_control
            })
        }).then((response) => {
            return response.json(); 
        }).then((data) => {
            this.setState({apiData: data})
        }).catch(error => console.log(error));

        fetch(`${baseURL}/entrada2`,{
            method: 'POST', 
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome_entrada2 : nome2,
                valor_entrada2 : valor2,
                fk_calc: fk_calc,
                index_control: index_control
            })
        }).then((response) => {
            return response.json(); 
        }).then((data) => {
            this.setState({apiData: data})
        }).catch(error => console.log(error));

        fetch(`${baseURL}/saida`,{
            method: 'POST', 
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome_saida : nome_saida,
                valor_saida : saida,
                fk_calc: fk_calc,
                index_control: index_control
            })
        }).then((response) => {
            return response.json(); 
        }).then((data) => {
            this.setState({apiData: data})
        }).catch(error => console.log(error));

        fetch(`${baseURL}/operador`,{
            method: 'POST', 
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                operador : operador,
                fk_calc: fk_calc,
                index_control: index_control
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({apiData: data})
        }).catch(error => console.log(error));
        alert("Calculo Salvo com Sucesso!")
    }

    handleNomeCalculo = (e) =>{
        var calculonome = e.target.value;
        this.setState({nomeCalculo: calculonome})
        console.log(calculonome) 
    }

    handleDateCalculo = (e) =>{
        var calculodata = e.target.value;
        this.setState({dataCalculo: calculodata})
        console.log(calculodata) 
    }

    handleDescricaoCalculo = (e) =>{
        var descricalculo = e.target.value;
        this.setState({descricaoCalculo: descricalculo})
        console.log(descricalculo) 
    }

  render() {
      var {nomeCalculo, dataCalculo, descricaoCalculo} = this.state;
    return (
        <>
        <div className="new_calc">
            <div className="new_calc_input_group">
                <div className="new_calc_titles">
                    <label className="new_calc_title">Digite o nome do Cálculo</label>
                    <input className="new_calc_input" value={nomeCalculo} onChange={this.handleNomeCalculo} placeholder="Nome do Cálculo"/>
                </div>
                <div className="new_calc_titles new_calc_titles--data">
                    <label className="new_calc_title">Digite a data</label>
                    <input type="date" className="new_calc_input new_calc_input--data" value={dataCalculo}  onChange={this.handleDateCalculo} placeholder="dd/mm/aaaa"/>
                </div>
                <div className="new_calc_titles new_calc_titles--size">
                    <label className="new_calc_title">Digite a descrição</label>
                    <textarea className="new_calc_input new_calc_titles--size"  value={descricaoCalculo}  onChange={this.handleDescricaoCalculo} placeholder="Digite a descrição"/>
                </div>
            </div>
            <hr className="new_calc_divisor"></hr>
            <div className="new_calc_area">
                {this.state.entradasDinamicas.map((element, index)=>{
                    if(index ===0)
                        return(
                            <>
                            <div className="new_calc_area__titles">
                                <div className="new_calc_carea_items">
                                    <p className="new_calc_area__title">
                                        Campo 1
                                        <span className="new_calc_area_tooltip">Adicione a quantidade de entradas desejadas nesta coluna. O primeiro campo é destinado para o nome e o segundo para o valor.</span>
                                    </p>
                                </div>
                                <div className="new_calc_carea_items">
                                    <p className="new_calc_area__title">
                                        Operador
                                        <span className="new_calc_area_tooltip">Selecione um operador para realizar a operação</span>
                                    </p>
                                </div>
                                <div className="new_calc_carea_items">
                                    <p className="new_calc_area__title">
                                        Campo 2
                                        <span className="new_calc_area_tooltip">Adicione a quantidade de entradas desejadas nesta coluna. O primeiro campo é destinado para o nome e o segundo para o valor.</span>
                                    </p>
                                </div>
                                <div className="new_calc_carea_items">
                                    <p className="new_calc_area__title">
                                        Saídas
                                        <span className="new_calc_area_tooltip">Associe um nome à saída. O valor resultante é calculado automaticamente.</span>
                                    </p>
                                </div>
                                <div className="new_calc_carea_items">
                                <p className="new_calc_area__title">
                                    Remover
                                    <span className="new_calc_area_tooltip">Remove um campo</span>
                                </p>
                                </div>
                            </div>
                            <HonorarioComponent
                                key={index}
                                index={index}
                                id={index}
                                columnIndex={index+2}
                                {...this.props}
                                columnName={this.columnName} 
                                columnValue={this.columnValue}
                                operador={this.state.operador}
                                selectValues={this.selectValues}
                                optionsSelect={this.state.optionsSelect}
                                columnNameDouble={this.columnNameDouble} 
                                columnValueDouble={this.columnValueDouble}
                                columnSaidaNome={this.columnSaidaNome}
                                columnSaidaValores={this.columnSaidaValores}
                                calculaFuncao={this.Calcula}  
                                addNewCalcArea={this.addNewCalcArea}
                                removeNewCalcArea={this.removeNewCalcArea}
                                calccolumnSaidaValores={this.state.columnSaidaValores}
                                save={this.save}
                            />
                            </>
                        )
                    else
                    return(
                        <>
                        <HonorarioComponent
                            key={index}
                            index={index}
                            id={index}
                            columnIndex={index+2}
                            {...this.props}
                            columnName={this.columnName} 
                            columnValue={this.columnValue}
                            operador={this.state.operador}
                            selectValues={this.selectValues}
                            optionsSelect={this.state.optionsSelect}
                            columnNameDouble={this.columnNameDouble} 
                            columnValueDouble={this.columnValueDouble}
                            columnSaidaNome={this.columnSaidaNome}
                            columnSaidaValores={this.columnSaidaValores}
                            calculaFuncao={this.Calcula}  
                            addNewCalcArea={this.addNewCalcArea}
                            removeNewCalcArea={this.removeNewCalcArea}
                            calccolumnSaidaValores={this.state.columnSaidaValores}
                            save={this.save}
                        />
                        </>
                    )
                })}
                <div className="new_calc__area-button__content">
                    
                    <button className="new_calc__area-button" onClick={this.addNewCalcArea}> 
                        <span>+</span>
                        <span className="new_calc__info">i
                            <label span className="new_calc_area_tooltip">Clique no Botão ao Lado para Adicionar Um Novo Campo</label>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        
        <div className="new_calc new_calc--alignment">
            {/* <button className="new_calc_btn new_calc_btn--salve">Salvar</button> */}
            <button className="new_calc_btn new_calc_btn--clean">Limpar</button>
        </div>
        <div className="honorarios__back">
            <Link to="honorarios" className="register__link">&#x2190; Voltar</Link> 
       </div>
        </>
    )
  }
}
  
  