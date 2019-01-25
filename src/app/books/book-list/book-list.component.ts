import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatSort,
  MatDialogConfig,
  MatDialog
} from '@angular/material';
import { Book } from '../book';
import { BookService } from '../book.service';
import { BookDialogData } from '../book-dialog-data';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'edition', 'authors'];
  dataSource: MatTableDataSource<Book> = new MatTableDataSource<Book>([]);

  @ViewChild(MatSort)
  sort: MatSort;
  constructor(private bookService: BookService, private dialog: MatDialog) {}

  ngOnInit() {
    this.bookService.books$.subscribe(books => (this.dataSource.data = books));
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.customSort;
  }

  saveBook() {
    const book: Book = {
      id: 6,
      title: 'Angular',
      edition: '1/26/2019'
    };
    this.bookService.saveBook(book);
  }

  addBook() {
    this.openDialog({ id: -1 }, 'Add Book');
  }

  editBook(book: Book) {
    this.openDialog(book, 'Edit Book', true);
  }

  private customSort(data: Book, sortHeaderId: string) {
    const column = data[sortHeaderId];
    switch (sortHeaderId) {
      case 'edition':
        return new Date(column);
      case 'authors':
        let len = 0;
        if (column && column.length > 0) {
          len = column.length;
          return len;
        }
        return len;
      default:
        return column;
    }
  }
  private openDialog(book: Book, title: string, isEdit: boolean = false) {
    const dialogData: BookDialogData = {
      title: title,
      book: book,
      isEdit: isEdit
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = dialogData;
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = '600px';
    dialogConfig.disableClose = true;
    this.dialog.open(BookDetailComponent, dialogConfig);
  }
}
