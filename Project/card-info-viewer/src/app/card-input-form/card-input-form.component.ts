import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardData } from '../card-data.model';

@Component({
  selector: 'app-card-input-form',
  imports: [FormsModule],
  templateUrl: './card-input-form.component.html',
  styleUrl: './card-input-form.component.css'
})
export class CardInputFormComponent {
  name = ''
  cardNumber = ''
  displayNumber = ''
  expirationMonth = ''
  expirationYear = ''
  cvc = ''

  validName = false
  validCardNumber = false
  validExpirationMonth = false
  validExpirationYear = false
  validCVC = false

  @Output() nameOutput = new EventEmitter<string>()
  @Output() cardNumberOutput = new EventEmitter<string>()
  @Output() expirationMonthOutput = new EventEmitter<number>()
  @Output() expirationYearOutput = new EventEmitter<number>()
  @Output() cvcOutput = new EventEmitter<string>()

  @Output() validForm = new EventEmitter<boolean>();
  
  
  onFormSubmit(){

    this.validForm.emit(true)

  }

  validateName(){
    if(/^[a-z ,.'-]+$/i.test(this.name)){
      this.validName = true;
      this.nameOutput.emit(this.name);
    }else{
      this.validName = false
    }
  }

  validateCardNumber(){

    // remove spaces from input values
    this.cardNumber = this.displayNumber.replace(/\s+/g, '');
    
    // Format for display: add space every 4 chars
    const groups = this.cardNumber.match(/.{1,4}/g);
    this.displayNumber = groups ? groups.join(' ') : '';

    if(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/i.test(this.cardNumber)  ){
      this.validCardNumber = true;
      this.cardNumberOutput.emit(this.cardNumber)
    }else{
      this.validCardNumber = false;
    }
  }

  validateExpirationMonth(){
    console.log("c")
    this.expirationMonth = this.expirationMonth.replace(/\D/g, '');

    if(String(this.expirationMonth)?.length === 2){
      this.validExpirationMonth = true
      this.expirationMonthOutput.emit(Number(this.expirationMonth))
    }
    else{
      this.validExpirationMonth = false
    }
  }

  validateExpirationYear(){
    if(String(this.expirationYear)?.length === 2){
      this.validExpirationYear = true;
      this.expirationYearOutput.emit(Number(this.expirationYear))
    }else{
      this.validExpirationYear = false;
    }
  }

  validateCVC(){
    if(String(this.cvc)?.length === 3){
      this.validCVC = true;
      this.cvcOutput.emit(this.cvc)
    }else{
      this.validCVC = false
    }
  }

}
