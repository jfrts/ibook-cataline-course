import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import BooksList from '@/store/booksList';

let booksList: BooksList;

function initializeStores(store: Store<any>): void {
  booksList = getModule(BooksList, store);
}

export { initializeStores, booksList };
