import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateSpeakerController extends Controller {
  @service dataService;

  @action
  async createSpeaker(e) {
    e.preventDefault();
    await this.dataService.createSpeaker(this.model);
    this.transitionToRoute('speaker');
  }
}
