import Handlebars from 'handlebars';
import {loginOrRegisterFormTemplate} from './../../layouts/loginOrRegisterForm/loginOrRegisterForm.hbs';

const data = {
  title: 'Регистрация',
  fields: [
    {
      'label': 'Почта',
      'name': 'email',
      'value': 'email@gmail.com',
      'type': 'email',
    },
    {
      'label': 'Логин',
      'name': 'login',
      'value': 'login-name',
      'type': 'text',
    },
    {
      'label': 'Имя',
      'name': 'first_name',
      'value': 'Стив',
      'type': 'text',
    },
    {
      'label': 'Фамилия',
      'name': 'second_name',
      'value': 'Джобс',
      'type': 'text',
    },
    {
      'label': 'Телефон',
      'name': 'phone',
      'value': '+7 (111)-111-11-11',
      'type': 'phone',
    },
    {
      'label': 'Пароль',
      'name': 'password',
      'type': 'password',
      'value': 'hard_password',
    },
    {
      'label': 'Пароль (ещё раз)',
      'name': 'passwordRepeat',
      'type': 'password',
      'value': 'hard_password',
    },
  ],
  isRegister: true,
}

const template = Handlebars.compile(loginOrRegisterFormTemplate);
const html = template(data);
document.getElementById('root').innerHTML = html;
