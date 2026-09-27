1. Basics :
  1. Console 
    Uses REPL(Read-Evaluate-Print-Loop)

    To clear the console use Clt + l (in windows) and Clt + k (in mac)
  2. NaN in JS
    NaN (Not a valid number) is kind of invalid nuber like 0/0     

  3. Value of const can't be changed and we only declare variable only one time then we can use it.
    and var keyword is used in Old syntax but now we use let .   

  4. We can actually change the data type conversion just by storing different data type.

  5. Undefined :
    A variable whose value is not assigned. You can say by default value for absence of value ---> e.g: let name ; 
     null :
    When we intentionally don't assign value to any object. ---> e.g: let name = null ;

  6. String + Number = String ---> e.g "apnacollege"+123 = "apnacollege123"

  7. console.log(); can we used to write multiple messages at a time.
  e.g console.log("Hello","World",num,(1+5));
  Output: Hello World 123 6

  10. let n = prompt("write your number") ;
      n = parseInt(n) ; 
      for(let i=n ; i<=n*10  ; i+=n) {
          console.log(i) ; 
      } 
      Here we used parseInt(n) to convert the string value of n into  integer. since prompt always take input in string.

  11. num = Math.floor(num/10) ;
      this is used to convert the floor value into integer: 12.4 -> 12 


2. String:
  1. variable_name.length -----> Gives length of string

  2. string_name.trim() ------> Trims whitespaces from both ends of string & returns a new one
  Note: Don't assume that the original value of string is changed it remains unchanged. trim() method create new string.

  3. String are IMMUTABLE in JS

  4. string_name.toUpperCase() ------> Convert all character to upper case.

  5. string_name.toLowerCase() ------> convert all character to lower case.

  6. string_name.indexOf("value") -----> Gives first index of occurrence of the value 
  and return -1 if not found.

  7. string_name.slice(Start , end) - end is non-inclusive e.g (1,5) means you get 1-4 only
  OR string_name.slice(Start) - default end = string.length
  OR string_name.slice(-num) = string_name.slice(str.length - num)  
  let msg = "apnacollege" ; 
  e.g msg.slice(-3) // msg.slice(11-3) = msg.slice(8) = ege  

  8. string_name.repeat(x No. of times) - repeat the string_name x number of times

  9. 


3. Arrays 
  1. When we do typeOf(array) it return 'object' 

  2. Arrays are mutable so it's not like string which always create new string when a operation is done. So it changes 

  3. We can store values at any index in array if we are storing a value at a place greater than length of array then the intermediate index will store empty values and the length of array will also change.

  e.g:
  let fruits = ["apple","banana","apple"] ; 
  fruits[10] = "mango" ; 
  console.log(fruits) ; 
  // {11} ['apple','banana','apple',empty x 7,'mango'] 

  4. fruits.push('guava') // push the element at the last of the array.

  5. let deleted = fruits.pop() ; // This will remove the last element from the array and store it in deleted.

  6. fruits.unshift("lichi") ; // add the elemet at start of the array

  7. fruits.shift() // remove the element at the start of the array as well as return the value which is removed

  8. arr.indexOf("value") ; // return index of the value in array if not exist then return -1

  9. arr.includes("value") ; // this return true if value exist in arr and false if not 

  10. first_arr.concat(second_arr) ; // concatenate two arr in new arr it don't change the original arr. 

  11. arr.reverse() ; // it reverses the values of original array 

  12. arr.slice(start , last) ; // it return the sliced array with last index exclusive 
  Note : if arr.length = 4 then,
  arr.slice(5) ; // [] (when index > arr.length)
  arr.slice(-5) ; // [return all element]  

  13. arr.splice(start,deleteCount,item0....itemN) ; 
  splice() - removes / replace / add element in place 
  e.g :
  let colors = ['red','yellow','blue','ornage','pink','white'];
  colors.splice(4) ; // {2} ['pink','white'] as well as remove the sliced element from the original array. so array becomes : 
  (4) ['red', 'yellow', 'blue', 'ornage']

  same output as ,
  colors.slice(4)  but there is a major difference slice don't change the original array but splice change the original array. 
   
  colors.splice(0,1) ; // ['red'] and it remove the 'red' element from the array.
  colors.splice(0,1,'black','grey') ; // ['yellow'] and it remove the yellow element as well as add black and grey in the array.

  14. arr.sort() ; // arrange the element in ascending order.
  this sort() method works fine with string but when we use it for numbers. then it return random value since sort() method first convert he element in string then give the order. 

  15. [1] == [1] ; // false 
      [1] === [1] ; // false 
      because array don't store values it stores address of the value where it is stored so when comparing we are comparing address of two different array which are stored in different location in memory. but , if we do 
      e.g : 
      let arrCopy = arr ; 
      arrCopy.push('c') ; // this will change the arr values as well since array reference is same. 
      arr == arrCopy ; // true since the memory location is copied 

  16. const arr = [1,2,3] ; // constant array is created 
      arr.push(4) ;
      arr.pop() ; 
      we can add new element , pop the element change the length of array but we can't change the array into completly new array like arr = [3,4,5] this will give error . So basically we can't overwrite the reference memory of other location. 

      const insures that we accidently don't change or make the memory location NULL of any array.

  17. nested array/ matrix :
      let nums = [[2,3],[4,5]] ; 
      







4. Pop-Up messages
  1. alert("Something is wrong"); // This will pop up an alert message on the screen

  2. prompt("What is your name ? ") ; // ask question form the user upon opening the tab and can be stored in a variable and used later.
  e.g : 
  let firstName = prompt("Enter your name: "); // Takes input from the user at the time of loading the screen
  console.log(firstName);

  3. console.error("This is an error message");

  4. console.warn("This is a warning message");


5. Loops 
  1. for of loop :
    syntax :
    for(element of collection){
      //do something
    }
    let fruits = ["mango","apple","banana","litchi","ornage"];
    for(fruit of fruits){ 
      // This go through all the element of fruits  collection and save it into fruit each time.
      console.log(fruit);
    } 