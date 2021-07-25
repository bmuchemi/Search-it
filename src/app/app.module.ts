import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchUserComponent } from './Componenets/searchuser/searchuser.component';
import { GitserviceService } from './Services/gitservice.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }