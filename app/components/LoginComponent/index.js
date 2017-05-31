/**
 * Created by haoxiao on 2017-05-31.
 */
import React,{Component} from 'react';
import './index.less';
export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state ={
            val:''
        }
    }
    changeVal =(e)=>{
        this.setState({
            val:e.target.value
        })
    };
    login =()=>{
        if(this.state.val.length){
            this.props.login(this.state.val)
        }else {
            alert('用户名不能为空')
        }
    };
    render(){
        return (
            <div>
                <div className="loginBox">
                    <input type="text" value={this.state.val} onChange={this.changeVal} placeholder="请输入用户名"/>
                    <button onClick={this.login}>登录</button>
                </div>
            </div>
        )
    }
}
