import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            scrolling: false,
            isHover: false,
            search: false,
            isClick: false,
        }
        this.closeNav = this.closeNav.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    handleClickCart(){
        this.setState({
            isClick: !this.state.isClick
        })
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    closeNav() {
        this.setState({
            isOpen: false,
        })
    }
    render() {
     
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar className="text-center  alpha  fixed-top"  light expand="lg">
                        {/* <NavLink className="navbar-brand" to="/">
                            <img src={mainLogo} className="logo" alt="logo" />
                        </NavLink> */}
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <div className="alignAutoRight">
                                <Nav navbar>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/Home" onClick={this.closeNav}>หน้าหลัก</NavLink>
                                    </NavItem>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/Product" onClick={this.closeNav}>สินค้าทั้งหมด</NavLink>
                                    </NavItem>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/News" onClick={this.closeNav}>สินค้าใหม่</NavLink>
                                    </NavItem>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/Promotion" onClick={this.closeNav}>สินค้าโปรโมชั่น</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Collapse>
                    </Navbar>
                </div>
            </React.Fragment>
        );
    }
}

export default (NavigationBar);