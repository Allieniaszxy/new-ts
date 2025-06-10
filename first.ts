//we declare variable using annotation and inference in typescript
//annotation can come direct either inference which is implicit  or direct which is explicit or annotation

//annotation
let nam: string = "ife";
let a: number = 65;

//inference
let secname = "jackson";
let b = 76;

function calcInterestRate(principal: number, rate: number, time: number) {
  let simpleInterest = (principal * rate * time) / 100;
}
calcInterestRate(1500, 20, 15);
