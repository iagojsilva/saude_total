import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultasModule } from './components/consultas/consultas.module';
import {MatNativeDateModule} from '@angular/material/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConsultasModule,
    MatNativeDateModule,
    RouterModule
  ],
  providers: [MatNativeDateModule],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
