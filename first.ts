//we declare variable using annotation and inference in typescript
//annotation can come direct either inference which is implicit  or direct which is explicit or annotation

//annotation
let nam: string = "ife";
let a: number = 65;

//inference
let secname = "jackson";
let b = 76;

function calcInterestRate(principal: number, rate: number, time: number) {
  return (principal * rate * time) / 100;
}
calcInterestRate(1500, 20, 15);

//sting, number or any key word
//u can only use prompt by specifying the variable to be string | null

function fourPara(a: number, b: number, c: number, d: number): number {
  return Math.max(a, b, c, d);
}
fourPara(5, 6, 7, 8);

let studentInfo: { name: string } = {
  name: "ife",
};
// ? means a variable can be optional
let studentInfo2: { name: string; course?: string } = {
  name: "ife",
  course: "agric",
};

//interface in typescript
//it is reusable

interface Person {
  name: string;
  age: number;
  greet(): string;
}
let person: Person = {
  name: "ife",
  age: 45,
  greet: () => "hello!",
};
