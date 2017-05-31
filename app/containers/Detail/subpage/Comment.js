/**
 * Created by haoxiao on 2017-05-31.
 */
import React,{Component} from 'react';
import {getComment} from '../../../fetch/detail';
import CommentComponent from "../../../components/CommentComponent/index";
import LoadMore from "../../../components/ListComponent/LoadMore/index";
export default class Comment extends Component{
    constructor(){
        super();
        this.state = {
            page:0,
            data:[],
            hasMore:true,
            isLoading:true
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length?<CommentComponent data={this.state.data}/>:<div>正在加载</div>
                }
                <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore}/>
            </div>
        )
    }
    loadMore = ()=>{
        this.setState({isLoading:true,page:this.state.page+1},()=>{
            this.processData(getComment(this.props.id,this.state.page))
        })
    };
    componentDidMount(){
        this.processData(getComment(this.props.id,0))
    }
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({hasMore,data:this.state.data.concat(data),isLoading:false})
        })
    }
}
