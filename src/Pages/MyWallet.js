import React, { Component } from 'react';
import WalletBox from '../Components/WalletBox';
import Visa from '../assets/images/icon/Visa.png';
import Paypal from '../assets/images/icon/Paypal.png';
import Master from '../assets/images/icon/Master.png';
class Home extends Component {
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
                        <div className="col-12 text-center mt-5">
                            <h5 style={{ color: '#4d4d4d' }}>WALLET</h5>
                            <div className="bottom-hr"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <WalletBox text={'* * * * * * 9 9 9 9'}  colorShade={'#398bc7 , #80e2ff'} img={Visa}/>
                            <WalletBox text={'* * * * * * 9 9 9 9'}  colorShade={'#f85e56, #f99e2b'} img={Master}/>
                            <WalletBox text={'* * * * * * 9 9 9 9'}  colorShade={'#c484f6, #52d1da'} img={Paypal}/>
                            <WalletBox text={'คลิกเพื่อเพิ่มบัตร'}  colorShade={'#333, #333'}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
