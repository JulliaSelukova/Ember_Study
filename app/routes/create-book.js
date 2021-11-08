import Route from '@ember/routing/route';

export default class CreateBookRoute extends Route {
  model() {
    return {
      id: '',
      name: '',
      author: '',
      size: '',
      description: '',
      image: '',
      tags: '',
    };
  }
}
