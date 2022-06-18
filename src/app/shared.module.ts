import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [
    InputComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
