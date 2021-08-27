export const loginOrRegisterFormTemplate = `
  <div class="form-container">
    <form class="form">
      <span class="form__title">{{title}}</span>
      {{#each fields}}
        <div class="form__group">
          <input type="{{type}}" name="{{name}}" class="form__input" value="{{value}}">
          {{#if value}}
            <label for="{{name}}" class="form__label form__label_type_small">{{label}}</label>
          {{else}}
            <label for="{{name}}" class="form__label">{{label}}</label>
          {{/if}}
          <span class="form__input-error">Ошибка!</span>
        </div>
      {{/each}}
      {{#if isRegister}}
        <button class="button">Зарегистрироваться</button>
        <a href="./login.html" class="form__link">Войти</a>
      {{else}}
        <button class="button">Авторизоваться</button>
        <a href="./register.html" class="form__link">Нет аккаунта?</a>
      {{/if}}
    </form>
  </div>
`;