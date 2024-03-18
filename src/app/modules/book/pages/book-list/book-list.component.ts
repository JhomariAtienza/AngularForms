import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../shared/interfaces/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  savedBooks: Book[] = [];
  isListView: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadSavedBooks();
  }

  loadSavedBooks(): void {
    const savedBooksJson = localStorage.getItem('books');
    if (savedBooksJson) {
      this.savedBooks = JSON.parse(savedBooksJson);
    }
  }

  onAddClicked(): void {
    this.router.navigate(['/book/form']);
  }

  onEditClicked(book: Book): void {
    this.router.navigate(['/book/form', { book: JSON.stringify(book) }]);
  }

  onDeleteAllClicked(): void {
    localStorage.removeItem('books');
    this.savedBooks = [];
  }
}
