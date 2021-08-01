import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
]

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
