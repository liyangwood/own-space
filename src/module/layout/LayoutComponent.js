import React from 'react';
import * as RB from 'react-bootstrap';
import {Link} from 'react-router-dom';

const {Navbar, Nav, NavItem} = RB;
export const AppHeader = class extends React.Component {
	render(){
		return (
			<Navbar id="main_header" collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<div className="h_left">
							<h1 className="font_0">
								<Link to="/">Jacky Li</Link>
							</h1>
							<h4 className="font_0">
								<Link to="/">Javascript developer</Link>
							</h4>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="#">Link</NavItem>
						<NavItem eventKey={2} href="#">Link</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
};

