import React, {PureComponent} from 'react';
// import { ToastsStore } from 'react-toasts'
// import {isValidValue} from '../../utils/checkValue';
import { getCarList } from '../../api/requestApi'
// import {car1} from '../../assets/img'
import * as carImgs from '../../assets/img'
import {isValidValue} from '../../utils/checkValue';

export default class CarList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            carList: ['one', 'two', 'three']
        }
    }

    async componentDidMount() {
        let carList = await getCarList();
        // console.log('carList:', carList);
        if (isValidValue(carList)) {
            this.setState({
                carList
            })
        }
    }

    render() {
        let carListTmp = this.state.carList;
        // console.log('carListTmp:', carListTmp)
        console.log('carListimgs:', carImgs)
        // const elements = ['one', 'two', 'three'];
        return (
            <div className="container-fluid bg-white">
                <div className="">
					<h3>
						Car List
					</h3>
                    <div className="row">

                    {
                        carListTmp.map((value, index) => {
                            let imgTmp = carImgs['car'+value.img];
                            console.log(imgTmp)
                            let imgAlt = 'car' + index;

                            return (
                                <div className="col-xs-6 col-md-3 bo" key={index}>
                                    <div className="m-2">
                                        <a href="#" className="thumbnail">
                                            <img src={imgTmp} alt={imgAlt} className="w-75"/>
                                        </a>

                                        <div> <span> 名稱： </span> <span> {value.name} </span> </div>
                                        <div> <span> 地點： </span> <span> {value.place} </span> </div>
                                        <div> <span> 價格： </span> <span> {value.price}萬 </span> </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    </div>
                </div>
            </div>
        );
    }
}