import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BookRoute extends Route {
  @service dataService;

  async model() {
    return this.dataService.readBooks();
  }
}
