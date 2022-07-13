import React, { Component } from "react";
import logo from './logo192.png';   
import {Nav, Navbar, Container} from "react-bootstrap";
import '../button.css';

export default class Header extends Component {
    render() {
        return (
           <Navbar collapseOnSelect expand="md"  >
               <Container>
               <div className="container" >
                 
               <img className="logo" src={logo} alt=""/>
            
               <button  className="Whitepaper" onClick="choose(1)"></button>
			</div>
<form inline>

</form>


               </Container>
               
           </Navbar>
           
        );
    }
}