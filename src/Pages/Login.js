import React, { Component } from 'react';
import logo from '../assets/images/icon/logo.png';
import facebook from '../assets/images/icon/facebook.png';
import google from '../assets/images/icon/google.png';
import { NavLink ,Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            pass: '',
            redirect: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    handleUsername(e) {
        this.setState({
            user: e.target.value
        })
    }
    handlePassword(e) {
        this.setState({
            pass: e.target.value
        })
    }

    handleLogin(e) {
        let username = "admin";
        let password = "123456";
        e.preventDefault();

        if (this.state.user === username && password === this.state.pass) {
            alert('sucessful');
            this.setState({ redirect: true })
        } else {
            alert('Invalid username and password');
        }
    }

    componentWillMount() {
        this.props.addCurrentPath(this.props.location.pathname);
        this.addStyle('#21332d');
    }
    componentWillUnmount() {
        this.addStyle('#ffffff');
    }
    addStyle = (color) => {
        const bodyElt = document.querySelector("body");
        bodyElt.style.backgroundColor = `${color}`;
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/Home' />;
        }
        let login =
        {
            marginBottom: '60px',
        }
        return (
            <React.Fragment>
                <div className="container-fluid h-100 " style={login}>
                    <div className="row">
                        <div className="col-12">
                            <img src={logo} alt="logo login" style={{ width: '245px', margin: '-25px auto', display: 'block' }} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-12 ">
                            <h2 style={{ color: '#c2ffeb' }}>Login</h2>
                        </div>
                        <Form className="customeForm">
                            <FormGroup>
                                <Input type="text" name="username" id="username"  placeholder="Username" onChange={this.handleUsername}>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handlePassword}>
                                </Input>
                                <NavLink className="text-right d-block my-2" to="#">Forgot password?</NavLink>
                            </FormGroup>
                            <Button className="w-100" onClick={this.handleLogin}>Login</Button>
                        </Form>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center text-white">
                                    don't have account? <NavLink to="#">Create New Account</NavLink>
                                </div>
                                <div className="bottom-hr my-3" />
                                <div className="lead text-center text-white">
                                    Or Sing up with
                                </div>
                            </div>
                            <div className="col-6 w-100 my-5 customeButtonSocia">
                                <Button className="btn btn-primary">
                                    <div className="container ">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className="text-left d-block " src={facebook} alt="f" width="30px" />
                                            </div>
                                            <div className="col-4 text-login">
                                                Facebook
                                            </div>
                                        </div>
                                    </div>
                                </Button>
                            </div>
                            <div className="col-6 w-100 my-5 customeButtonSocia">
                                <Button className="btn btn-danger">
                                <div className="container ">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className="text-left d-block " src={google} alt="f" width="30px" />
                                            </div>
                                            <div className="col-4 text-login">
                                                Gmail
                                            </div>
                                        </div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentPath: state.currentPath
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCurrentPath: (current) => {
            dispatch({
                type: "getCurrentPath",
                payload: current
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
