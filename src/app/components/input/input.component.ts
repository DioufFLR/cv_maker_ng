import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {IonInput} from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() label = '';
  @ContentChild(IonInput) input: IonInput;

  constructor() { }

  ngOnInit() {}

}
