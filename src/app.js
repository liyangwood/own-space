import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import * as ReactRouter from 'react-router';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from 'app/data/store/reduxStore';
import HomePage from 'app/module/Home/HomePageComponent';
import 'app/style/index.scss';
import TransitionGroup from "react-transition-group/TransitionGroup";

import RouterConfig from 'app/config/router';


const middleware = (render, props)=>{
	return render;
};

const onEnter = ()=>{

};

const firstChild = (props)=>{
	const childrenArray = React.Children.toArray(props.children);
	return _.first(childrenArray);
};

const App = ()=>{
	return (
		<div id="main_box">
			<header id="main_header">
				<h4>This is header</h4>
				<Route path="/user" component={HomePage} />

				<nav className="h_nav">
					{
						_.map(RouterConfig.header_nav, (item, i)=>{
							return (
								<NavLink to={item.path} key={i} exact activeClassName="active">{item.name}</NavLink>
							);
						})
					}
				</nav>
			</header>

			<main id="main_content">
				{
					_.map(RouterConfig.router, (item, i)=>{
						return (
							<Route path={item.path} key={i} exact
								component={item.screen}
							/>
						);
					})
				}
			</main>

			<footer id="main_footer">
				<h4>This is footer</h4>
			</footer>

		</div>
	);
};




const render = () => {
	ReactDOM.render(
		(
			<Provider store={Store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		),
		document.getElementById('root'),
	);
};

render();