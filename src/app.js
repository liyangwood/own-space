import React from 'react';
import ReactDOM from 'react-dom';


const Root = ()=>{
	return (
		<div>
			<b>{`asldfkjjslf`}</b>
		</div>
	);
};



const render = (Component) => {
	ReactDOM.render(
		<Root></Root>,
		document.getElementById('root'),
	);
};

render();