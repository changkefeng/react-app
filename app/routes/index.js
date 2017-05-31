/**
 * Created by haoxiao on 2017-05-30.
 */
import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import Login from '../containers/Login';
import User from '../containers/User';
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
