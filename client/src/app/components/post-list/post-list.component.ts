import { Component } from '@angular/core';
import { PostsService } from '@services/posts.service';
import { IPost } from '@app/interfaces/IPost';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
	public posts: IPost[];

	constructor(private _postsService: PostsService) {
		this.posts = this._postsService.getPosts();
	}
}
