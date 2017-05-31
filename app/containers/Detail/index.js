/**
 * Created by haoxiao on 2017-05-31.
 */
import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/Info";
// 通过路由渲染的组件都会在this.props上增加很多属性，例如history ,match...
export default class Detail extends Component{
    render(){
        return (
            <div>
                <HeaderComponent history={this.props.history} title="商户详情"/>
                <Info id={this.props.match.params.id}/>
            </div>
        )
    }
}
