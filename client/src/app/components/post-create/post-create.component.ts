import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '@app/interfaces/post';

@Component({
	selector: 'app-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
	public enteredTitle: string;
	public enteredContent: string;

	@Output()
	public handleSavePost = new EventEmitter<Post>();

	public onSavePost(): void {
		const newPost: Post = {
			title: this.enteredTitle,
			content: this.enteredContent
		};

		this.handleSavePost.emit(newPost);

		this.clearFields();
	}

	public clearFields(): void {
		this.enteredTitle = '';
		this.enteredContent = '';
	}

}
