import Handlebars from 'handlebars';
import {profileTemplate} from '../../layouts/profile/profile.hbs';
import avatar from '../../../static/images/no-avatar.svg';

const data = {
  avatar: avatar,
  isShowProfile: false,
  isEditInfo: false,
  isEditPassword: true,
  fields: [
    {
      'label': 'Старый пароль',
      'name': 'oldPassword',
      'type': 'password',
      'value': 'old-password',
    },
    {
      'label': 'Новый пароль',
      'name': 'newPassword',
      'type': 'password',
      'value': 'new-password',
    },
    {
      'label': 'Повторите новый пароль',
      'name': 'newPasswordRepeat',
      'type': 'password',
      'value': 'new-password',
    },
  ]
};

const template = Handlebars.compile(profileTemplate);
const html = template(data);
document.getElementById('root').innerHTML = html;
