import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditSpeakerController extends Controller {
  @service dataService;

  @action
  async saveSpeaker(e) {
    e.preventDefault();
    await this.dataService.changeSpeaker(this.model);
    this.transitionToRoute('speaker');
  }
}
