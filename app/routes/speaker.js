import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SpeakerRoute extends Route {
  @service dataService;

  async model() {
    return this.dataService.readSpeakers();
  }
}
