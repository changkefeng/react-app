/**
 * Created by haoxiao on 2017-05-30.
 */
import React,{Component} from 'react';
import RouterMap from '../routes/index';
import {connect} from 'react-redux';
import {getStorage} from '../local/index';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/userInfo';
class App extends Component{
    constructor(){
        super();
        this.state = {done:false}
    }
    render(){
        return (
            <div>
                {
                    this.state.done?<RouterMap/>:<div>正在加载</div>
                }
            </div>
        )
    }
    componentDidMount(){
        let city = getStorage('cityName');
        if(city==null){
            city='杭州'
        }
        this.props.userActions.update({cityName:city});
        this.setState({
            done:true
        })
    }
}
export default connect(
    state=>{
        return {}
    },
    dispatch=>{
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)
