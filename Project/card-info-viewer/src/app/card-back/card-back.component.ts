import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-back',
  imports: [],
  templateUrl: './card-back.component.html',
  styleUrl: './card-back.component.css'
})
export class CardBackComponent {
  cvc = input<string>();
}
