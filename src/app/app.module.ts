import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button'; 
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    DropdownModule,
    BrowserAnimationsModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
