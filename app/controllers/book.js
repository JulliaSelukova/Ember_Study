import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookController extends Controller {
    @service dataService;

    @action
    async deleteBook(book) {
      await this.dataService.deleteBook(book);
      this.transitionToRoute('book');
    }
}
