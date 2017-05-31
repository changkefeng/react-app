/**
 * Created by haoxiao on 2017-05-31.
 */
import React,{Component} from 'react';
import './index.less';
export default class HeaderComponent extends Component{
    back = ()=>{
        this.props.history.go(-1);
    };
    render(){
        return (
            <div className="back header-component">
                <i onClick={this.back} className="iconfont icon-fanhui"></i>
                {this.props.title}
            </div>
        )
    }
}
