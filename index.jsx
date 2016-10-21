
require('./app/lib/common.css');
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './app/components/main'

ReactDOM.render(
	<div>
		<Main></Main>
		</div>,
	document.querySelector("#myApp")
);
