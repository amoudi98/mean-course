import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  imports: [
    MatAccordion,
    MatExpansionModule
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = []
  private postsSub!: Subscription;
  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.posts = this.postsService.posts;
    this.postsSub = this.postsService.getPostUpdateListener()
                     .subscribe((posts: Post[]) => {
                       this.posts = posts;
                     });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
