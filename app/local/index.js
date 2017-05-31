/**
 * Created by haoxiao on 2017-05-30.
 */
export function getStorage(key) {
    return localStorage.getItem(key);
}
export function setStorage(key,value) {
    return localStorage.setItem(key,value);
}