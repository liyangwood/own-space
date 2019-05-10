import _ from 'lodash';

export default {


	getDropboxFileUrl(key){
		return `https://dl.dropboxusercontent.com/${key}?dl=0`;
	}
};