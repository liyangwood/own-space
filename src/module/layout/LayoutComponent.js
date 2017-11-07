import React from 'react';
import * as RB from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import I18N from 'app/I18N';

const {Navbar, Nav, NavItem} = RB;
export const AppHeader = class extends React.Component {
	render(){
		const {header_nav} = this.props;
		const lang = I18N.getLang();
		const getLangClassName = (l)=>{
			return 'active_enable'+(lang===l?' active':'');
		};
		const changeLang = (l)=>{
			localStorage.setItem('lang', l);
			location.reload(true);
		};
		return (
			<header id="main_header">
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
						_.map(header_nav, (item, i)=>{
							return (
								<NavLink to={item.path} key={i} exact className="active_enable" activeClassName="active">{item.name}</NavLink>
							);
						})
					}
				</nav>
			</header>
		);
	}
};

export const AppFooter = class extends React.Component{
	render(){
		return (
			<footer id="main_footer">
				<h4></h4>
			</footer>
		);
	}
};

