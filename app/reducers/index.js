/**
 * Created by haoxiao on 2017-05-30.
 */
//合并所有reducer，让store使用
import {combineReducers} from "redux";
import userInfo from './userInfo';
export default combineReducers({
    userInfo
})