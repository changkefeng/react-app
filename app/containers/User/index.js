/**
 * Created by haoxiao on 2017-05-31.
 */
import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import UserInfo from "../../components/UserInfo/index";
class User extends Component{
    render(){
        return (
            <div>
                <HeaderComponent back="/" title="用户信息" history={this.props.history}/>
                <UserInfo userInfo={this.props.userInfo} />
            </div>
        )
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(User)
