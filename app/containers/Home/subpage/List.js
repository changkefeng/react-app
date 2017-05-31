/**
 * Created by haoxiao on 2017-05-30.
 */
import React,{Component} from 'react';
import {getList} from '../../../fetch/home';
import ListComponent from "../../../components/ListComponent/index";
import LoadMore from "../../../components/ListComponent/LoadMore/index";
export default class List extends Component{
    constructor(){
        super();
        this.state = {
            data:[],
            hasMore:true,
            page:0,
            isLoading:true
        }
    }
    loadMore=()=>{
          this.setState({page:this.state.page+1,isLoading:true},()=>{
              this.processData(getList(this.props.cityName,this.state.page))
          })
    };
    render(){
        return (
            <div>
                {this.state.data.length?<ListComponent data={this.state.data}/>:<div>正在加载</div>}
                <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore}/>
            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0))
    }
    //处理成功后的逻辑
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            console.log('正在加载');
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }
}
