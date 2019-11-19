import React, { Component } from 'react';
import DialogCar from '../Components/DialogCar';
import Car from '../assets/images/icon/sedan-car-model.svg';
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let data = [
            {
                id: 1,
                seat: "รถเก๋ง 1-4 ที่นั่ง",
                carIcon: Car
            },
            {
                id: 2,
                seat: "รถอเนกประสงค์ 4-8 ที่นั่ง",
                carIcon: Car
            },
            {
                id: 3,
                seat: "รถตู้ 8-10 ที่นั่ง",
                carIcon: Car
            },
            {
                id: 4,
                seat: "รถลีมูซีน 10-16 ที่นั่ง",
                carIcon: Car
            }
        ]
        return (
            <React.Fragment>
                <div className="container-fluid" style={{marginBottom:'60px'}}>
                    <div className="row">
                        {data.map((Data) => {
                            return(
                                <DialogCar img={Data.carIcon} seatPerson={Data.seat}/>
                                )
                        })}
                       
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
