import React, { Component } from 'react'
import Header from './../header/Header';
import Menu from './../header/Menu';
import baseURL from '../services/api';

class HonorariosNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            apiData:[],
            usuario: '',
            senha: '',
            status: true,
            userInfo:'',
            handleLogout:'',
            showMenuInfo: '',
            isMenuOpen: false
        }
        this.onMenuToggle = this.onMenuToggle.bind(this)

    }
    componentDidMount = async () =>{
        var usuarioLogado = '';
        if(localStorage.length > 0){
            usuarioLogado = await localStorage.getItem('@honorarios/id')
        }
        fetch(`${baseURL}/home/${usuarioLogado}`,{
            method: 'GET',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
        }).then((responseData)=>{
            return responseData.json();
        }).then((data) => {
            this.setState({apiData: data})
        })
    }

    handleLogout = () => {
        localStorage.removeItem('@honorarios/id');
    }

    onMenuToggle() {
        this.setState({isMenuOpen: !this.state.isMenuOpen})
    }
    addNewCalcArea(){
        alert('oi')
    }
    render(){
        var data = this.state.apiData;
        let dataDisplay = data.map(function(jsonData, index){
            return(
                <>
                    <p className="header__name--color">
                        Bem-vindo(a), <span className="header__name">{jsonData.nome}</span>
                    </p>
                </>
            )
        })
        
        return (
            <>
            <Header
                status={this.state.status}
                userInfo={dataDisplay}
                handleLogout={this.handleLogout}
                showMenuInfo={true}
                MenuToggle={true}
                onMenuToggle={this.onMenuToggle}

            />
            <Menu
                onMenuToggle={this.onMenuToggle}
                isMenuOpen={this.state.isMenuOpen}
            />
            <div className="new_calc">
                <div className="new_calc_input_group">
                    <div className="new_calc_titles">
                        <label className="new_calc_title">Digite o nome do Cálculo</label>
                        <input className="new_calc_input" placeholder="Nome do Cálculo"/>
                    </div>
                    <div className="new_calc_titles">
                        <label className="new_calc_title">Digite a data</label>
                        <input className="new_calc_input" placeholder="Data"/>
                    </div>
                </div>
                <hr className="new_calc_divisor"></hr>
                <div className="new_calc_area">
                    <div className="new_calc_column">
                        <span className="new_calc_column-name">
                            <label>Coluna</label>
                            <button className="new_calc__area-button" onClick={this.addNewCalcArea}> + </button>
                        </span>
                        <div className="new_calc_column__group">
                            <input className="new_calc_column-input" placeholder="Digite o nome da coluna"/>
                            <input className="new_calc_column-input" placeholder="Digite o valor da coluna"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="new_calc new_calc--alignment">
                <button className="new_calc_btn new_calc_btn--salve">Salvar</button>
                <button className="new_calc_btn new_calc_btn--clean">Limpar</button>
            </div>
        </>
        )
    }
}
export default HonorariosNews