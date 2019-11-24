import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../assets/images/images/profile.jpg';
class Account extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" style={{ marginBottom: '60px' }}>
                    <div className="row">
                        {/* <NavLink to="Home">Back</NavLink> */}
                        <div className="col-12 mt-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <img className="avatar" src={profile} alt="avatar" />
                                    </div>
                                    <div className="col-6 mt-4">
                                        Name Surname
                                    <div style={{ color: '#4d4d4d' }}>แก้ไข ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col-12 text-left mt-5">
                                        <NavLink to="#" style={{textDecoration:'none',color:'#000'}}>
                                        ยอดเงินคงเหลือ
                                        </NavLink>
                                        <div className="bottom-hr mt-3" style={{background:'#dcdcdc'}}> </div>
                                     </div>
                                    <div className="col-12 text-left mt-3">
                                        <NavLink to="#" style={{textDecoration:'none',color:'#000'}}>
                                        ยินยันตัวตน
                                        </NavLink>
                                        <div className="bottom-hr mt-3" style={{background:'#dcdcdc'}}> </div>
                                     </div>
                                    <div className="col-12 text-left mt-3">
                                        <NavLink to="#" style={{textDecoration:'none',color:'#000'}}>

                                        บัตรประชาชน / หนังสือเดินทาง
                                        </NavLink>
                                        <div className="bottom-hr mt-3" style={{background:'#dcdcdc'}}> </div>
                                     </div>
                                    <div className="col-12 text-left mt-3">
                                        <NavLink to="#" style={{textDecoration:'none',color:'#000'}}>

                                        เปลี่ยนภาษา
                                        </NavLink>
                                        <div className="bottom-hr mt-3" style={{background:'#dcdcdc'}}> </div>
                                    </div>
                                    <div className="col-12 text-left mt-3">
                                        <NavLink to="#" style={{textDecoration:'none',color:'#000'}}>

                                        คำถามที่พบบ่อย
                                        </NavLink>
                                        <div className="bottom-hr mt-3" style={{background:'#dcdcdc'}}> </div>
                                    </div>
                                    <div className="col-12 text-left mt-3 mb-5">
                                        <NavLink to="#" style={{textDecoration:'none',color:'#000'}}>

                                        ติดต่อ                                        
                                        </NavLink>
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

export default Account;
