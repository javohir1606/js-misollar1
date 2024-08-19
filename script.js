// let arr = [2, 3, -13, -2];
// const min = () => {
//   let num = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//       num += arr[i]
//     }
//   }
//   return num;
// }

// console.log(min(arr));


// let arr = [
//   { name: "lorem", price: 30},
//   { name: "lorem", price: 50},
//   { name: "lorem", price: 20}
// ]
// let persin = 0;
// for (let i = 0; i < arr.length; i++){
//   persin += arr[i].price;
// }
// console.log(persin);


// Uygi-vazifa
// 1-misol
// const num = (number) => {
//   return number
//     .toString()
//     .split('')
//     .reduce((sum, digit) => sum + parseInt(digit), 0);
// };
// const number = parseInt(prompt("Son kiriting:"));
// const result = num(number);
// console.log(`Raqamlar yig'indisi: ${result}`);


// 2-misol
// const sumAndArray = (...numbers) => {
//   const sum = numbers.reduce((total, num) => total + num, 0);
//   return sum.toString().split('').map(Number);
// };
// const result = sumAndArray(1, 22, 3);
// console.log(result);


// 3-misol
// const isPalindrome = (number) => {
//   const str = number.toString();
//   return str === str.split('').reverse().join('');
// };
// const checkSquarePalindrome = () => {
//   const number = parseInt(prompt("Son kiriting:"));
//   const square = number * number;
//   const result = isPalindrome(square);
//   console.log(`Kiritilgan son: ${number}`);
//   console.log(`Sonning kvadrati: ${square}`);
//   console.log(`Kvadrat palindrome: ${result ? "Ha, palindrome" : "Yo'q, palindrome emas"}`);
// };
// checkSquarePalindrome();


// 4-misol
// const sumOfRandomDigits = (callback) => {
//   const randomNum = Math.floor(Math.random() * 1000);
//   console.log(`Random son: ${randomNum}`);
//   const sum = randomNum
//     .toString()
//     .split('')
//     .reduce((acc, digit) => acc + parseInt(digit), 0);
//   console.log(`Raqamlar yig'indisi: ${sum}`);
//   callback(sum);
// };
// const processSum = (callback) => {
//   callback(sum => {
//     console.log(`Natija: ${sum}`);
//   });
// };
// processSum(sumOfRandomDigits);


// 5-misol
// const isPalindrome = (str) => {
//   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   return cleanedStr === cleanedStr.split('').reverse().join('');
// };
// const checkPalindrome = () => {
//   const input = prompt("So'z kiriting:");
//   if (input === null || input.trim() === "") {
//     alert("Hech qanday so'z kiritilmadi.");
//     return;
//   }
//   const result = isPalindrome(input);
//   alert(`Kiritilgan so'z: "${input}"\nPalindrom: ${result ? "Ha, palindrom" : "Yo'q, palindrom emas"}`);
// };
// checkPalindrome();


// 6-misol
// const obj = { a: 1, b: 22 };
// const sumValues = (object) => {
//   return Object.values(object).reduce((acc, value) => acc + value, 0);
// };
// const sumOfDigits = (number) => {
//   return number
//     .toString()
//     .split('')
//     .reduce((acc, digit) => acc + parseInt(digit), 0);
// };
// const totalSum = sumValues(obj);
// console.log(`Qiymatlarning yig'indisi: ${totalSum}`);
// const finalSum = sumOfDigits(totalSum);
// console.log(`Qiymatlarning yig'indisining raqamlar yig'indisi: ${finalSum}`);


// 7-misol
// const processString = (input) => {
//   const numbers = input.match(/\d+/g).map(Number);
//   const text = input.replace(/\d+/g, '').trim();
//   return {
//     numbers: numbers,
//     text: text
//   };
// };
// const inputString = "1java2script3 5deve6lo4per";
// const result = processString(inputString);
// console.log(result);


// 8-misol
// const isPrime = (num) => {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;
//   for (let i = 3; i <= Math.sqrt(num); i += 2) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(29));
// console.log(isPrime(100)); 
