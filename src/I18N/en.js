import config from 'app/config';

export default {
	res : {
		avatar_url : config.getDropboxFileUrl('s/b9hdjq47udouwsg/avatar.jpg?dl=0')
	},
	english : 'English',
	chinese : 'Chinese',
	nav : {
		home : 'HOME',
		resume : 'RESUME',
		project : 'PROJECTS',
		contact : 'CONTACT'
	},

	email : 'Email',

	'00001' : 'Hello',
	'00002' : 'a bit about me',
	'00003' : 'I am a javascript geeker, focus on web for many years. full stack and full client developer.',
	'000031' : 'Enjoy my site to get more information.',
	'00004' : 'Professional ​info',
	'00005' : 'Work experience​',
	'00006' : 'Education',
	'00007' : 'Skill',
	'00008' : 'Looking forward to answering your email',
	'00009' : 'MY RESUME',
	'00010' : 'MY WORK',
	'00011' : 'CONTACT ME',
	'00012' : 'RESUME',
	'00013' : 'LATEST PROJECTS',
	'00014' : 'To get more information or discuss with me',

	resume : {
		firstName : 'Jacky',
		lastName : 'Li',

		email : 'liyangwood@gmail.com',
		github : 'https://github.com/liyangwood',
		desc : 'Javascript expert and full stack developer',
		linkedIn : 'https://www.linkedin.com/in/jacky-li-4039747b/',
		facebook : 'https://www.facebook.com/liyangwood',


		job : [
			{
				startTime : '2016.09',
				endTime : 'now',
				company : 'IHealthlabs.Inc of Singapore',
				title : 'develop manager',
				jobDesc : 'build health care software for own products, include all of clients, ',
				responsibility : 'build health care software for own products, include all of clients, build health care software for own products, include all of clients, build health care software for own products, include all of clients, build health care software for own products, include all of clients, build health care software for own products, include all of clients, build health care software for own products, include all of clients, build health care software for own products, include all of clients, ',
				production : [
					{
						type : 'web',
						url : 'https://www.vsm.sg',
						name : 'VSM website',
						desc : 'This is VSM project website for iHIS, let user monitor his own status easily with real healthcare devices.',
						skill : 'React, redux, koa, graphql, ant design, docker'
					},
					{
						type : 'ios',
						url : 'https://itunes.apple.com/cn/app/vsm-sg/id1212098163?mt=8',
						name : 'VSM SG app',
						desc : 'This is iPad app for VSM, used by patient to take measurement and update info.',
						skill : 'React native, graphql, svg, apphub'
					}
				]
			},
			{
				startTime : '2015.09',
				endTime : '2016.09',
				company : 'GateChina.Inc',
				title : 'full stack developer',
				jobDesc : 'lead to develop own international production, include website, mobile web, ios and android clients.',
				responsibility : '',
				production : [
					{
						type : 'web',
						url : 'http://www.wenxuecity.com/',
						name : 'wenxuecity website',
						desc : 'No.1 Chinese website for overseas Chinese outside China. Offers a full spectrum of online information services.'
					},
					{
						type : 'web',
						name : 'Haiwai website',
						url : 'http://www.haiwai.com',
						desc : 'Life classification portal of overseas',
						skill : 'angular, gulp, bootstrap'
					},
					{
						type : 'ios',
						name : 'wenxuecity app',
						url : 'https://itunes.apple.com/sg/app/wenxuecity/id634117610?mt=8',
						desc : 'mobile app for wenxuecity',
						skill : 'object-c'
					},
					{
						type : 'ios',
						name : 'haiwai app',
						url : 'https://itunes.apple.com/sg/app/%E6%B5%B7%E5%A4%96%E5%90%8C%E5%9F%8E%E5%95%86%E5%AE%B6%E7%89%88/id974815137?mt=8',
						desc : 'mobile app for haiwai.com',
						skill : 'ionic, cordova'
					}
				]
			},
			{
				startTime : '2013.12',
				endTime : '2015.09',
				company : 'HP',
				title : 'System and Solution Architect',
				jobDesc : '',
				responsibility : '',
				production : [

				]
			},
			{
				startTime : '2011.10',
				endTime : '2013.12',
				company : 'Eachcloud.Inc',
				title : 'R&D Director',
				jobDesc : '',
				responsibility : '',
				production : [

				]
			},
			{
				startTime : '2008.10',
				endTime : '2011.10',
				company : 'Sohu.Inc',
				title : 'web developer',
				jobDesc : '',
				responsibility : '',
				production : [
					{
						type : 'web',
						name : 'sohu weibo',
						url : 'http://t.sohu.com/',
						desc : 'weibo of sohu'
					}
				]
			}
		],

		education : [
			{
				startTime : '2002.09',
				endTime : '2006.07',
				name : 'Dalian Polytechnic University'
			}
		],

		skill : [
			'javascript, typescript, node',
			'react, angular, vue',
			'react native, meteor, ionic',
			'express, koa',
			'ios native',
			'mongo, mysql, redis, memcache',
			'architecture and solution design',
			'devopts, docker, jenkins',
			'blockchain, Ethereum',
			'php, python',
			'scrum, pmp',
			'UE/UX'
		]

	}
};