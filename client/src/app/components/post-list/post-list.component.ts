import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '@services/posts.service';
import { IPost } from '@app/interfaces/IPost';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
	public posts: IPost[];
	private _postsSubscription: Subscription;

	constructor(private _postsService: PostsService) {}

	public ngOnInit(): void {
		this.posts = this._postsService.getPosts();

		this._postsSubscription = this._postsService.getPostUpdatedListener()
			.subscribe((posts: IPost[]) => {
				this.posts = posts;
			});
	}

	public ngOnDestroy(): void {
		this._postsSubscription.unsubscribe();
	}
}
