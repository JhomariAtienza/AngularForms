import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './modules/book/pages/book-form/book-form.component'; 
import { BookListComponent } from './modules/book/pages/book-list/book-list.component';
import { BlogFormComponent } from './modules/blog/pages/blog-form/blog-form.component';
import { BlogListComponent } from './modules/blog/pages/blog-list/blog-list.component';
import { ProfileComponent } from './modules/profile/pages/profile/profile.component';
import { CommandBarComponent } from './modules/shared/command-bar/command-bar.component';
import { HeaderComponent } from './modules/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookListComponent,
    BlogFormComponent,
    BlogListComponent,
    ProfileComponent,
    CommandBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
