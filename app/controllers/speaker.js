import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SpeakerController extends Controller {
  @service dataService;

  @action
  async deleteSpeaker(speaker) {
    await this.dataService.deleteSpeaker(speaker);
    this.transitionToRoute('speaker');
  }
}
