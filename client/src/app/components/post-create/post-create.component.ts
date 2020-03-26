import { Component } from '@angular/core';
import { Post } from '@app/interfaces/post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  enteredTitle: string;
  enteredContent: string;


  onSavePost(): void {
    const newPost: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
  }

}
