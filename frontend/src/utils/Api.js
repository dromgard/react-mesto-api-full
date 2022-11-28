class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`;
  }

  // Обрабатываем статус запроса к серверу, возвращаем положительный результат или промис с ошибкой.
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  register(password, email) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password, email: email }),
    }).then(this._handleResponse);
  };

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  };


  // Получаем данные профиля.
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // Получаем карточки.
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // Отправляем новые данные пользоателя.
  editUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._handleResponse);
  }

  // Добавляем новую карточку.
  addNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._handleResponse);
  }

  // Удаляем карточку.
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // Ставим лайк.
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // Удаляем лайк.
  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: "PUT",
        headers: this._headers,
      }).then(this._handleResponse);
    } else {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._handleResponse);
    }
  }

  // Обновляем аватар.
  updateUserAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._handleResponse);
  }
}

// Создаем экземпляр класса подключения к серверу.
export const api = new Api({
  // baseUrl: "http://localhost:3001",
  baseUrl: "https://api.dromgard.nomoredomains.club",
  headers: {
    Authorization: "",
    "Content-Type": "application/json",
  },
});
