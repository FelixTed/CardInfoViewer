import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardInputFormComponent } from './card-input-form/card-input-form.component';
import { CardFrontComponent } from "./card-front/card-front.component";
import { CardBackComponent } from "./card-back/card-back.component";

@Component({
  selector: 'app-root',
  imports: [CardInputFormComponent, CardFrontComponent, CardBackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
