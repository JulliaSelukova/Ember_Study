import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateBookController extends Controller {
  @service dataService;

  @action
  async createBook(e) {
    e.preventDefault();
    await this.dataService.createBook(this.model);
    this.transitionToRoute('book');
  }
}
