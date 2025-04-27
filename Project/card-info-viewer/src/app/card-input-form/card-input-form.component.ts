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
  @Output() cvcOutput = new EventEmitter<number>()

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

  }

  validateExpirationMonth(){

  }

  validateExpirationYear(){

  }

  validateCVC(){

  }

}
