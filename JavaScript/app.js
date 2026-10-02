// This is comment.
// Simple Method :
// let pencilePrice = 10 ;
// let erasorPrice = 5 ;
// console.log("The total price is : ", pencilePrice+erasorPrice,"Rupees.") ;
// M1
// let output = "The total price is : "+ (pencilePrice+erasorPrice) + " Rupees."
// console.log(output);
// M2
// let output = `The total price is : ${pencilePrice + erasorPrice} Rupees.`;
// console.log(output);
// M3
// console.log(`The total price is : ${pencilePrice + erasorPrice} Rupees.`);

// Arithemetic Operators
// let a = 10;
// let b = 5 ;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++); // 10
// console.log(++a); // 12

// Commparision Operators
// console.log("Comparision Operators")
// let age = 18 ;
// console.log(age>18);
// console.log(age>=18);
// console.log(age<18);
// console.log(age<=18);
// console.log(age == 18);
// console.log(age != 18);
// // JavaScript let us compare without considering type of data
// // e.g :
// let n = 5 ;
// let str = '5';
// console.log(n == str); // true
// console.log(0 == ' '); // true
// console.log(0 == false); // true
// console.log(null == undefined); // true
// // But if we want to also consider the type of data then we use ===
// // e.g ;
// console.log(n === str); // false
// console.log(0 === ' '); // false
// console.log(0 === false); // false
// console.log(null === undefined); // false

// Comparision for Non-numbers
// JavaScript have unicode for different non-numbers while follows general tred like 'a' < 'b' < ... and 'A' < 'B' < ....
// But 'a' > 'A' in unicode... Since 'a' = 61 'b' = 62 ... and 'A' = 41 , 'B' = 42 ....
// console.log("Comparision for Non-numbers");
// console.log('a'>'A');
// console.log('*' > '&');

// Conditional Statement
// console.log("before my if statement");
// let age = 14 ;
// if(age > 18){
//     console.log("You can vote");
//     console.log("You can drive");
// }
// console.log("after my if statement");

// Practice Question
// let color = 'green' ;
// // Traffic light system
// if(color === 'red'){
//     console.log('Stop');
// }
// if(color === 'yellow'){
//     console.log('Slow Down');
// }
// if(color === 'green') {
//     console.log('Go');
// }

// Practice Question
// let size = 'S';
// if(size === 'XL'){
//     console.log('Price is Rs. 250');
// } else if(size === 'L'){
//     console.log("Price is Rs. 200");
// } else if(size === 'M'){
//     console.log("Price is Rs. 100");
// } else {
//     console.log("Price is Rs. 50");
// }

// Practice Question
// let day = 45 ;
// switch(day) {
//     case 1 :
//         console.log("Monday");
//         break;
//     case 2 :
//         console.log("Tuesday");
//         break;
//     case 3 :
//         console.log("Wednesday");
//         break;
//     case 4 :
//         console.log("Thursday");
//         break;
//     case 5 :
//         console.log("Friday");
//         break;
//     case 6 :
//         console.log("Saturday");
//         break;
//     case 7 :
//         console.log("Sunday");
//         break;
//     default :
//     console.log("Wrong Input");
// }

// alert("Something is wrong"); // This will pop up an alert message on the screen
// console.error("This is an error message");
// console.warn("This is a warning message");
// let firstName = prompt("Enter your name: "); // Takes input from the user at the time of loading the screen
// console.log(firstName);

// String Methods:
// let msg = "    Hello    ";
// let Password = prompt("Set Your Password");
// console.log(Password.trim());

// let msg = "ILoveCoding";
// console.log(msg.indexOf("Love"));
// console.log(msg.indexOf("o"));

// let msg = "Hello";
// console.log(msg.slice(0,4)); // Hell
// console.log(msg.slice(1)); // ello

// let str = "apnacollege";
// console.log(str.slice(-3));
// console.log(str.slice(-2));

// Method chaining
// let msg = "    hello  ";
// console.log(msg.trim().toUpperCase());

// Replace function : Only first expresssion is being replaced.
// let str = "ILoveCoding";
// let msg = str.replace("Love","do") ;
// console.log(msg); // "IdoCoding"
// let msg1 = str.replace("o","i")
// console.log(msg1) ; // "ILiveCoding"

// // Repeat Function :
// let str = "Mango " ;
// console.log(str.repeat(5));

// Practice Question:
// let msg = "help!" ;
// let newmsg = msg.trim().toUpperCase();
// console.log(newmsg);

// let name = "ApnaCollege" ;
// console.log(name.slice(4,9)); // Colleg
// console.log(name.indexOf("na")); // 2
// console.log(name.replace("Apna","Our")); // "OurCollege"

// let student1 = "harsh" ;
// let student2 ="Janvi" ;
// let sudent3 = "Manav" ;
// // Array Methods
// let students = ["harsh","Janvi","Manav"]  ;
// let info = ['Harsh',21,'B.Tech','CSE'] ; // Multiple dataType
// let empArr = [] ;
// let len = info.length ;
// console.log(len) ;
// let len1 = info[0].length ;
// console.log(len1) ;

// Arrays are mutable so it's not like string which always create new string when a operation is done. So it changes
// the original value of the variable.
// let name = "rohit" ;
// name[0] = "m" ;
// console.log(name) ;

// let fruits = ['mango','apple','litchi'] ;
// fruits[0] = "banana" ;
// console.log(fruits) ;

// Practice question :
// let arr = ['january','july','march','august'] ;
// arr.shift() ;
// arr.shift() ;
// arr.unshift("june") ;
// arr.unshift("july") ;
// console.log(arr) ;

// let colors = ['red','yellow','blue','ornage','pink','white'];
// colors.splice(4) ; // {2} ['pink','white']
// console.log(colors) ;

// Practice question :
// let arr = ['january','july','march','august'] ;
// arr.splice(0,2,"july","june") ;
// console.log(arr);

// Practice question :
// let tic_tac_toe = [["X",null,"O"],[null,"X",null],["O",null,"X"]] ;
// console.log(tic_tac_toe) ;

// Assignment question - 18 :
// let arr = [7,9,0,-2] ;
// let n = 3 ;
// let firstElements = arr.splice(0,n) ;
// console.log(firstElements)

// let lastElements = arr.splice(-n) ;
// console.log(lastElements) ;

// let string = "ApnaCollge" ;
// if(string[1].toUpperCase() < string[1]){ // value of big alphabet is always smaller to the small alphabet in JS
// console.log("Is lower case") ;
// } else {
// console.log("Is upper case") ; // Is lower case
// }

// For loop :

// for(let i = 1 ; i<=15 ; i+=2) {
//     console.log(i) ;
// }
// for(let i = 2 ; i<=10 ; i+=2){
//     console.log(i);
// }
// for(let i = 5 ; i<= 50 ; i+=5) {
//     console.log(i) ;
// }
// let n = prompt("write your number") ;
// n = parseInt(n) ;
// for(let i=n ; i<=n*10  ; i+=n) {
//     console.log(i) ;
// }
// let favAnime = "One Piece" ;
// let userInput = prompt("Guess my favorite anime : ") ;
// while((favAnime != userInput) && (userInput != "quit")) {
//     userInput = prompt("Again! guess my favorite anime : ");
// }
// if(favAnime == userInput) {
//     console.log("Congratulations! You guessed right") ;
// }

// Assignment question :
// let arr = [1,2,3,4,5,6,2,3] ;
// let num = 2  ;
// for(let i=0 ; i<arr.length ; i++){
//     if(arr[i] == num){
//         arr.splice(i,1) ;
//     }
// }
// console.log(arr)

// let num = prompt("Enter the number :");
// num = parseInt(num)  ;
// let count = 0 ;
// while(num>0){
//     num = Math.floor(num/10) ;
//     count = count + 1 ;
// }
// console.log(count);

// let num = parseInt(prompt("Enter the number :"));
// let sum = 0 ;
// while(num>0){
//     sum = sum + num%10 ;
//     num = Math.floor(num/10) ;
// }
// console.log(sum) ;

// let num = parseInt(prompt("Enter the number :"));
// let fact = 1 ;
// while(num>0){
//     fact = fact * num ;
//     num -- ;
// }
// console.log(fact) ;

// let nums = [3,5,6,2,3,6,8,6,11,14,9,13,15,19,21] ;
// let largest = nums[0] ;
// for(let i=1 ; i<nums.length ; i++){
//     if(nums[i] > largest){
//         largest = nums[i];
//     }
// }
// console.log(largest);

// const student = {
// name: "Harsh",
// age: 21 ,
// marks: 99,
// city:"Gujarat"
// };
// student.city = "Bihar" ;
// student["age"] = 20 ;
// student.gender = "male" ;

// // Nested Object :
// const classInfo = {
//     harsh: {
//         grade: "A+",
//         city: "bihar"
//     },
//     raghav: {
//         grade: "A++",
//         city: "Vyara"

//     },
//     meet: {
//         grade: "A+++",
//         city: "rajasthan"
//     }

// };

// const classInfo = [
//     {
//         name: "harsh",
//         grade: "A"
//     },
//     {
//         name: "raghav",
//         grade: "A++"
//     },
//     {
//         name: "meet",
//         grade: "A+"
//     }
// ];

// Genearating Random number from 1 to 10
// let num = Math.random() ;
// num = num * 10 ;
// num = Math.floor(num) ;
// num = num + 1 ; // To generate 10 since random() only gives numbes from 0 to 1(exclusive)
// alert(num);

// OR
// let num = Math.floor(Math.random()*10) + 1 ;

// Practice question :
// let n = Math.floor(Math.random()*100) + 1 ;
// alert(n) ;

// let n = Math.floor(Math.random()*5)+1 ;  // For 1 to 5
// let n = Math.floor(Math.random()*5)+1 + 20 ;  // For 21 to 25

// Practice Questions :
// let dice = Math.floor(Math.random()*6) + 1 ;
// console.log("Dice value: "+dice);

// let car = {
//     name: "BMW",
//     model: "Z1",
//     color: "White"
// };
// console.log(car.name);

// let person = {
//     name: "Harsh",
//     age: 21 ,
//     city: "Bardoli"
// };
// person.city = "New York";
// person.country = "US";

// function hello(){ // function defination
//     console.log("Hello");
// };
// hello(); // function calling

// Practice Question :
// let str = ["hi","hello","bye","!"];
// function concat(str){
//     let newStr = ""
//     for(let i=0 ; i<str.length ; i++){
//         newStr += str[i] ;
//     }
//     return newStr ;
// };
// console.log(concat(str));

//Function Expression
// function multiGreet(func,n){
//     for(let i = 1 ; i<=n ; i++){
//     func();
//     }
// }
// // function greet(){
// //     console.log("Hello");
// // }
// let greet = function(){
//     console.log("Hello");
// }
// multiGreet(greet,3);

// let odd = function(n){
//     console.log(!(n%2==0));
// }
// let even = function(n){
//     console.log(n%2 == 0);
// }

// // Function making :
// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     } else if(request == "even"){
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     }
//     else {
//         console.log("wrong request");
//     }
// }

// let request = "odd";

// let func = oddOrEvenFactory(request);

// func(5);

// Methods :
// const calculator = {
//     add: function(a,b){
//         return a + b ;
//     },
//     sub: function(a,b){
//         return a - b ;
//     },
//     mul: function(a,b){
//         return a * b;
//     },
//     div: function(a,b){
//         return a/b ;
//     }
// }
// calculator.add(1,3); // 4

// Assignment Question JS(part 6) :
// let n = 10 ;
// let arr = [2,4,6,8,5,9,7,8,11,14];
// function filter(arr,n){
//     let newArr = [];
//     for(let i=0 ; i<arr.length ; i++){
//         if(arr[i]>n){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr ;
// }

// let str = "abcdabcdefgggh";
// function uniqueStr(str){
//     let newStr = "";
//     for(let i=0 ; i<str.length ; i++){
//         if(!(newStr.includes(str[i]))){ // --------------
//             newStr += str[i];
//         }
//     }
//     return newStr ;
// }

// console.log("Enter 'quit' to stop");
// let countryName = prompt("Enter a country name");
// let country = [];
// while(true){
//     if(countryName == "quit"){
//         console.log("Country name saved successfully!") ;
//         break ;
//     } else {
//         country.push(countryName) ;
//         countryName = prompt("Enter other countries name");
//     }
// };
// function longestCountryName(country){
//     let longest = country[0] ;
//     for(let i=1 ; i<country.length ; i++){
//         if(country[i].length > longest.length){
//             longest = country[i];
//         }
//     }
//     return longest ;
// };

// let str = "akfhiwvnuaelwisdpwertu"
// function Vowel(str){
//     let count = 0 ;
//     let vowels = "aeiou" ;
//     for(let i=0 ; i<str.length ; i++){
//         if(vowels.includes(str[i])){
//             count ++ ;
//         }
//     }
//     return count ;
// }

// let start = 5
// let end = 10
// let random = Math.floor(Math.random()*end)+1;
// while(random < start){
//     random = Math.floor(Math.random()*end)+1;
// }
// console.log(random);
// ------------------------------- OR -----------------------------------
// let start = 100 ;
// let end = 200 ;
// function generateRandom(start , end){
//     // let diff = end - start ; // This will give end exclusive
//     // ------------- OR -------------
//     let diff = end - start + 1 ; // This will include end as well
//     return Math.floor(Math.random()*diff) + start ;
// }
// console.log(generateRandom(start,end))

// const student ={
//     name: "Harsh",
//     age: 21 ,
//     eng:95,
//     math:94,
//     phy:99,
//     getAvg(){
//         console.log(this);
//         let Avg = (this.eng + this.math + this.phy)/3 ;
//         console.log(Avg);
//     }
// }

// console.log("hello");
// try {
//     console.log(a);
// } catch(e) {
//     console.log("Caught an error ... a is not defined");
//     console.log(e);
// }
// console.log("hello");

// const sum = (a,b) => {
// console.log(a+b)
// }
// const cube = n => {
//     console.log(n*n*n);
// }
// const hello = () => {
//     console.log("Hello World!");
// }

// console.log("Hii there!");
// setTimeout(() => {
//   console.log("Apna College");
// }, 4000);
// console.log("Welcome to");

// let id1 = setInterval(() => {
//   console.log("Apna college");
// }, 1000);

// console.log(id1);
// let id2 = setInterval(() => {
//   console.log("Hii There!");
// }, 2000);

// console.log(id2);
// // To stop the interval we use : clearInterval(id);

// const student = {
//   name: "Harsh",
//   prop: this, 
//   marks: 99,
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this); // Parent's scope means Student object -> parent -> Window so scope is Window
//     return this.marks;
//   },
//   getInfo1: function() {
//     setTimeout( () => {
//       console.log(this) // Student object because Arrow function this referece to the parent scope so here 
//       // setTimeout() is called inside the student object so the parent object is student .
//     },2000)
//   },
//   getInfo2: function() {
//     setTimeout(function() {
//       console.log(this) // Window Object because normal function only see which function is calling me 
//       // here setTimeout() is the function calling this so The object which contain setTimeout() will be 
//       // pointed by this keyword.
//     },2000)
//   },
// };

// Practice Question : 
// const square = n => (n*n);

// // Running a function for set Interal of time 
// function print() {
//   let count = 0 ;
//   let id = setInterval( function(){
//     console.log("Hello World")
//     count ++ ; 
//   },2000)

//   setTimeout(() => {
//     clearTimeout(id);
//     console.log("Clear print");
//   },10000)
// }


