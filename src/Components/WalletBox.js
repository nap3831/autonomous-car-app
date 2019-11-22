import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlusCircle } from '@fortawesome/fontawesome-free-solid';


class WalletBox extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    handleClickWalletBox = () => {
        alert('Comming Soon !');
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6  col-12 mt-2" style={{
                    borderRadius: '8px',
                    backgroundImage: `linear-gradient(to right,${this.props.colorShade})`,
                    border: '2px solid #fff',
                }}>
                    <div className=" text-white" >
                        {this.props.img ?
                            <div style={{ background: 'rgb(255, 255, 255)',
                                width: '60px',
                                height: '50px',
                                marginTop: '10px',
                                marginBottom: '10px',
                                padding: '5px',
                                borderRadius: '10px',
                            }}>
                                {this.props.img && <img src={this.props.img} alt="Visa netbank" width="100%" />}
                            </div>
                            :
                            <div style={{ marginTop: '55px', marginBottom: '10px' }}>

                            </div>
                        }
                        {this.props.img ?
                            <p className="lead">{this.props.text}</p>

                            :
                            <div className="mb-5">
                                <div className="text-center m-5">
                                    <FontAwesomeIcon className="pt-2" icon={faPlusCircle} size="2x" onClick={this.handleClickWalletBox} />
                                    <span className="lead">
                                        {this.props.text}
                                    </span>
                                </div>
                            </div>
                        }


                        {this.props.img &&
                            <div className="text-right mb-2">
                                <FontAwesomeIcon icon={faTrashAlt} size="2x" onClick={this.handleClickWalletBox} />
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default WalletBox;
