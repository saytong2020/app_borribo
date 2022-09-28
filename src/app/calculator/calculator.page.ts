import { PickerController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  rateValue = '';
  public cant = '';
  constructor(
    private formBuilder: FormBuilder,
    private pickerCtrl: PickerController
  ) {}

  calculatorFrom: any;
  calculatChanged = true;
  interest:any='';
  total:any='';
  ngOnInit() {
    this.calculatorFrom = this.formBuilder.group({
      loanAmount: ['', [Validators.required, Validators.maxLength(10)]],
      loanTerm: ['', Validators.required],
      loanRate: ['', Validators.required],
    });
  }

  LoanCalcu() {
this.interest = (this.calculatorFrom.get('loanAmount').value * this.calculatorFrom.get('loanTerm').value * (this.calculatorFrom.get('loanRate').value / 100));
this.total = (this.calculatorFrom.get('loanAmount').value + this.interest);
console.log(this.interest);
console.log('Total Income:'+this.total)
  }

  segmentCalculator(ev: any) {
    if (ev.detail.value == 'khr') {
      this.calculatChanged = true;

      this.calculatorFrom.reset();
      console.log(true);
      return true;
    } else {
      this.calculatChanged = false;
      this.calculatorFrom.reset();
      console.log(false);
      return false;
    }
  }

  // async openPickerRate() {
  //   const picker = await this.pickerCtrl.create({
  //     columns: [
  //       {
  //         name: 'rate',
  //         options: [
  //           {
  //             text: '10%',
  //             value: 10,
  //           },
  //           {
  //             text: '20%',
  //             value: 20,
  //           },
  //           {
  //             text: '30%',
  //             value: 30,
  //           },
  //           {
  //             text: '40%',
  //             value: 40,
  //           },
  //         ],
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //       },
  //       {
  //         text: 'Confirm',
  //         handler: (value) => {
  //           this.rateValue = value.rate.value;
  //         },
  //       },
  //     ],
  //   });

  //   await picker.present();
  // }
}
