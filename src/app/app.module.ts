import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchuserComponent } from './Componenets/searchuser/searchuser.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GitserviceService } from './Services/gitservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [GitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
