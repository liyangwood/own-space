import './boot';

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
import I18N from 'app/I18N';

import {AppHeader} from "app/module/layout/LayoutComponent";


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
	const lang = I18N.getLang();
	const getLangClassName = (l)=>{
		return 'active_enable'+(lang===l?' active':'');
	};
	const changeLang = (l)=>{
		localStorage.setItem('lang', l);
		location.reload(true);
	};

	return (
		<div id="main_box">
			{/*<header id="main_header">
				<div className="h_left">
					<h1 className="font_0">
						<Link to="/">Jacky Li</Link>
					</h1>
					<h4 className="font_0">
						<Link to="/">Javascript developer</Link>
					</h4>
				</div>

				<div className="h_lang">
					<span onClick={()=>changeLang('en')} className={getLangClassName('en')}>{I18N.get('english')}</span>
					<span>|</span>
					<span onClick={()=>changeLang('zh')} className={getLangClassName('zh')}>{I18N.get('chinese')}</span>
				</div>

				<nav className="h_nav">
					{
						_.map(RouterConfig.header_nav, (item, i)=>{
							return (
								<NavLink to={item.path} key={i} exact className="active_enable" activeClassName="active">{item.name}</NavLink>
							);
						})
					}
					<AppHeader />
				</nav>
			</header>*/}

			<AppHeader />

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