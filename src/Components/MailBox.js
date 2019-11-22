import React, { Component } from 'react';
import inbox from '../assets/images/icon/bxs-inbox2.png';

class MailBox extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-12 my-3 mb-5" style={{
                    maxWidth: '100%', wordWrap: 'break-word'
                    , boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16)', borderRadius: '8px',background:'#fff'
                }}>
                    <div className="container">
                        <div className="row">
                            {this.props.data.map((data, i) => {
                                return (
                                    <React.Fragment>
                                        {i >=1 &&
                                            <div className="bottom-hr " style={{background:'rgb(131, 130, 130)' , height: '1px'}}></div>
                                        }
                                        < div className="col-12 p-3">
                                            <div className="row">
                                                <div className="col-2">
                                                    <div style={{ background:'#fff',borderRadius: '25px', width: '45px', height: '45px', boxShadow: '0 2px 5px 0 rgba(0,0,0,0.50)'}}>
                                                        <img className="img-responsive p-2" src={inbox} alt="box" width="45px" />
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <span className="lead">{data.title} </span>
                                                    <br />
                                                    <span style={{ color: 'rgb(131, 130, 130)' }}>{data.subTitle}</span>
                                                </div>
                                                <div className="col-3 py-2 lead text-right">
                                                    >
                                    </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default MailBox
