import React, { Component } from 'react';
import { NavItem } from 'reactstrap';
import carIcon from '../assets/images/icon/bxs-car.svg';
import inbox from '../assets/images/icon/bxs-inbox.svg';
import user from '../assets/images/icon/bxs-user-circle.svg';
import wallet from '../assets/images/icon/bxs-wallet.svg';
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
                    <div className="row text-center listLink">
                        <div className="col-3">
                            <NavItem className="navbarLink">
                                <NavLink to="/Home" onClick={this.closeNav}>
                                <img src={carIcon} width="30px" alt="logo" />
                                <br />
                                    Home
                                    </NavLink>
                            </NavItem>

                        </div>
                        <div className="col-3">
                            <NavItem className="navbarLink">
                                <NavLink to="/MyWallet" onClick={this.closeNav}>
                                <img src={wallet} width="30px" alt="logo" />
                                <br />
                                    Wallet
                                    </NavLink>
                            </NavItem>

                        </div>
                        <div className="col-3">
                            <NavItem className="navbarLink">
                                <NavLink to="/Inbox" onClick={this.closeNav}>
                                <img src={inbox} width="30px" alt="logo" />
                                <br />
                                    Inbox
                                </NavLink>
                            </NavItem>

                        </div>
                        <div className="col-3">
                            <NavItem className="navbarLink">
                                <NavLink to="/Account" onClick={this.closeNav}>
                                    <img src={user} width="30px" alt="logo" />
                                    <br />
                                    Account</NavLink>
                            </NavItem>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default (NavigationBar);