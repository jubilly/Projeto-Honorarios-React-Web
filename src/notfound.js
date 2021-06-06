import React, { Component } from 'react';
import baseURL from '../src/pages/services/api'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import Header from '../src/pages/header/Header'

export default class NotFound extends Component {

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
        <p>Página não encontrada</p>
    </>
    )
}

}