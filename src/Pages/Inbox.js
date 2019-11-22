import React, { Component } from 'react';
import MailBox from '../Components/MailBox';
class Inbox extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentWillMount() {
        this.addStyle('#eaeaea');
    }
    componentWillUnmount(){
        this.addStyle('#ffffff');

    }
            addStyle = (color) => {
                const bodyElt = document.querySelector("body");
                bodyElt.style.backgroundColor = `${color}`;
            }
    render() {
        let Notify = [
            {
                title:'ผูกบัญชีธนาคาร รับฟรี คูปอง',
                subTitle:'คลิกผูกบัตร'
            },
            {
                title:'สมัครใช้งานวันนี้ รับฟรี ส่วนลด',
                subTitle:'คลิกสมัครใช้งาน'
            },
            {
                title:'comming soon ',
                subTitle:'!!'
            }
        ]
        
        return (
            <React.Fragment>
                <div className="container-fluid" style={{ marginBottom: '60px' }}>
                    <div className="row">
                        <div className="col-12 text-center mt-1" style={{ background:'#fff',padding: '25px', boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16)', }}>
                            <h5>A - Taxi ยินดีต้อนรับ</h5>
                        </div>
                        <div className="container">
                                <MailBox data={Notify}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Inbox;
