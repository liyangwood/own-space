import I18N from 'app/I18N';

const lang = localStorage.getItem('lang') || 'en';
I18N.setLang(lang);