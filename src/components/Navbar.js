import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {ButtonContainer1} from './Button';
import {Linkurl} from './Button';
import '../App.css';


import logo from "../logo.svg";


class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
      }
    
      render() {
        const loginRegLink = (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <Linkurl>
                Masuk
                </Linkurl>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
              <Linkurl>
              Daftar
              </Linkurl>
              </Link>
            </li>
          </ul>
        )
    
        const userLink = (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
              <Linkurl> 
              Profile
              </Linkurl>
              </Link>
            </li>
            
            <li className="nav-item ">
              <a href="" onClick={this.logOut.bind(this)} className="nav-link ">
              <Linkurl>
              Keluar
              </Linkurl>
              </a>
            </li>
            
          </ul>
        )
    
        return (
          
             <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={require('../logo/logo.png')} alt="store" className="navbar-brand"/>
                 
                </Link>

               
                <div class="dropdown">
    <div class="navbar-nav align-items-center dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> 
    
      <Linkurl className="nav-link">
      <span className="  mr-2" >
      <i class="fas fa-th"></i>
      </span>
      Kategori
      </Linkurl>
     
    </div>
    <ul class="dropdown-menu">
        <Link to="/produk" class="dropdown-item clearfix" >Laptop</Link>
        <li><a class="dropdown-item" href="javascript:;">Baterai</a></li>
        <li><a class="dropdown-item" href="javascript:;">Charger</a></li>
       
    </ul>
</div>
          

                            
        <SearchWrapper>
            <SearchBar placeholder="Sedang mencari apa ? ..." />
            <span className="mr-2">
            <i className="fas fa-search"/>
            </span>
        </SearchWrapper>


        <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-3">
                        <Link to="/cart" className="nav-link">
                            <Linkurl>
                            <span >
                        <i class="fas fa-shopping-cart"></i>
                        </span>
                          
                            </Linkurl>
                        </Link>
                    </li>
                </ul>
                
               
                {localStorage.usertoken ? userLink : loginRegLink}
                
            </NavWrapper>
         
             
          
        )
      }
}

export default withRouter(Navbar)

const NavWrapper = styled.nav`
    background : var(--mainWhite);
    .nav-link{
        color: var(--mainDark) !important;
        font-size: 1.3rem;
        text-transform: capitalize;        
    }
    

    .dropdown-submenu {
      position: relative;
    
  }
  
  .dropdown-submenu>.dropdown-menu {
      top: 0;
      left: 100%;
     
      margin-top: -6px;
      margin-left: -1px;
      -webkit-border-radius: 0 6px 6px 6px;
      -moz-border-radius: 0 6px 6px;
      border-radius: 0 6px 6px 6px;
  }
  
  .dropdown-submenu:hover>.dropdown-menu {
      display: block;
  }
  
  .dropdown-submenu>a:after {
      display: block;
      content: " ";
      float: right;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      border-width: 5px 0 5px 5px;
      border-left-color: #ccc;
      margin-top: 5px;
      margin-right: -10px;
  }
  
  .dropdown-submenu:hover>a:after {
      border-left-color: #fff;
  }
  
  .dropdown-submenu.pull-left {
      float: none;
  }
  
  .dropdown-submenu.pull-left>.dropdown-menu {
      left: -100%;
      margin-left: 10px;
      -webkit-border-radius: 6px 0 6px 6px;
      -moz-border-radius: 6px 0 6px 6px;
      border-radius: 6px 0 6px 6px;
  }
`
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background:  var(--mainWhite) ;
  border-radius: 3rem;
  border: 0.05rem solid #cbd2d9;
  margin-left: 1rem;
  box-shadow: none;
  
`

const SearchBar = styled.input`
  outline: none;
  border: none;
  width: 35rem;
  padding: 0.5rem ;
  color: --mainDark;
  background: transparent;
  font-size: 1rem;
  font-weight: 100;
  `;
