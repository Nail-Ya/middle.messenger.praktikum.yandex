import Handlebars from 'handlebars';
import {errorPageTemplate} from '../../layouts/errorPage/errorPage.hbs';

const data = {
  errorCode: '500',
  errorMessage: 'Мы уже фиксим',
};

const template = Handlebars.compile(errorPageTemplate);
const html = template(data);
document.getElementById('root').innerHTML = html;