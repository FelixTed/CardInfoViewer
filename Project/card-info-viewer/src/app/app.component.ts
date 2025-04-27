import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardInputFormComponent } from './card-input-form/card-input-form.component';

@Component({
  selector: 'app-root',
  imports: [CardInputFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
