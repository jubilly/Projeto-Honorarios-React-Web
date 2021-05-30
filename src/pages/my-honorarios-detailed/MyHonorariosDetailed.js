import React, { Component } from 'react';
import Header from './../header/Header';
import Menu from './../header/Menu';
import baseURL from '../services/api';


class MyHonorariosDetailed extends Component {
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
  render () {
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
        <h1 className="honorarios__title">Meus Honorarios Detalhados </h1>
        <div className="honorarios__content">
            <label className="honorarios__name">Cálculo de honorários do cliente A</label>
            <label className="honorarios__author">Lorem Ipsum</label>
            <a href="my-honorarios-detailed" className="honorarios__button">Ver Detalhes</a>
        </div>
        <div className="honorarios__back">
              <a href="my-honorarios" className="register__link">&#x2190; Voltar para todos os cálculos</a> 
        </div>
        </>
      )
  }
}


export default MyHonorariosDetailed; 