const baseData = {
  baseUrl: 'https://students.netoservices.ru/fe-diplom',
  headers: {
    'Content-Type': 'application/json',
  },
};

const resp = (res) => {
  return res.ok ? res.json() : res.json().then((data) => Promise.reject(data));
};

class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }

  //*для поиска городов
  searchCities(city) {
    return fetch(`${this.baseUrl}/routes/cities?name=${city}`, {
      method: 'GET',
      headers: this.headers,
    }).then(resp);
  }

  //*Поиск направлений
  getAllRoutes(params) {
    return fetch(`${this.baseUrl}/routes?${params}`, {
      method: 'GET',
      headers: this.headers,
    }).then(resp);
  }

  //Возвращает последние 5 направлений
  getLastRoutes() {
    return fetch(`${this.baseUrl}/routes/last`, {
      method: 'GET',
      headers: this.headers,
    }).then(resp);
  }

  //Информация о посадочных местах определённого направления
  getRouteSeats(id, filters = '') {
    return fetch(`${this.baseUrl}/routes/${id}/seats${filters}`, {
      method: 'GET',
      headers: this.headers,
    }).then(resp);
  }

  //Оформление заказа выбранного направления
  getRegisteredOrder(data) {
    return fetch(`${this.baseUrl}/order`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(resp);
  }

  //Подписка на почтовые уведомления
  getSubscribe(data) {
    const url = `${this.baseUrl}/subscribe?email=${data}`;
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
    }).then(resp);
  }
}

export const api = new Api(baseData);
