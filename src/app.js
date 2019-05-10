import './boot';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import * as ReactRouter from 'react-router';
import {HashRouter, Route, Link, NavLink} from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from 'app/data/store/reduxStore';
import HomePage from 'app/module/Home/HomePageComponent';
import 'app/style/index.scss';
import TransitionGroup from "react-transition-group/TransitionGroup";

import RouterConfig from 'app/config/router';

import {AppHeader, AppFooter} from "app/module/layout/LayoutComponent";


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
		<div>
			<div id="main_box">

				<AppHeader header_nav={RouterConfig.header_nav} />

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
			</div>

			<AppFooter />
		</div>

	);
};




const render = () => {
	ReactDOM.render(
		(
			<Provider store={Store}>
				<HashRouter>
					<App />
				</HashRouter>
			</Provider>
		),
		document.getElementById('root'),
	);
};

render();