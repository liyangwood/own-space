import React from 'react';
import AnimatePage from 'app/module/common/AnimatePage';
import * as RB from 'react-bootstrap';
import I18N from 'app/I18N';
import _ from 'lodash';

export default class extends AnimatePage{
	renderPage(){
		return (
			<div className="resume_resume">
				{this.renderSectionTitle()}
				<RB.Row>
					<RB.Col className="m0" md={8}>
						{this.renderPersonalInfo()}
						{this.renderExperience()}
						{this.renderEducation()}
					</RB.Col>
					<RB.Col md={4}>
						{this.renderSkill()}
					</RB.Col>
				</RB.Row>
			</div>
		);
	}

	renderSectionTitle(){
		return (
			<h1 className="font_1 r_tlt">{I18N.get('00012')}</h1>
		);
	}

	renderPersonalInfo(){
		return (
			<RB.Row className="r_box_row">
				<RB.Col xs={3}>
					<div className="r_s1">{I18N.get('00004')}​​</div>
				</RB.Col>
				<RB.Col xs={9}>
					<div className="r_s2 font_10">
						​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.
					</div>
				</RB.Col>
			</RB.Row>
		);
	}

	renderExperience(){
		const list = I18N.get('resume.job');
		return (
			<RB.Row className="r_box_row">
				<RB.Col xs={3}>
					<div className="r_s1">{I18N.get('00005')}​​</div>
				</RB.Col>
				<RB.Col xs={9}>
					{
						_.map(list, (item, i)=>{
							return this.renderEachWorkExperience(item, i);
						})
					}
				</RB.Col>
			</RB.Row>
		);
	}

	renderEachWorkExperience(d, i){
		return (
			<div className="r_s2" key={i}>
				<h4 className="b_1 font_9">{d.company} - {d.title}</h4>
				<h4 className="b_2 font_9">{d.startTime} - {d.endTime}</h4>
				<p className="b_3 font_10">{d.jobDesc}</p>
				<p className="b_4 font_10">{d.responsibility}</p>
			</div>
		);
	}

	renderEducation(){
		const list = I18N.get('resume.education');
		return (
			<RB.Row className="r_box_row">
				<RB.Col xs={3}>
					<div className="r_s1">{I18N.get('00006')}​​</div>
				</RB.Col>
				<RB.Col xs={9}>
					{
						_.map(list, (item, i)=>{
							return this.renderEachEducation(item, i);
						})
					}
				</RB.Col>
			</RB.Row>
		);
	}

	renderEachEducation(d, i){
		return (
			<div className="r_s2" key={i}>
				<h4 className="b_1 font_9">{d.name}</h4>
				<h4 className="b_2 font_9">{d.startTime} - {d.endTime}</h4>
			</div>
		);
	}

	renderSkill(){
		const list = I18N.get('resume.skill');
		return (
			<div className="r_t1">
				<i className="fa fa-info-circle"></i>
				<h1 className="font_8 t_1">{I18N.get('00007')}</h1>
				<div>
					{
						_.map(list, (value, i)=>{
							return (
								<p className="font_10" key={i}>{value}</p>
							);
						})
					}
				</div>
			</div>
		);
	}
};