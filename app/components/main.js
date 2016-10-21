
require('./main.css');


import React from 'react';
import Header from './header';
import Tabs from './tabs';
import Signup from './signup'

export default class Main extends React.Component{
	render(){
		return(
			<div className="index-main-body">
				<Header></Header>
				<Tabs></Tabs>
				<Signup></Signup>
				<downLoadBtn></downLoadBtn>
			</div>
		)
	}
}


/*
*
  *
   *  <InputWrap></InputWrap>
 <InputWrap></InputWrap>
 <InputWrap></InputWrap>
 <InputWrap></InputWrap>
 </Inputs>
 <signUpBtn></signUpBtn>
 <downLoadBtn></downLoadBtn>

 * */
