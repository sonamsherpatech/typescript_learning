/*
///////////////////////////////
//////   Challenge - 1 ////////
//////////////////////////////
let fullName = "Sonam Sherpa";
console.log(fullName.toLowerCase());
// fullName = 23
// fullName = false

let value = 35;
value = 34 + 21;
console.log(value);
// value = "Help"
// value = true

let isValue = false;
if(isValue) isValue= false
else isValue = true
console.log(isValue)
// isValue = "true"
// isValue = 1

///////////////////////////////
/////// Challenge - 2 ////////
//////////////////////////////

let orderStatus:'processing' | 'shipped' | 'delivered' = 'processing';

orderStatus = "shipped"
orderStatus = "delivered"
// orderStatus = "cancelled"

let discount : number | string = 20
discount = '20%'
// discount = true

///////////////////////////////
/////// Challenge - 3 ////////
//////////////////////////////

let temperature: number[] = [32, 31, 34];
// temperature.push('thirty-six')

let colors: string[] = ["Red", "White", "Blue"];
// colors.push(00000)

let mixedArray: (number | string)[] = [32, "Red", 33, "Blue"];
// mixedArray.push(true)

///////////////////////////////
/////// Challenge - 4 ////////
//////////////////////////////

const bike: { brand: string; year: number } = { brand: "Zixxer", year: 2017 };
bike.year = '2002'
console.log(bike);

const laptop: {brand: string, year: number} = {brand: 'Acer Aspire 7', year: 2021}
const laptop1: {brand: string, year: number} = {brand: 'Acer Aspire 7'}

console.log(laptop);

const products: {title: string, price ?: number}[] = [{title: 'Atomic Habits', price: 45}, {title: "Ikagai", price : "$80"}]
*/

///////////////////////////////
/////// Challenge - 5 ////////
//////////////////////////////
const names: string[] = ['Sonam','Rohan','Milan','Ujjwol']

function isNameInList(name:string):boolean {
    return names.includes(name)
}

let nameToCheck:string = 'Milan'
if(isNameInList(nameToCheck)) {
    console.log(`${nameToCheck} is in the list.`);
}else {
    console.log(`${nameToCheck} is not in the list`);
    
}
