/**
 * Created by haoxiao on 2017-05-30.
 */
import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
// import Swipe from 'react-js-iso';
import './index.less'
export default class Slider extends Component{
    constructor(){
        super();
        this.state={index:0}
    }
    render(){
        return (
            <div id="slider">
                <ReactSwipe className="carousel" swipeOptions={{
                    continuous: true,
                    callback:(index)=>{
                        this.setState({index})
                    }
                }}>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美酒</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美景</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?'active':''}></li>
                    <li className={this.state.index==1?'active':''}></li>
                    <li className={this.state.index==2?'active':''}></li>
                </ul>
            </div>
        )
    }
}
