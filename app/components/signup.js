

require('./signup.css');
import React from 'react';
import Input from  './input'

export default class Signin extends React.Component{
    render() {
        return(
            <div className="view view-signup selected">
                <form action="/register/email" id="sign-form-1" autocomplete="off" method="POST" novalidate="novalidate">
                    <div className="group-inputs">
                        <Input/>
                        <Input/>
                        <Input/>
                        <Input/>
                    </div>
                    <div className="button-wrapper">
                        <button className="sign-button submit" type="submit">注册知乎</button>
                    </div>
                </form>
                <p className="agreement-tip">点击「注册」按钮，即代表你同意<a>《知乎协议》</a></p>
            </div>
    )
    }
}
