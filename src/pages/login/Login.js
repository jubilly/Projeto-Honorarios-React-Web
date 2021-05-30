import React, { Component } from 'react';
import './login.css'
import baseURL from '../services/api'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import Header from './../header/Header'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiData:[],
            usuario: '',
            senha: '',
            direction: false,
            showMenuInfo: ''
        };
      }

    onChangeUsername = (e) => {
        const username = e.target.value;
        this.setState({usuario: username});
    };

    onChangePassword = (e) => {
        const password = e.target.value;
        this.setState({senha: password});
    };

    handleLogin = () =>{
        fetch(`${baseURL}/login`,{
            method: 'POST', 
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: this.state.usuario,
                senha: this.state.senha 
            })
        }).then((response) => {
            return response.json(); 
        }).then((data) => {
            this.setState({apiData: data})
            var arrayId = this.state.apiData;
            var id_usuario = arrayId[0].id_usuario;
            localStorage.setItem('@honorarios/id', id_usuario);
            this.setState({ direction: true });
        }).catch(error => console.log(error));
        this.setState({ usuario: "", senha: "" });
    }

render(){
    var { usuario, senha } = this.state;

    const thisRedirect = this.state.direction;
    if (thisRedirect) {
        return <Redirect to='/'/>;
    }
    return (
    <>
        <Header
            showMenuInfo={false}
        />
        <div className="form">
            <div className="form__content">
                <p className="form_label">Usuário</p>
                <input name="usuario" onChange={this.onChangeUsername} value={usuario} placeholder="Digite o nome do usuário" className="form__input"/>
            </div>
            <div className="form__content">
                <p className="form_label">Senha</p>  
                <input name="senha" onChange={this.onChangePassword} value={senha} type="password" placeholder="Digite a senha" className="form__input"/>
            </div>
            <button className="btn__submit" onClick={this.handleLogin}>Entrar</button>
        </div>          
        <div className="register__content">
            <Link to="register" className="register__link">Cadastre-se 	&#x2192;</Link>
            <Link to="forgot-password" className="register__link">Recuperar senha 	&#x2192;</Link>
        </div>
    </>
    )
}

}