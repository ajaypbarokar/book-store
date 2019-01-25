import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatTableDataSource,
  MatCheckboxChange
} from '@angular/material';
import { BookDialogData } from '../book-dialog-data';
import { BookService } from '../book.service';
import { DataService, Author } from 'src/app/core';
import { Book } from '../book';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  form: FormGroup;
  titleText: string;
  selectedAuthors: number[] = [];
  displayedColumns: string[] = ['select', 'name'];
  dataSource: MatTableDataSource<Author> = new MatTableDataSource<Author>([]);

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: BookDialogData,
    private dialogRef: MatDialogRef<BookDetailComponent>,
    private bookService: BookService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.loadData();
    this.buildForm();
  }

  selectRow(event: MatCheckboxChange, id: number) {
    if (event.checked) {
      this.selectedAuthors.push(id);
    } else {
      const index = this.selectedAuthors.indexOf(id);
      if (index >= 0) {
        this.selectedAuthors.splice(index, 1);
      }
    }
  }

  get title() {
    return this.form.get('title');
  }

  get edition() {
    return this.form.get('edition');
  }

  submit() {
    const book: Book = {
      id: this.data.book.id,
      title: this.form.value.title,
      edition: this.form.value.edition,
      authors: this.selectedAuthors
    };
    this.bookService.saveBook(book);
    this.dialogRef.close();
  }

  private loadData() {
    this.titleText = this.data.title;
    this.dataService.getAuthors().subscribe(authors => {
      if (!this.data.isEdit) {
        this.dataSource.data = authors.map((value: Author) => {
          value.isSelected = false;
          return value;
        });
      } else {
        this.dataSource.data = authors.map((value: Author) => {
          const isSelected = this.data.book.authors.indexOf(value.id) > -1;

          const author: Author = {
            ...value,
            isSelected: isSelected
          };
          if (isSelected) {
            this.selectedAuthors.push(author.id);
          }
          return author;
        });
      }
    });
  }

  private buildForm() {
    this.form = this.fb.group({
      title: new FormControl(this.data.book.title),
      edition: new FormControl(new Date(this.data.book.edition))
    });
  }
}
