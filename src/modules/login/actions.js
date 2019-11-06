import { verifyLogin } from '../../api/requestApi';
import { VERIFY_LOGIN } from '../types-constant'

export function verifyLoginAction({path, key}) {
    return async dispatch => {
        const loginStatus = await verifyLogin(path);
        console.log('loginStatus:', loginStatus)

        await dispatch({
            type: VERIFY_LOGIN,
            msg: {key, value: loginStatus}
        })
    }
}