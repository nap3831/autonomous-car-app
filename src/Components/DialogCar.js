import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-4 col-6 my-5">
                    <div className="card cardStyle">
                        <div className="p-4">
                            <img src={this.props.img} alt="car" />
                        </div>
                    </div>
                        <div className="cardfooter mt-3" style={{ background: '#ffffff', borderRadius: '7px', }}>
                            {this.props.seatPerson}
                        </div>
                </div>


            </React.Fragment>
        )
    }
}

export default Home;
