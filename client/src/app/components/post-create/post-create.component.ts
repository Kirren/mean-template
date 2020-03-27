import { Component, EventEmitter, Output } from '@angular/core';
import { IPost } from '@app/interfaces/IPost';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
	public postForm: FormGroup;

	@Output()
	public handleSavePost = new EventEmitter<IPost>();

	constructor() {
		this.postForm = new FormGroup({
			title: new FormControl(''),
			content: new FormControl(''),
		});
	}

	public onSavePost(): void {
		const newPost: IPost = {
			title: this.postForm.value.title,
			content: this.postForm.value.content
		};

		this.handleSavePost.emit(newPost);

		this.postForm.reset();
	}
}
