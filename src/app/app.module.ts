import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GenericComponent } from './generic/generic.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GalleryModule } from './gallery/gallery.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'generic', component: GenericComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    GalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
