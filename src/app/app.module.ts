import { FormComponent } from './Componenets/form/form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchUserComponent } from './Componenets/searchuser/searchuser.component';
import { GitserviceService } from './Services/gitservice.service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    FormComponent,
    NavbarComponent
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