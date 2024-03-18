import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../../shared/interfaces/Blog';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  savedBlogs: Blog[] = [];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.blogForm = this.fb.group({
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadSavedBlogs();
    this.route.params.subscribe(params => {
      if (params['blog']) {
        const blog: Blog = JSON.parse(params['blog']);
        this.populateForm(blog);
      }
    });
  }

  populateForm(blog: Blog): void {
    this.blogForm.patchValue({
      title: blog.title,
      description: blog.description,
      author: blog.author
    });
    this.setComments(blog.comments);
  }

  setComments(comments: string[]): void {
    const commentControls = comments.map(comment => this.fb.control(comment));
    this.blogForm.setControl('comments', this.fb.array(commentControls));
  }

  get commentControls(): FormArray {
    return this.blogForm.get('comments') as FormArray;
  }

  addComment(): void {
    this.commentControls.push(this.fb.control(''));
  }

  removeComment(index: number): void {
    this.commentControls.removeAt(index);
  }

  saveBlog(): void {
    const newBlog: Blog = this.blogForm.value;
    const blogs: Blog[] = JSON.parse(localStorage.getItem('blogs') || '[]');
    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    this.router.navigate(['/blog']);
  }

  loadSavedBlogs(): void {
    const savedBlogsJson = localStorage.getItem('blogs');
    if (savedBlogsJson) {
      this.savedBlogs = JSON.parse(savedBlogsJson);
    }
  }
}
