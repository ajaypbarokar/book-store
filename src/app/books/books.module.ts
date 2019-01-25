import { NgModule } from '@angular/core';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [BookListComponent, BookDetailComponent],
  imports: [SharedModule, BooksRoutingModule],
  entryComponents: [BookDetailComponent]
})
export class BooksModule {}
