/**
 * Created by haoxiao on 2017-05-30.
 */
import React from 'react';
import {render} from 'react-dom';
import App from './containers/index';
import './assets/index.less';
import {Provider} from 'react-redux';
import {configureStore} from './store'
let store= configureStore({
    userInfo:{cityName:'上海'}
});
render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.querySelector('#app'));