import { Component,  OnInit } from '@angular/core';
import { Blog } from '../../../shared/interfaces/Blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  savedBlogs: Blog[] =[];
  isListView: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadSavedBlogs();
  }

  loadSavedBlogs(): void {
    const savedBlogsJson = localStorage.getItem('blogs');
    if (savedBlogsJson) {
      this.savedBlogs = JSON.parse(savedBlogsJson);
    }
  }

  onAddClicked(): void {
    this.router.navigate(['/blog/form']);
  }

  onEditClicked(blog: Blog): void {
    this.router.navigate(['/blog/form', { blog: JSON.stringify(blog) }]);
  }

  onDeleteAllClicked(): void {
    localStorage.removeItem('blogs');
    this.savedBlogs = [];
  }
}
