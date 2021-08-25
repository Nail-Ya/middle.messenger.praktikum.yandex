import Handlebars from 'handlebars';
import {chatsPageTemplate} from './chats.hbs';

const data = {
  links: [
    {
      'url': './login.html',
      'name': 'Login',
    },
    {
      'url': './register.html',
      'name': 'Register',
    },
    {
      'url': './notFoundErrorPage.html',
      'name': '404',
    },
    {
      'url': './internalServerErrorPage.html',
      'name': '500',
    },
    {
      'url': './profile.html',
      'name': 'Profile',
    },
    {
      'url': './profileEditInfo.html',
      'name': 'Profile edit info',
    },
    {
      'url': './profileEditPassword.html',
      'name': 'Profile edit password',
    },
  ]
};

const template = Handlebars.compile(chatsPageTemplate);
const html = template(data);
document.getElementById('root').innerHTML = html;