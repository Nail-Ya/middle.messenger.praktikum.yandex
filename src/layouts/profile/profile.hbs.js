export const profileTemplate = `
  <main class="content">
    <nav class="navigation">
      <button class="navigation__button">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
          <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
          <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
        </svg>
      </button>
    </nav>

    <div class="profile">
      <div class="profile__image-container">
        <img src="{{avatar}}" alt="Аватар пользователя" class="profile__image">
        <button class="profile__image-button"><span class="profile__image-text">Поменять аватар</span></button>
      </div>

      {{#unless isEditInfo}}
        <span class="profile__name">Стив</span>
      {{/unless}}
      

      <form class="profile__form">
        {{#each fields}}
          <div class="profile__form-group">
            <label for="{{name}}" class="profile__label">{{label}}</label>
            <input type="{{type}}" name="{{name}}" class="profile__input" value="{{value}}">
          </div>
        {{/each}}
      </form>

      {{#if isShowProfile}}
        <ul class="profile__links">
          <li class="profile__link-item"><a href="./profileEditInfo.html" class="profile__link">Изменить данные</a></li>
          <li class="profile__link-item"><a href="./profileEditPassword.html" class="profile__link">Изменить пароль</a></li>
          <li class="profile__link-item"><a href="./index.html" class="profile__link profile__link_type_exit">Выйти</a></li>
        </ul>
      {{/if}}

      {{#if isEditInfo}}
        <button class="button button_type_change-info">Сохранить</button>
      {{/if}}
      {{#if isEditPassword}}
      <button class="button button_type_change-password">Сохранить</button>
      {{/if}}
      
    </div>
  </main>
`;