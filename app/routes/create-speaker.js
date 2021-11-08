import Route from '@ember/routing/route';

export default class CreateSpeakerRoute extends Route {
  model() {
    return {
      id: '',
      firstName: '',
      lastName: '',
      secondName: '',
    };
  }
}
