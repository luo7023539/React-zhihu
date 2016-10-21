

require('./input.css');
import React from 'react'

export default class Signin extends React.Component{
    render() {
        return(
            <div className="email input-wrapper">
                <input className="account"/>
            </div>
        )
    }
}
