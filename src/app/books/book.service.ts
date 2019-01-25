import { Injectable } from '@angular/core';
import { Book } from './book';
import { BehaviorSubject } from 'rxjs';
import { map, max } from 'rxjs/operators';
import { BOOKS } from './mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = new BehaviorSubject<Book[]>(BOOKS);
  books$ = this.books.asObservable();
  constructor() {}

  getBook(id: number) {
    return this.books$.pipe(
      map((books: Book[]) => books.find(book => book.id === id))
    );
  }

  saveBook(book: Book) {
    let temp: Book[] = [];
    if (book.id > -1) {
      const index = this.getBookIndex(book.id);
      if (index >= 0) {
        this.books.value[index] = book;
        temp = this.books.value;
      }
    } else {
      book.id = this.getIncreamentedId();
      temp = [...this.books.value, book];
    }
    this.books.next(temp);
  }
  private getIncreamentedId(): number {
    let maxId = -1;
    this.books.value.forEach((value: Book) => {
      if (maxId < value.id) {
        maxId = value.id;
      }
    });
    return maxId + 1;
  }
  private getBookIndex(id: number) {
    for (let i = 0; i < this.books.value.length; i++) {
      const book = this.books.value[i];
      if (book.id === id) {
        return i;
      }
    }
    return -1;
  }
}
