import { verifyLogin } from '../../api/login';
import { VERIFY_LOGIN } from '../types-constant'

export function verify_login({path, key}) {
    return async  dispatch => {
        const loginStatus = await verifyLogin(path);

        await dispatch({
            type: VERIFY_LOGIN,
            msg: {key, value: loginStatus}
        })
    }
}