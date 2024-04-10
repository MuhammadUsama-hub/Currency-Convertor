import inquirer from "inquirer";
const exchangeRates:{[x:string]:number} = {
  "USD": 1, // base currency
  "PKR": 280,
  "EUR": 0.91,
  "GBP": 0.76,
  "INR": 74.57,
};
const answers = await inquirer.prompt([
  {
    message: "Select Currency From :",
    type: "list",
    name: "currencyFrom",
    choices: ["USD", "GBP", "EUR", "INR", "PKR"],
  },
  {
    message: "Select Currency to :",
    type: "list",
    name: "currencyTo",
    choices: ["USD", "GBP", "EUR", "INR", "PKR"],
  },
  {
    message: "Amount :",
    type: "number",
    name: "amount",
  },
]);
// conversion Calculaton
let convertedAmount = function (from:string,to:string,amount:number){
    // console.log(from,' ',to)
    let fromCurrencyRate : number = exchangeRates[from] //get exchange rates
    let toCurrencyRates : number = exchangeRates[to] //get exchange rates
    // console.log(fromCurrencyRate ,' ' , toCurrencyRates)
    let amountTobase : number = amount / fromCurrencyRate //amount convert to base amount
    let result : number = amountTobase * toCurrencyRates
    return result
} 
console.log(`${Math.floor(convertedAmount(answers.currencyFrom,answers.currencyTo,answers.amount))} ${answers.currencyTo}`)
