/**
 * Created by haoxiao on 2017-05-31.
 */
import {get} from '../index';

export function getInfo(id) {
    return get('/api/detail/info/'+id)
}

export function getComment(id,page) {
    return get('/api/detail/comment/'+id+'/'+page)
}