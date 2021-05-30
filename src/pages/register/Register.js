import React, { Component } from 'react';
import baseURL from '../services/api'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import Header from './../header/Header'
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            usuario: '',
            senha: '',
            senhaconfirmada:'',
            botaodesativado: false,
            direction: false
        };
    }
    onNewName = (e) =>{
        const name = e.target.value;
        this.setState({nome: name});
    };

    onNewUser = (e) => {
        const user = e.target.value;
        this.setState({usuario: user});
    };

    onNewPassword = (e) => {
        const password = e.target.value;
        this.setState({senha: password});
    };
    onNewConfirmingPassword = (e) =>{
        const password = e.target.value;
        this.setState({senhaconfirmada: password});
    }
    handleRegister = () =>{
        fetch(`${baseURL}/register`,{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: this.state.nome,
                usuario: this.state.usuario,
                senha: this.state.senha
            })
        }).then((response) => {
            return response.json(); 
        }).then((json) => {
            this.setState({apiData: json})
            this.setState({ direction: true });
            alert("Usuário Cadastrado com Sucesso!")
        }).catch(error => console.log(error));
        
        this.setState({ nome: "", usuario: "", senha: "", senhaconfirmada: "" });
    }
render(){
    var { usuario, senha, senhaconfirmada, nome } = this.state;
    let verificanome, verificausuario, verificasenha, verificasenhaconfirmada;
    verificanome = this.state.nome;
    verificausuario = this.state.usuario;
    verificasenha = this.state.senha;
    verificasenhaconfirmada = this.state.senhaconfirmada;
    function confirmaDados() {
        if(verificanome !=='' && verificausuario !=='' && verificasenha !== '' && verificasenhaconfirmada !== ''){
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
                    <div className="form__content">
                        <p className="form_label">Nome</p>
                        <input name="nome" type="text" value={nome} onChange={this.onNewName} placeholder="Digite o nome" className="form__input"/>
                    </div>
                    <div className="form__content">
                        <p className="form_label">Usuário</p>
                        <input name="usuario" type="text" value={usuario} onChange={this.onNewUser} placeholder="Digite o nome de usuário" className="form__input"/>
                    </div>
                    <div className="form__content">
                        <p className="form_label">Senha</p>  
                        <input name="password" type="password" onChange={this.onNewPassword} value={senha} placeholder="Digite a senha" className="form__input"/>
                    </div>
                    <div className="form__content">
                        <p className="form_label">Confirmar Senha</p>  
                        <input name="passwordregisterconfirmed" onChange={this.onNewConfirmingPassword} value={senhaconfirmada} type="password" placeholder="Confirme a senha" className="form__input"/>
                    </div>
                    <button className="btn__submit" disabled={confirmaDados()} onClick={this.handleRegister}>Cadastrar</button>
                </div>
   
            <div className="register__content">
                <Link to="login" className="register__link">	&#x2190; Voltar para a tela de Login</Link>
            </div>
        </>
        )
    }
}
