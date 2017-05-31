/**
 * Created by haoxiao on 2017-05-31.
 */
import React,{Component} from 'react';
import './index.less';
export default class UserInfo extends Component{
    render(){
        return (
            <div className="user-info">
                <span>
                    {this.props.userInfo.username}
                </span>
                <span>
                    {this.props.userInfo.cityName}
                </span>
            </div>
        )
    }
}
