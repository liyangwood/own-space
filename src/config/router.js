import HomePage from 'app/module/Home/HomePageComponent';
import Resume from 'app/module/Resume/ResumeComponent';

export default {
	header_nav : [
		{
			path : '/',
			name : 'Home'
		},
		{
			path : '/resume',
			name : 'AAA'
		},
		{
			path : '/project',
			name : 'BBB'
		},
		{
			path : '/contact',
			name : 'DCCC'
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
		}
	]
};