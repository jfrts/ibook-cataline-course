import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { Book } from '@/models';
import { $axios } from '@/utils/nuxt-instance';

@Module({ name: 'booksList', stateFactory: true, namespaced: true })
export default class BooksList extends VuexModule {
  private booksList = [] as Book[];
  private book = {} as Book;

  public get $all() {
    return this.booksList;
  }

  public get $single() {
    return this.book;
  }

  @Mutation
  private SET_ALL(booksList: Book[]) {
    this.booksList = booksList;
  }

  @Mutation
  private SET_SINGLE(book: Book) {
    this.book = book;
  }

  @Action
  public async index() {
    const booksList = await $axios.$get('/books');
    this.context.commit('SET_ALL', booksList);
  }

  @Action
  public async show(id: number) {
    const book = await $axios.$get(`/books/${id}`);
    this.context.commit('SET_SINGLE', book);
  }
}
