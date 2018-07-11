import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { LogedInUser } from './LogedInUser'

class Header extends Component {
    active = {
        fontWeight: "bold",
        color: "black"
    };
    header = {
        display:"flex",
        justifyContent: "flex-start",
        listStyle: "none"
        
    };
    admin = {
        padding: "5px",
    };
    client = {
        padding: "5px"
    }
    render() {
        return (
            <div style={this.header}>
            
                <NavLink exact to="/" activeStyle={this.style} >
                    

                    Event Break
                </NavLink>
                <div className="admin" style={this.admin}>
                    <NavLink exact to="/Admin" activeStyle={this.active}>
                    Admin
                    </NavLink>
                </div>
                <div className="client" style={this.client}>
                    <NavLink to="/Client" activeStyle={this.active}>
                    Client
                    </NavLink>
                </div>
            </div>
        );
    } 
}

export default Header;