import React, { Component } from 'react';
import './my-honorarios.css'
import Header from './../header/Header';
import Menu from './../header/Menu';
import baseURL from '../services/api';
import { Link } from 'react-router-dom';

class MyHonorarios extends Component{
  constructor(props){
    super(props);
    this.state = {
        apiData:[],
        allHonorarios:[],
        eachHonorarioNome:[],
        idHonorario:[],
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

    var usuarioLogado = '';
    if(localStorage.length > 0){
        usuarioLogado = localStorage.getItem('@honorarios/id')
    }
    fetch(`${baseURL}/getAllHonorarios/${usuarioLogado}`,{
        method: 'GET',
        mode: 'cors',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
        },
    }).then((responseData)=>{
        return responseData.json();
    }).then((data) => {
        let array = []
        data.map(calculos => {
          array.push([calculos.nome.toString(), 
            new Date (calculos.data_calculo.toString()).toLocaleDateString("sq-AL",{ year: 'numeric', month: '2-digit', day: '2-digit' }),
            calculos.id_calculo_honorario,
            calculos.descricao
         ])
          this.setState({allHonorarios: array})
        })
    })
}

seeMore = (e, item) =>{
    var currentButton = e.target.value
    fetch(`${baseURL}/honorariosCalc/${currentButton}`,{
        method: 'GET',
        mode: 'cors',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
        },
    }).then((responseData)=>{
        return responseData.json();
    }).then((data) => {
          this.setState({eachHonorarioNome: data})
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
    console.log(this.state.eachHonorarioNome)
    var honorarios = this.state.allHonorarios;
    var arrayHonorarios = honorarios.map((item, index)=>{
        return(
            <>
                <div className="honorarios__content">
                    <div className="honorarios__titles">
                        <label className="honorarios__name">{item[0]}</label>
                        <label className="honorarios__data">{item[1]}</label>
                    </div>
                    <button onClick={this.seeMore} value={item[2]} className="honorarios__button">Detalhes</button>
                </div>
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
       {arrayHonorarios}
       <div className="new_calc new_calc__modal">
       {this.state.eachHonorarioNome.map(honorario => {
        return(
            <>
             <label className="new_calc_title new_calc_titles--bold">Nome registrado</label>
            <p>{honorario.nome_entrada}</p>
            <p>{honorario.valor}</p>
            </>
        )
        })}
        </div>
       <div className="honorarios__back">
            <Link to="honorarios" className="register__link">&#x2190; Voltar</Link> 
       </div>
      </>
    )
  }
}

export default MyHonorarios;