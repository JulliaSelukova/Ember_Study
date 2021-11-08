import Service from '@ember/service';
import config from 'ember-study/config/environment';
import { A } from '@ember/array';

export default class DataServiceService extends Service {
  init() {
    super.init(...arguments);
    this.set('speakers', A());
    this.set('books', A());
  }

  async readSpeakers() {
    const response = await fetch(`${config.backendURL}speakers`);
    let speakers = await response.json();
    this.speakers.clear();
    this.speakers.pushObjects(speakers);
    return this.speakers;
  }

  readSpeaker(id) {
    //const response = await fetch(`${config.backendURL}speakers/${id}`);
    //return response.json();
    return this.speakers.find((speaker) => speaker.id === parseInt(id));
  }

  changeSpeaker(speaker) {
    return fetch(`${config.backendURL}speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speaker),
    });
  }

  createSpeaker(speaker) {
    return fetch(`${config.backendURL}speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speaker),
    });
  }

  deleteSpeaker(speaker) {
    this.speakers.removeObject(speaker);
    return fetch(`${config.backendURL}speakers/${speaker.id}`, {
      method: 'DELETE',
    });
  }

  async readBooks() {
    // const response = await fetch(`${config.backendURL}books`);
    // return response.json();
    const response = await fetch(`${config.backendURL}books`);
    let books = await response.json();
    this.books.clear();
    this.books.pushObjects(books);
    return this.books;
  }

  async readBook(id) {
    // const response = await fetch(`${config.backendURL}books/${id}`);
    // return response.json();

    return this.books.find((book) => book.id === parseInt(id));
  }

  changeBook(book) {
    return fetch(`${config.backendURL}books/${book.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  }

  createBook(book) {
    return fetch(`${config.backendURL}books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  }

  deleteBook(book) {
    this.books.removeObject(book);
    return fetch(`${config.backendURL}books/${book.id}`, {
      method: 'DELETE',
    });
  }
}
