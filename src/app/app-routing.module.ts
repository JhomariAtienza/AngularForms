import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './modules/book/pages/book-form/book-form.component'; 
import { BlogFormComponent } from './modules/blog/pages/blog-form/blog-form.component'; 
import { ProfileComponent } from './modules/profile/pages/profile/profile.component';
import { BookListComponent } from './modules/book/pages/book-list/book-list.component';
import { BlogListComponent } from './modules/blog/pages/blog-list/blog-list.component';

const routes: Routes = [
  { path: 'book', component: BookListComponent },
  { path: 'book/form', component: BookFormComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/form', component: BlogFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: '**', redirectTo: '/blog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
