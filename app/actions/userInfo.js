/**
 * Created by haoxiao on 2017-05-30.
 */
import * as Types from '../action-type/userInfo';

//actionCreator 是一个函数
export function update(data) {
    return {
        type:Types.UPDATE_CITY,
        data
    }
}