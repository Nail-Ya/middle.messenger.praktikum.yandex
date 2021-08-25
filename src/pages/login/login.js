import Handlebars from 'handlebars';
import {loginOrRegisterFormTemplate} from './../../layouts/loginOrRegisterForm/loginOrRegisterForm.hbs';

const data = {
  title: 'Вход',
  fields: [
    {
      'label': 'Логин',
      'name': 'login',
      'type': 'text',
      'value': 'login-name',
    },
    {
      'label': 'Пароль',
      'name': 'password',
      'type': 'password',
      'value': 'hard_password1',
    },
  ],
  isRegister: false,
};

const template = Handlebars.compile(loginOrRegisterFormTemplate);
const html = template(data);
document.getElementById('root').innerHTML = html;