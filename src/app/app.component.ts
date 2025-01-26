import { Component } from '@angular/core';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import {HeaderComponent} from './posts/header/header.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {Post} from './posts/post.model';

@Component({
  selector: 'app-root',
  imports: [PostCreateComponent, HeaderComponent, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mean-course';
  posts: Post[] = [];

  onPostAdded(post: Post){
    this.posts.push(post);
  }
}
