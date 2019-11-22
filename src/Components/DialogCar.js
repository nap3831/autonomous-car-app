import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class DialogCar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-3 col-6 my-3 mb-5">
                    <NavLink to={`CarDetail/${this.props.idCar}`}>
                        <div className="card cardStyle">
                            <div className="p-4 hover-img">
                                <img src={this.props.img} alt="car" />
                            </div>
                        </div>
                    </NavLink>
                        <div className="cardfooter mt-3" style={{ background: '#ffffff', borderRadius: '7px', }}>
                            {this.props.seatPerson}
                        </div>
                </div>


            </React.Fragment>
        )
    }
}

export default DialogCar;
