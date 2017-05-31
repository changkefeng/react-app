/**
 * Created by haoxiao on 2017-05-31.
 */
import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
    loadMore=()=>{
        this.props.isLoading?'':this.props.loadMore()
    };
    render(){
        return (
            <div ref="more" className="has-more" onClick={this.loadMore}>
                {
                    this.props.hasMore?<div>加载更多</div>:<div>我是有底线的</div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.fn=()=>{
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                console.log('滚动');
                if(this.props.isLoading){
                    return
                }
                let screen = window.screen.height;
                //获取元素距离屏幕顶端的距离 .top .left .right .bottom
                let top = this.refs.more.getBoundingClientRect().top;
                if(top<screen){
                    this.props.loadMore();
                }
            },50)
        };
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.fn)
    }
}
