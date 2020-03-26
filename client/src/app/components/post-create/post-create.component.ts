import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '@app/interfaces/post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  enteredTitle: string;
  enteredContent: string;

  @Output()
  handleSavePost = new EventEmitter<Post>();

  onSavePost(): void {
    const newPost: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };

    this.handleSavePost.emit(newPost);

    this.clearFields();
  }

  clearFields(): void {
    this.enteredTitle = '';
    this.enteredContent = '';
  }

}
