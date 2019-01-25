import { Injectable } from '@angular/core';
import { Author } from './author';
import { AUTHORS } from './mock-authors';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor() {}
  getAuthors(): Observable<Author[]> {
    return of(AUTHORS);
  }

  getAuthor(id: number) {
    return this.getAuthors().pipe(
      map((authors: Author[]) => authors.find(author => author.id === id))
    );
  }
}
