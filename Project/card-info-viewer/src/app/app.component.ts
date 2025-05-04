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
  cvc:string = ''
  name:string = ''
  cardNumber:string = ''
  expirationYear:string = ''
  expirationMonth:string = ''

  
  handleCVCOutput(cvc:string){
    this.cvc = cvc;
  }

  handleNameOutput(name:string){
    this.name = name.toUpperCase()
  }

  handleCardNumberOutput(cardNumber:string){
    this.cardNumber = cardNumber
  }

  handleDateYearOutput(expirationDate:number){
    this.expirationYear = String(expirationDate)
  }

  handleDateMonthOutput(expirationDate:number){
    this.expirationMonth = String(expirationDate)
  }

}
