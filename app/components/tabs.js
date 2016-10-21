

require('./tabs.css');
import React from 'react';

export default class Header extends React.Component{
    render(){
        return(
            <div className="index-tab-navs">
                <div className="navs-slider">
                    <a className="active">注册</a>
                    <a>登录</a>
                    <span className="navs-slider-bar"></span>
                </div>
            </div>
        )
    }
}