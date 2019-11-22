import React, { Component } from 'react';
import DialogCar from '../Components/DialogCar';
import sedan from '../assets/images/icon/sedan.png';
import limousine from '../assets/images/icon/limousine.png';
import van from '../assets/images/icon/van.png';
import car from '../assets/images/icon/car.png';
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentWillMount() {
        this.addStyle('#bac7d0');
    }
    componentWillUnmount(){
        this.addStyle('#ffffff');

    }
            addStyle = (color) => {
                const bodyElt = document.querySelector("body");
                bodyElt.style.backgroundColor = `${color}`;
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
        let home =
        {
            marginBottom: '60px',
        }
        return (
            <React.Fragment>
                <div className="container-fluid h-100 home" style={home}>
                    <div className="row">
                        {data.map((Data) => {
                            return (
                                <DialogCar img={Data.carIcon} seatPerson={Data.seat} idCar={Data.id} />
                            )
                        })}

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
