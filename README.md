# Проект "Mesto"

### Описание проекта:

Frontend включает в себя верстку и функционал на ReactJS. Реализованы защищенные роуты, регистрация/авторизация, API до собственного Backend, адаптивная верстка.

Backend реализован на ExpressJS, MongoDB + Mongoose. Реализована валидация данных на уровне схемы. Backend обрабатывает регистрацию, авторизацию, сохранение и удаление карточек, изменение данных пользователя.

### Технологии:

<img src="https://img.shields.io/badge/ReactJS-blue?logo=React&logoColor=white" alt="ReactJS" title="ReactJS"/> <img src="https://img.shields.io/badge/ExpressJS-blue?logo=express&logoColor=white" alt="ExpressJS" title="ExpressJS"/> <img src="https://img.shields.io/badge/MongoDB-blue?logo=MongoDB&logoColor=white" alt="MongoDB" title="MongoDB"/> <img src="https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white" alt="CSS3" title="CSS3"/> <img src="https://img.shields.io/badge/HTML5-blue?logo=html5&logoColor=white" alt="HTML5" title="HTML5"/>

- Обращение к API реализовано через fetch запросы.
- Для хранения токена и поисковых запросов используется localStorage.
- Переход между страницами и защищенные роуты релизованы через react-router-dom v.6.
- Для хранения данных используется MongoDB + Mongoose.
- В проекте применена адаптивная верстка, сайт отлично выглядит на экранах с большим и маленьким разрешением. Именование классов по БЭМ.
- Для адаптивной верстки в CSS используются медиазапросы.
- Для верстки блоков сайта использованы flex и grid.

### Макет:

[Макет сайта - https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/JavaScript.-Sprint-12?node-id=0%3A1&t=6KrcvzkxBXtSXVkj-0](https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/JavaScript.-Sprint-12?node-id=0%3A1&t=6KrcvzkxBXtSXVkj-0)

### Публикация в интернете:

IP: 51.250.79.131

[Frontend - https://mesto.api-skorolev.ru](https://mesto.api-skorolev.ru)

[Backend - https://api-mesto.api-skorolev.ru](https://api-mesto.api-skorolev.ru)

### Запуск проекта

Требования:

- Node.js >= 14;
- npm >= 6.14;

Frontend:

- `npm start` — запускает проект в режиме разработчика.
- `npm run build` — собирает проект для продакшена в папочку `build`.

Backend:

- `npm run start` — запускает сервер в режиме production.
- `npm run dev` — запускает сервер с hot-reload в режиме разработчика.
