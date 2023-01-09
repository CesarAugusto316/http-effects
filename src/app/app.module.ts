import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// feature modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
// import { ObjectoArrayPipe } from './pipes/objecto-array.pipe';


@NgModule({
  declarations: [
    AppComponent,
    // ObjectoArrayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // feature modules
    AppRoutingModule,
    SharedModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
