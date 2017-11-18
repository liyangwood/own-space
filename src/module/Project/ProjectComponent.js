import React from 'react';
import AnimatePage from 'app/module/common/AnimatePage';
import * as RB from 'react-bootstrap';
import I18N from 'app/I18N';
import _ from 'lodash';

export default class extends AnimatePage{

	renderPage(){
		return (
			<div className="project_page">
				{this.renderSectionTitle()}
				{this.renderList()}
			</div>
		);
	}

	renderSectionTitle(){
		return (
			<h1 className="font_1 r_tlt">{I18N.get('00013')}</h1>
		);
	}

	renderList(){
		const list = this.getDataSrouce();
		return (
			<RB.Grid className="m0">
				{
					_.map(list, (item, i)=>{
						return this.renderEachList(item, i);
					})
				}

				{this.renderBottomPart()}
			</RB.Grid>
		);
	}

	getDataSrouce(){
		const list = I18N.get('resume.job');

		let rs = [];
		_.each(list, (item)=>{
			const p = item.production;
			rs = _.concat(rs, p);
		});

		return rs;
	}

	renderEachList(d, i){
		return (
			<RB.Row key={i} className="b_ba">
				<RB.Col md={2}>
					<div className="r_s1">{i+1}​​</div>
				</RB.Col>
				<RB.Col md={10} className="b_b1">
					<h1 className="font_2 t1">{d.name}</h1>
					{d.url && <a className="font_3 t2" href={d.url} target="_blank">{d.url}</a>}
					<h1 className="font_9 t3">{d.desc}</h1>
					{d.skill && <h1 className="font_9 t4">{d.skill}</h1>}
				</RB.Col>
			</RB.Row>
		);
	}

	renderBottomPart(){
		return (
			<RB.Row className="b_ba">
				<RB.Col md={8}>
					<span className="font_8 k1">{I18N.get('00014')} {'>>'}</span>
				</RB.Col>
				<RB.Col md={4} className="b_b2">
					<a className="font_3 k2" href="/contact">{I18N.get('00011')}</a>
				</RB.Col>
			</RB.Row>
		);
	}


};