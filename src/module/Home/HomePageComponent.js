import React from 'react';
import AnimatePage from 'app/module/common/AnimatePage';
import * as RB from 'react-bootstrap';
import {Link} from 'react-router-dom';
import I18N from 'app/I18N';
import config from 'app/config';

const avator = config.getDropboxFileUrl('s/lwzzzfelo8vwp9t/user-avatar.png');

export default class extends AnimatePage{
	renderPage(){
		return (
			<div className="home_homepage">
				<RB.Row>
					<RB.Col md={5}>
						{this.renderLeft()}
					</RB.Col>
					<RB.Col md={7}>
						{this.renderRight()}
					</RB.Col>
				</RB.Row>
			</div>
		);
	}

	renderLeft(){
		return (
			<div className="box_left">
				<img src={avator} />
			</div>
		);
	}

	renderRight(){
		return (
			<div className="box_right">
				<h1 className="font_1">{I18N.get('00001')}</h1>
				<h1 className="font_2">{I18N.get('00002')}</h1>

				<RB.Row>
					<RB.Col className="r_bx" xs={4}>
						<Link className="r_btn" style={{background:'rgba(232, 53, 86, 1)'}} to="/">MY RESUME</Link>
					</RB.Col>
					<RB.Col className="r_bx" xs={4}>
						<Link className="r_btn" style={{background:'rgba(97, 208, 212, 1)'}} to="/">MY RESUME</Link>
					</RB.Col>
					<RB.Col className="r_bx" xs={4}>
						<Link className="r_btn" style={{background:'rgba(209, 201, 38, 1)'}} to="/">MY RESUME</Link>
					</RB.Col>
				</RB.Row>

				<h1 className="font_10">{I18N.get('00003')}</h1>
			</div>
		);
	}
};