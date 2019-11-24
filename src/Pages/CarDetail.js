import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import sedan from '../assets/images/icon/sedan.png';
import limousine from '../assets/images/icon/limousine.png';
import van from '../assets/images/icon/van.png';
import car from '../assets/images/icon/car.png';
import wallet from '../assets/images/icon/bxs-wallet.svg';
import credit from '../assets/images/icon/credit-card.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCaretDown } from '@fortawesome/fontawesome-free-solid';
import {Redirect} from 'react-router-dom';
class CarDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isTrue: false,
            typePay: '',
            redirect: false

        }
        this.handlePayProduct = this.handlePayProduct.bind(this);
    }
    handlePayProduct = () => {
        this.setState({
            isTrue: !this.state.isTrue
        })
    }
    handleSelectPay = (e) => {
        if (e.target.value !== '') {
            this.setState({
                isTrue: !this.state.isTrue
            })
        }
        this.setState({
            typePay: e.target.value
        })
    }
    handlePayCancel = () => {
        this.setState({
            isTrue: true,
            typePay: ''
        })
    }
    handlePayConfirm = () => {
        alert('Payment completed. The car will arriving you within 5 minutes.');
        this.setState({ redirect: true })
    }
    render() {
        let data = [
            {
                id: 1,
                seat: "รถเก๋ง 1-4 ที่นั่ง",
                carIcon: car
            },
            {
                id: 2,
                seat: "รถอเนกประสงค์ 4-8 ที่นั่ง",
                carIcon: sedan
            },
            {
                id: 3,
                seat: "รถตู้ 8-10 ที่นั่ง",
                carIcon: van
            },
            {
                id: 4,
                seat: "รถลีมูซีน 10-16 ที่นั่ง",
                carIcon: limousine
            }
        ]
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/' />;
        }
        return (
            <React.Fragment>
                <div className="container-fluid" style={{ marginBottom: '100px', }}>
                    <div className="row">
                        <div className="col-12 mt-5 buttonBack">
                            <NavLink className="btn btn-primary" to="/Home">{`< Back`}</NavLink>
                        </div>
                    </div>
                    {data.map(Data => {
                        return (
                            Data.id === parseInt(this.props.match.params.id) &&
                            <React.Fragment>
                                <div className="col-md-4 col-12 mt-5 mx-auto">
                                    <div style={{ boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16)', width: '100%', padding: '20px' }}>
                                        <img src={Data.carIcon} alt={Data.seat} style={{ width: '100%', margin: '0 auto', display: 'block' }} />
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}

                    <div className="container mt-5" style={{
                        maxWidth: '85%', wordWrap: 'break-word'
                        , boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16)', borderRadius: '8px', background: '#fff'
                    }}>
                        <div className="row mb-5">
                            <div className="col-12 py-5  mb-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 text-left mt-5">
                                            <div className="row">
                                                <div className="col-2">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                                                </div>
                                                <div className="col-4 mt-2">
                                                    ตำแหน่งของคุณ
                                                </div>
                                                <div className="col-6 text-right">
                                                    <FontAwesomeIcon style={{ border: '1px solid #000', width: '25%', borderRadius: '10%', padding: '5px' }} icon={faMapMarkerAlt} size="2x" />
                                                </div>
                                            </div>
                                            <div className="bottom-hr mt-3" style={{ background: '#dcdcdc' }}> </div>
                                        </div>
                                        <div className="col-12 text-left mt-3">
                                            <div className="row">
                                                <div className="col-2">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                                                </div>
                                                <div className="col-4 mt-2">
                                                    จุดหมายปลายทาง
                                                </div>
                                                <div className="col-6 text-right">
                                                    <FontAwesomeIcon style={{ border: '1px solid #000', width: '25%', borderRadius: '10%', padding: '5px' }} icon={faMapMarkerAlt} size="2x" />
                                                </div>
                                            </div>
                                            <div className="bottom-hr mt-3" style={{ background: '#dcdcdc' }}> </div>
                                        </div>
                                        <div className="col-12 text-left mt-3">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img src={wallet} alt="icon" width="38px" />
                                                </div>
                                                <div className="col-4 mt-2">
                                                    ราคา
                                                </div>
                                                <div className="col-6 text-right">
                                                </div>
                                            </div>
                                            <div className="bottom-hr mt-3" style={{ background: '#dcdcdc' }}> </div>
                                        </div>
                                        <div className="col-12 text-left mt-3">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img src={credit} alt="icon" width="38px" />
                                                </div>
                                                <div className="col-4 mt-2">
                                                    ช่องทางการชำระเงิน
                                                </div>
                                                <div className="col-6 text-right">
                                                    <FontAwesomeIcon style={{ border: '1px solid #000', width: '25%', borderRadius: '10%' }} icon={faCaretDown} size="2x"
                                                        onClick={this.handlePayProduct} />
                                                </div>
                                                {this.state.isTrue ? (

                                                    <React.Fragment>

                                                        <div className="container mt-2">
                                                            <div className="row" style={{ border: '1px solid black', padding: '20px', borderRadius: '10px' }}>
                                                                <div className="col-md-4 my-2 cutome-pay-button">
                                                                    <button value={'Credit Card'} className=" btn btn-dark w-100" onClick={this.handleSelectPay}>Credit Card</button>
                                                                </div>
                                                                  <div className="col-md-4 my-2 cutome-pay-button">
                                                                    <button value={'PayPal'}
                                                                        className=" btn btn-dark w-100" onClick={this.handleSelectPay}>PayPal</button>
                                                                </div>
                                                                <div className="col-md-4 my-2 cutome-pay-button">
                                                                    <button value={'PromptPay'}
                                                                        className=" btn btn-dark  w-100" onClick={this.handleSelectPay}>PromptPay</button>
                                                                </div>
                                                                <div className="col-md-4 my-2 cutome-pay-button">
                                                                    <button value={'Rabbit Line Pay'}
                                                                        className=" btn btn-dark w-100" onClick={this.handleSelectPay}>Rabbit LINE Pay</button>
                                                                </div>
                                                                <div className="col-md-4 my-2 cutome-pay-button">
                                                                    <button value={'Air Pay'}
                                                                        className=" btn btn-dark w-100" onClick={this.handleSelectPay}>AirPay</button>
                                                                </div>
                                                                <div className="col-md-4 my-2 cutome-pay-button">
                                                                    <button value={'Qr code'}
                                                                        className=" btn btn-dark w-100" onClick={this.handleSelectPay}>Qr Code</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </React.Fragment>

                                                ) : ('')}
                                            </div>
                                            {this.state.typePay !== '' && !this.state.isTrue &&
                                                <React.Fragment>
                                                    <div className="container mt-2">
                                                        <div className="row" style={{ border: '1px solid black', padding: '20px', borderRadius: '10px' }}>
                                                            <div className="col-4 cutome-pay-button">
                                                                <button value={`${this.state.typePay}`} className="btn btn-dark">{this.state.typePay}</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </React.Fragment>
                                            }
                                            <div className="bottom-hr mt-3" style={{ background: '#dcdcdc' }}> </div>
                                            {this.state.typePay !== '' && !this.state.isTrue &&
                                                <div className="mx-auto mt-5">
                                                    <div className="row">
                                                        <div className="col-6 cutome-pay-button">
                                                            <button className="btn btn-primary w-100" onClick={this.handlePayConfirm}>Confirm</button>
                                                        </div>
                                                        <div className="col-6 cutome-pay-button" >
                                                            <button className="btn btn-danger w-100" onClick={this.handlePayCancel}>Cancel</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CarDetail;
