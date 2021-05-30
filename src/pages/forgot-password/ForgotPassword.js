import React, { Component } from 'react';
import baseURL from '../services/api'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import Header from './../header/Header'


export default class ForgotPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            usuario: '',
            senha: '',
            novasenha: '',
            direction: false
        }
    }
    handleUser = (e) =>{
        const usuario = e.target.value;
        this.setState({usuario: usuario});
    }

    handleNewPassword = (e) =>{
        const senha = e.target.value;
        this.setState({senha: senha});
    }

    handleConfirmedPassword = (e) =>{
        const novasenha = e.target.value;
        this.setState({novasenha: novasenha});
    }

    handleForgotPassword = (e) =>{
        fetch(`${baseURL}/redinepassword`, {
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
        }).then((json) => {
            this.setState({apiData: json})
            this.setState({ direction: true });
            alert("Senha Atualizada com Sucesso!")
        }).catch(error => console.log(error));
        this.setState({usuario: "", senha: "", novasenha: ""})
    }

    render(){
        let {usuario, senha, novasenha} = this.state;

        let verificausuario, verificasenha, verificasenhaconfirmada;
        verificausuario = this.state.usuario;
        verificasenha = this.state.senha;
        verificasenhaconfirmada = this.state.novasenha;
        function confirmaDados() {
            if(verificausuario !=='' && verificasenha !== '' && verificasenhaconfirmada !== ''){
                if(verificasenha !== verificasenhaconfirmada){
                    return true;
                }
                return false;
            }else{
                return true;
            }
        }
        const thisRedirect = this.state.direction;
        if (thisRedirect) {
            return <Redirect to='/login'/>;
        }

        return (
            <>
                <Header
                    showMenuInfo={false}
                />
                    <div className="form">
                        {this.state.usuario}
                        {this.state.senha}
                        {this.state.novasenha}
                        <div className="form__content">
                            <p className="form_label">Usuário</p>
                            <input name="user" value={usuario} onChange={this.handleUser} placeholder="Digite o nome do usuário" className="form__input"/>
                        </div>
                        <div className="form__content">
                            <p className="form_label">Nova Senha</p>  
                            <input name="password" value={senha} onChange={this.handleNewPassword} type="password" placeholder="Digite a nova senha" className="form__input"/>
                        </div>
                        <div className="form__content">
                            <p className="form_label">Confirmar Senha</p>  
                            <input name="passwordConfirmed" value={novasenha} onChange={this.handleConfirmedPassword} type="password" placeholder="Confirme a nova senha" className="form__input"/>
                        </div>
                        <button disabled={confirmaDados()} onClick={this.handleForgotPassword} className="btn__submit" type="submit">Redefinir Senha</button>
                    </div>
                <div className="register__content">
                    <Link to="login" className="register__link">	&#x2190; Voltar para a tela de Login</Link>
                </div>
            </>
            )

    }
    
}