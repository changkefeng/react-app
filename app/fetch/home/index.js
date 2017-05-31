/**
 * Created by haoxiao on 2017-05-30.
 */
import {get} from '../index';
export function getAd() {
    return get('/api/ad')
}
export function getList(city,page) {
    return get('/api/list/'+city+'/'+page)
}