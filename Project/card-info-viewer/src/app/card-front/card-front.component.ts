import { Component, input, Signal, computed } from '@angular/core';

@Component({
  selector: 'app-card-front',
  imports: [],
  templateUrl: './card-front.component.html',
  styleUrl: './card-front.component.css'
})
export class CardFrontComponent {
  cardNumber = input<string>()
  expirationMonth = input<string>()
  expirationYear = input<string>()
  name = input<string>()

  formattedCardNumber: Signal<string>;

  constructor() {
    // Automatically update `formattedCardNumber` when `cardNumber` changes
    this.formattedCardNumber = computed(() => {
      const card = this.cardNumber();
      const groups = card?.match(/.{1,4}/g);
      return groups ? groups.join(' ') : '';
    });
  }
}
