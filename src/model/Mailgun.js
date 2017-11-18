import mailgun from 'mailgun.js';
import I18N from 'app/I18N';

/*
curl  \
    https://api:key-80d0cd77a3bc3ae1c568e349e36cadb8@api.mailgun.net/v3/email.liyangwood.com/messages \
    -F from='liyangwood@sohu.com' \
    -F to=liyangwood@gmail.com \
    -F subject='Hello' \
    -F text='Testing some Mailgun awesomnessdsfsf!'
 */

const C = {
	key : 'key-80d0cd77a3bc3ae1c568e349e36cadb8',
	domain : 'email.liyangwood.com'
};

export default class {
	constructor(){
		this.mail = mailgun.client({
			key: C.key,
			username: 'api',
			url : `https://api:${C.key}@api.mailgun.net`
		});
	}

	send(param, callback){
		return this.mail.messages.create(C.domain, {
			from: param.from,
			to: I18N.get('resume.email'),
			subject: param.name +' - ' + param.subject,
			text: param.text
		}).then((msg)=>{
			callback(true, msg);
		}).catch((e)=>{
			callback(false, e);
		});
	}
};