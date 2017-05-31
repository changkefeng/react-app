/**
 * Created by haoxiao on 2017-05-30.
 */
import * as Types from '../action-type/userInfo';
let initState = {};
function userInfo(state=initState,action) {
    switch (action.type){
        case Types.UPDATE_CITY:
            return action.data;
        default:
            return state;
    }
}
export default userInfo;