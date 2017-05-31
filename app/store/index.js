/**
 * Created by haoxiao on 2017-05-30.
 */
import {createStore} from 'redux';
import reducers from '../reducers';
export function configureStore(initState) {
    return createStore(reducers,initState,window.devToolsExtension?window.devToolsExtension():undefined)
}