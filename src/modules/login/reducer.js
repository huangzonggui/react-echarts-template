import { VERIFY_LOGIN } from '../types-constant';

const initialState = {
    loginStatus: false
};

const typesCommands = {
    [VERIFY_LOGIN](state, action) {
        const {key, value} = action.msg;

        return Object.assign({}, state, {
            [key]: value
        });
    }
};

export default function loginHome(state = initialState, action) {
    const actionResponse = typesCommands[action.type];

    return actionResponse ? actionResponse(state, action) : state;
}