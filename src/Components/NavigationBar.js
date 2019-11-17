import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        return (
            <React.Fragment>
                <div className="container-fluid fixed-bottom alpha">
                    <div className="row text-center">
                        <div className="col-3">
                            <NavItem className="navbarLink">
                                <img src="https://image.flaticon.com/icons/svg/2242/2242111.svg" width="20px" alt="logo" />
                                <br/>
                                <NavLink to="/Home" onClick={this.closeNav}>หน้าหลัก</NavLink>
                            </NavItem>

                        </div>
                        <div className="col-3">
                            <NavItem className="navbarLink">
                                <img src="https://image.flaticon.com/icons/svg/2242/2242111.svg" width="20px" alt="logo" />
                                <br/>
                                <NavLink to="/Product" onClick={this.closeNav}>สินค้าทั้งหมด</NavLink>
                            </NavItem>

                        </div>
                        <div className="col-3">
                            <NavItem className="navbarLink">
                                <img src="https://image.flaticon.com/icons/svg/2242/2242111.svg" width="20px" alt="logo" />
                                <br/>
                                <NavLink to="/News" onClick={this.closeNav}>สินค้าใหม่</NavLink>
                            </NavItem>

                        </div>
                        <div className="col-3">
                            <NavItem className="navbarLink">
                                <img src="https://image.flaticon.com/icons/svg/2242/2242111.svg" width="20px" alt="logo" />
                                <br/>
                                <NavLink to="/Promotion" onClick={this.closeNav}>สินค้าโปรโมชั่น</NavLink>
                            </NavItem>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default (NavigationBar);