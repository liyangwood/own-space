import React from 'react';
import AnimatePage from 'app/module/common/AnimatePage';
import * as RB from 'react-bootstrap';
import I18N from 'app/I18N';
import _ from 'lodash';

export default class extends AnimatePage{

	defineStates(){
		return {
			email : '',
			name : '',
			subject : '',
			message : ''
		};
	}

	renderPage(){
		return (
			<div className="contact_page">
				<RB.Row>
					<RB.Col className="m0" md={6}>
						{this.renderSectionTitle()}
					</RB.Col>
					<RB.Col className="m0" md={6}>
						{this.renderEmailForm()}
						{this.renderSendButton()}
					</RB.Col>
				</RB.Row>
			</div>
		);
	}

	renderSectionTitle(){
		return (
			<h1 className="font_1 r_tlt">CONTACT</h1>
		);
	}

	renderEmailForm(){
		return (
			<RB.FormGroup className="c_a">
				<p className="font_9">{I18N.get('00008')}</p>
				<RB.FormControl value={this.state.name} onChange={this.formChange.bind(this, 'name')} className="c_1" type="text" placeholder="Name *" />
				<RB.FormControl value={this.state.email} onChange={this.formChange.bind(this, 'email')} className="c_1" type="text" placeholder="Email *" />
				<RB.FormControl value={this.state.subject} onChange={this.formChange.bind(this, 'subject')} className="c_1" type="text" placeholder="Subject *" />
				<RB.FormControl value={this.state.message} onChange={this.formChange.bind(this, 'message')} className="c_2" componentClass="textarea" type="text" placeholder="Message *" />
			</RB.FormGroup>
		);
	}
	formChange(key, e){
		const rs = {};
		rs[key] = e.target.value;
		this.setState(rs);
	}

	renderSendButton(){
		return (
			<div className="c_btn_box">
				<RB.Button className="c_b1" onClick={this.resetEmail.bind(this)}>Reset</RB.Button>
				<RB.Button className="c_b2" onClick={this.sendEmail.bind(this)} bsStyle="danger">Send</RB.Button>
			</div>
		);
	}

	sendEmail(){

	}
	resetEmail(){
		this.setState({
			email : '',
			name : '',
			subject : '',
			message : ''
		});
	}


};