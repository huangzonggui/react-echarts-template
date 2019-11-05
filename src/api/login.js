import { get } from './request';

export function verifyLogin(path) {
    return get(path).then(res => res.data);
}