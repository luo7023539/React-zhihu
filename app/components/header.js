require('./header.css');
import React from 'react';


export default class Header extends React.Component{
    render(){
        return(
            <div className="index-header">
                <h1 className="logo hide-text">知乎</h1>
                <h2 className="subtitle">与世界分享你的知识、经验和见解</h2>
            </div>
        )
    }
}