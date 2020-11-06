import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryDetailComponent } from './gallery-detail.component';
import { GalleryComponent } from './gallery.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'gallery', component: GalleryComponent },
      { path: 'gallery/:id', component: GalleryDetailComponent }
    ]),
  ]
})
export class GalleryModule { }
