



/* 
console.log("type script tutorial");

let awesomeName = "Sonam Sherpa";
awesomeName = "something";
awesomeName = awesomeName.toUpperCase()
console.log(awesomeName)
// awesomeName = 20

let amount  = 20
amount = 12 - 1
// amount = "Pants"

let isAwesome = true
isAwesome = false
// isAwesome = 'Sonam Sherpa'
console.log(amount, isAwesome)

//Union types
let tax:number | string  = 10
tax = 100
tax = "$10"
console.log(tax)
// tax = false

let requestStatus: 'pending' | 'success' | 'error' = 'pending'
requestStatus = 'success'
requestStatus = 'error'
console.log(requestStatus)
// requestStatus = 'random'

//any type
let notSure:any = 4
notSure = "Sonam"
notSure = true

//Practical application of type annotation

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1983") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}
// foundBook= 10
// console.log(foundBook);

console.log(foundBook?.length);

//arrays in ts
let prices: number[] = [100, 75, 42];
// prices.push('df')

let fruit: string[] = ["apple", "orrange"];
// fruit.push(23)

// let randomValues:[] = ['hello']
let emptyValues: number[] = [];

let names = ['Rohan','milan',1,true]

let array : (string | boolean)[] = ['apple',true,'orange',false]

//Object
let car:{brand: string, year: number} = {brand:'toyota',year: 2020}
console.log(car);
car.brand = 'ford'
// car.color = 'blue'

let car1:{brand: string, year: number} = {brand:'audi',year: 2022}
console.log(car1);

let book = {title:'book', cost: 20}
let pen = {title:'pen', cost: 10}
let notebook = {title:'book'}


let items: {readonly title: string, cost?: number}[] = [book,pen,notebook]
// items[0].title = 'new book'

//Function
function sayHi(name:string) {
  console.log("Hi!! " + name.toUpperCase());
  
}
sayHi("Sonam")
// sayHi(34)
// -any --> avoid
// -config --> can be used
// -type --> best

function calculateDiscount(price:number) {
  const hasDiscount = true

  if(hasDiscount) {
    return 'Discount Applied'
  }
  return price * 0.9
}
const finalPrice = calculateDiscount(200)

//any type
function addThree(number:any) {
  let anotherNumber:number = 3;
  return number  + anotherNumber
}

const result = addThree(3)
const someValue = result

someValue.myMethod()

*/
