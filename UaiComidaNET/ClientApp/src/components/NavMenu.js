import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { NavLink as RouterNavLink } from 'react-router-dom';
import './NavMenu.css';

import logo from '../images/logo.png'

export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
                    <Container>
                        <NavbarBrand tag={RouterNavLink} to="/" className="text-white">
                            <img src={logo} alt="uaiComida" style={{ height: 30, marginRight: 10 }}></img>
                            uaiComida
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={RouterNavLink} exact className="text-white" activeClassName="font-weight-bold border" to="/">Início</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RouterNavLink} exact className="text-white" activeClassName="font-weight-bold border" to="/counter">Mesas</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RouterNavLink} exact className="text-white" activeClassName="font-weight-bold border" to="/fetch-data">Fetch data</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
