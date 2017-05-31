/**
 * Created by haoxiao on 2017-05-31.
 */
import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import LoginComponent from "../../components/LoginComponent/index";
class Login extends Component{
    constructor(){
        super();
        this.state = {
            login:false
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}/>
                {this.state.login?<LoginComponent login={this.login}/>:<div></div>}
            </div>
        )
    }
    login =(username)=>{
        let info = this.props.userInfo;
        info.username = username;
        this.props.userActions.update(info);
        if(this.props.match.params.route){
            this.props.history.push(decodeURIComponent(this.props.match.params.route));
        }else{
            this.props.history.push('/user');
        }
    };
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin =()=>{
        if(this.props.userInfo.username){
            this.props.history.push('/user')
        }
        this.setState({
            login:true
        })
    };
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch =>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login)
