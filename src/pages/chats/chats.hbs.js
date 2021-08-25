export const chatsPageTemplate = `
  <main class="content">
    <div class="chats-wrapper">
      <div class="contacts">
        <div class="contacts__header">
          <a href="./profile.html" class="contacts__link">
            Профиль
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L5 5L1 1" stroke="#999999"/>
            </svg>
          </a>
          <input type="text" class="contacts__input">
        </div>
        <ul class="contacts__list"></ul>
      </div>
      <div class="messages">
        <div class="messages__links">
          {{#each links}}
            <a href="{{url}}" class="messages__link">{{name}}</a>
          {{/each}}
        </div>
      </div>
    </div>
  </main>
`;