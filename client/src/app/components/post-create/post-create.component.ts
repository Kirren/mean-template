import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  newPost: string = '';
  enteredValue: string = '';

  showPreview: boolean = false;

  onSavePost(): void {
    this.newPost = this.enteredValue;
    this.showPreview = true;
  }

}
