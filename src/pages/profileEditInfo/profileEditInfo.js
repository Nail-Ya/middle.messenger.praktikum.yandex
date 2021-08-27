import Handlebars from 'handlebars';
import {profileTemplate} from '../../layouts/profile/profile.hbs';
import avatar from '../../../static/images/no-avatar.svg';

const data = {
  avatar: avatar,
  isShowProfile: false,
  isEditInfo: true,
  isEditPassword: false,
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
      'label': 'Имя в чате',
      'name': 'display_name',
      'value': 'steveJobs',
      'type': 'text',
    },
    {
      'label': 'Телефон',
      'name': 'phone',
      'value': '+7 (111)-111-11-11',
      'type': 'phone',
    },
  ]
};

const template = Handlebars.compile(profileTemplate);
const html = template(data);
document.getElementById('root').innerHTML = html;
