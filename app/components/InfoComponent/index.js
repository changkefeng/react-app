/**
 * Created by haoxiao on 2017-05-31.
 */
import React,{Component} from 'react';
import './index.less';
import Star from "../Star/index";
export default class InfoComponent extends Component{
    render(){
        let {img,desc,title,star,subTitle,price} = this.props.data;
        return (
            <div className="infoComponent">
                <div className="info-component">
                    <img src={img} />
                    <div className="info">
                        <h2>{title}</h2>
                        <div className="infoPrice"><Star count={star}/><span style={{"paddingLeft":"25px"}}> ¥{price}</span></div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <hr />
                <div className="desc" dangerouslySetInnerHTML={{__html:desc}}></div>
            </div>
        )
    }
}
