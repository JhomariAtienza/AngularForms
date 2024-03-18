import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../shared/interfaces/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  savedBooks: Book[] = [];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.bookForm = this.fb.group({
      name: [''],
      authors: this.fb.array([]),
      isbn: ['']
    });
  }

  ngOnInit(): void {
    this.loadSavedBooks();
    this.route.params.subscribe(params => {
      if (params['book']) {
        const book: Book = JSON.parse(params['book']);
        this.populateForm(book);
      }
    });
  }

  populateForm(book: Book): void {
    this.bookForm.patchValue({
      name: book.name,
      isbn: book.isbn
    });
    this.setAuthors(book.authors);
  }

  setAuthors(authors: string[]): void {
    const authorControls = authors.map(author => this.fb.control(author));
    this.bookForm.setControl('authors', this.fb.array(authorControls));
  }

  get authorControls(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  addAuthor(): void {
    this.authorControls.push(this.fb.control(''));
  }

  removeAuthor(index: number): void {
    this.authorControls.removeAt(index);
  }

  saveBook(): void {
    const newBook: Book = this.bookForm.value;
    const books: Book[] = JSON.parse(localStorage.getItem('books') || '[]');
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    this.router.navigate(['/book']);
  }

  loadSavedBooks(): void {
    const savedBooksJson = localStorage.getItem('books');
    if (savedBooksJson) {
      this.savedBooks = JSON.parse(savedBooksJson);
    }
  }
}
