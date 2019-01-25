import { Book } from './book';

export interface BookDialogData {
  title: string;
  book?: Book;
  isEdit?: boolean;
}
