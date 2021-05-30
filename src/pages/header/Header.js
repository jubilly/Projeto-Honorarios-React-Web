import React, {Component} from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Icon from './iconHamburguer';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {/* Awesome State Not Yet Used */}
      }
      render(){
        return (
            <header>
                <div className="header">
                    <div className="header__menu-logo">
                        <button type="button" className={`menuToggleButton ${this.props.MenuToggle === true ? 'menuToggle--show' : 'menuToggle--noShow'}`} onClick={this.props.onMenuToggle}>
                            <Icon/>
                        </button>
                        <Link to="/" className="logo">
                            <img src={logo} alt="Logo" className="logo__image" width="280" height="54"/>
                        </Link>
                    </div>
                    <div className={`header__userinfo ${this.props.showMenuInfo === true ? 'showMenu' : 'noShow'}`}>
                        {this.props.userInfo}
                        <Link to="/login" className="header__logout" onClick={this.props.handleLogout}>Sair</Link>
                    </div>
                </div>
            </header>
        )
      }

}

export default Header;




