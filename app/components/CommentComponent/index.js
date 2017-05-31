/**
 * Created by haoxiao on 2017-05-31.
 */
import React,{Component} from 'react';
import CommentItem from "./CommentItem/index";
export default class CommentComponent extends Component{
    render(){
        return (
            <div>
                {
                    this.props.data.map((item,index)=>(
                        <CommentItem key={index} item={item} />
                    ))
                }
            </div>
        )
    }
}
