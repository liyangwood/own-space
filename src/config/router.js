import I18N from 'app/I18N';

import HomePage from 'app/module/Home/HomePageComponent';
import Resume from 'app/module/Resume/ResumeComponent';
import Contact from 'app/module/Contact/ContactComponent';

export default {
	header_nav : [
		{
			path : '/',
			name : I18N.get('nav.home')
		},
		{
			path : '/resume',
			name : I18N.get('nav.resume')
		},
		{
			path : '/project',
			name : I18N.get('nav.project')
		},
		{
			path : '/contact',
			name : I18N.get('nav.contact')
		}
	],

	router : [
		{
			path : '/',
			screen : HomePage
		},
		{
			path : '/resume',
			screen : Resume
		},
		{
			path : '/contact',
			screen : Contact
		}
	]
};