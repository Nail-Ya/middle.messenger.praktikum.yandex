import Handlebars from 'handlebars';
import {errorPageTemplate} from '../../layouts/errorPage/errorPage.hbs';

const data = {
  errorCode: '404',
  errorMessage: 'Не туда попали',
};

const template = Handlebars.compile(errorPageTemplate);
const html = template(data);
document.getElementById('root').innerHTML = html;