import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {MatError, MatFormField, MatInput} from '@angular/material/input';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-create',
  imports: [
    FormsModule,
    MatInput,
    MatCard,
    MatFormField,
    MatButton,
    MatCardContent,
    MatError
  ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {

  newPost!: Post;
  postInput: string = '';
  postTitle: string = '';


  constructor(private postsService: PostsService) {
  }

  onAddPost(postForm: NgForm) {
    if (postForm.invalid) return;
    this.newPost = {
      title: postForm.value.postTitle,
      content: postForm.value.postInput
    };
    this.postsService.addPost(this.newPost);
  }
}
