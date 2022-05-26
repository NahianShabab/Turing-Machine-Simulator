import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { TuringComponent } from './turing/turing.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    TuringComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
