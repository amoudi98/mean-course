import {Post} from './post.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  private _posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  get posts(): Post[] {
    return [...this._posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  addPost(post: Post) {
    this._posts.push(post);
    this.postsUpdated.next(this.posts);
  }

}
