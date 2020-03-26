import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from '@components/post-create/post-create.component';
import { FormsModule } from '@base/node_modules/@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@base/node_modules/@angular/material/form-field';
import { MatButtonModule } from '@base/node_modules/@angular/material/button';
import { MatInputModule } from '@base/node_modules/@angular/material/input';
import { MatCardModule } from '@base/node_modules/@angular/material/card';
import { HeaderComponent } from '@components/header/header.component';
import { MatToolbarModule } from '@base/node_modules/@angular/material/toolbar';
import { PostListComponent } from './components/post-list/post-list.component';
import { MatExpansionModule } from '@base/node_modules/@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
