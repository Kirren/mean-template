import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPost } from '@app/interfaces/IPost';
import { PostsService } from '@services/posts.service';

@Component({
	selector: 'app-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
	public postForm: FormGroup;

	constructor(private _postsService: PostsService) {
		this.postForm = new FormGroup({
			title: new FormControl(''),
			content: new FormControl('')
		});
	}

	public onSavePost(): void {
		const newPost: IPost = {
			title: this.postForm.value.title,
			content: this.postForm.value.content
		};

		this._postsService.addPost(newPost);

		this.postForm.reset();
	}
}
