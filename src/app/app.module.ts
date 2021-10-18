import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SerachBoxComponent } from './serach-box/serach-box.component';
import { UserComponent } from './user/user.component';
import { UserRepoListComponent } from './user-repo-list/user-repo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SerachBoxComponent,
    UserComponent,
    UserRepoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [HttpClient, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
