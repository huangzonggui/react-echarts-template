import { get, post } from './request';
import { ToastsStore } from 'react-toasts'

export function verifyLogin(path, data) {
    return post(path, data).then(res => {
        console.log('res:', res)
        // switch (res.status) {
        //     case 200:
        //
        // }
        return res.data === 'OK';
    });
}

export function getCarList() {
    return get('carList').then(res => {
        switch (res.status) {
            case 200:
                return res.data.carList;
            default:
                ToastsStore.error('getCarList error:' + res.status)
        }
    })
}

// function commonControl(res) {
//     switch (res.status) {
//         case 200:
//             return res.data;
//         default:
//             ToastsStore.error('getCarList error:' + res.status)
//     }
// }
