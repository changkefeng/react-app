/**
 * Created by haoxiao on 2017-05-30.
 */
import 'whatwg-fetch';
import 'es6-promise';

export function get(url) {
    return fetch(url,{
        Accept:'application:json'
    })
}