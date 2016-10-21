
require('./app/lib/common.css');
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
	<div>
		<Search />
		<Header source="http://localhost:3000/data/swiper" />
		<Otherapp source="http://localhost:3000/data/otherapp" />
		<Spike source="http://localhost:3000/data/spike" />
		<More source="http://localhost:3000/data/more" />
		<Like source="http://localhost:3000/data/like" />
	</div>,
	document.querySelector("#myApp")
);
