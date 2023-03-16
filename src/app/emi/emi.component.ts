import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
public p:number = 30000;
public n:number = 12;
public r:number = 10.0;
public emi:number = 0;
public totalinterest:number = 0;
public totalpayment:number = 0;
public payments: any[] = [];

public amountchange(e:any){
 this.p=e.target.value;
}
public monthchange(e:any){
  this.n= e.target.value;
}
public ratechange(e:any){
  this.r= e.target.value;
}
calculate(){
  this.r = this.r / (12 * 100);
  this.emi = this.p * this.r * Math.pow(1 + this.r, this.n) / (Math.pow(1 + this.r, this.n) - 1);
  this.totalinterest = this.emi * this.n - this.p;
  this.totalpayment = this.emi * this.n;
 
   this.generatePayments(this.emi, this.r);
      return (this.emi);
}
generatePayments(emi: number, rate: number): any {
  let balance = this.p;
  this.payments = [];

  for (let i = 1; i <= this.n; i++) {
    let interest = (balance * rate);
    let principal = (emi - interest);
    let endingBalance = (balance - principal);

    this.payments.push({
      id: i,
      beginningBalance: balance,
      emi: emi,
      principal: principal,
      interest: interest,
      endingBalance: endingBalance
    });

    balance = endingBalance;
  }
}
// emiarray = [
//   { month: this.n, principal:this.p, interest: this.r, balance: 9000 },

  
// ];


}