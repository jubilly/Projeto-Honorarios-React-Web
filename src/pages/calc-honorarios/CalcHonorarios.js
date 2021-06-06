import React, { Component } from 'react';
import baseURL from '../services/api';
import Header from './../header/Header';
import Menu from './../header/Menu';
import HonorariosOptions from './HonorariosOptions';
import './honorarios.css'

export default class CalcHonorarios extends Component {
    constructor(props) {
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
        };
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

    render(){
        var data = this.state.apiData;
        let userInfo = data.map(function(jsonData, index){
            return(
                <>
                    {jsonData.nome}
                </>
            )
        })
        return (
        <>
            <Header
                status={this.state.status}
                userInfo={userInfo}
                handleLogout={this.handleLogout}
                showMenuInfo={true}
                MenuToggle={true}
                onMenuToggle={this.onMenuToggle}

            />
            <Menu
                onMenuToggle={this.onMenuToggle}
                isMenuOpen={this.state.isMenuOpen}
            />
            <HonorariosOptions />
        </>
        )
    }

}