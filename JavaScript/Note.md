# Read the *Imp Example* in app.js :
  ## 1. line 607 
    Running a function for set interval of time.
  ## 2. 

# 1. Basics :
  ## 1.1. Console 
    Uses REPL(Read-Evaluate-Print-Loop)

    To clear the console use Clt + l (in windows) and Clt + k (in mac)
  ## 1.2. 
    NaN in JS
    NaN (Not a valid number) is kind of invalid nuber like 0/0     

  ## 1.3. 
    Value of const can't be changed and we only declare variable only one time then we can use it.
    and var keyword is used in Old syntax but now we use let .   

  ## 1.4. 
    We can actually change the data type conversion just by storing different data type.

  ## 1.5. Undefined :
    A variable whose value is not assigned. You can say by default value for absence of value ---> e.g: let name ; 
     null :
    When we intentionally don't assign value to any object. ---> e.g: let name = null ;

  ## 1.6. 
    String + Number = String ---> e.g "apnacollege"+123 = "apnacollege123"

  ## 1.7. 
    console.log(); can we used to write multiple messages at a time.
    e.g console.log("Hello","World",num,(1+5));
    Output: Hello World 123 6

  ## 1.8. 
      ```js      
      let n = prompt("write your number") ;
      n = parseInt(n) ; 
      for(let i=n ; i<=n*10  ; i+=n) {
          console.log(i) ; 
      }
      ``` 
      Here we used parseInt(n) to convert the string value of n into  integer. since prompt always take input in string.

  ## 1.9. 
      num = Math.floor(num/10) ;
      this is used to convert the floor value into integer: 12.4 -> 12

  ## 1.10. 
      In JS, Nothing will run after any error occurs therefore webite can crash.


      


# 2. String:
  ## 2.1. 
    variable_name.length -----> Gives length of string

  ## 2.2. 
    string_name.trim() ------> Trims whitespaces from both ends of string & returns a new one
    Note: Don't assume that the original value of string is changed it remains unchanged. trim() method create new string.

  ## 2.3. 
    String are IMMUTABLE in JS

  ## 2.4. 
    string_name.toUpperCase() ------> Convert all character to upper case.

  ## 2.5. 
    string_name.toLowerCase() ------> convert all character to lower case.

  ## 2.6. 
    string_name.indexOf("value") -----> Gives first index of occurrence of the value 
  and return -1 if not found.

  ## 2.7. 
    string_name.slice(Start , end) - end is non-inclusive e.g (1,5) means you get 1-4 only
    OR string_name.slice(Start) - default end = string.length
    OR string_name.slice(-num) = string_name.slice(str.length - num)  
    let msg = "apnacollege" ; 
    e.g msg.slice(-3) // msg.slice(11-3) = msg.slice(8) = ege  

  ## 2.8. 
    string_name.repeat(x No. of times) - repeat the string_name x number of times



# 3. Arrays 
  ## 3.1. 
    When we do typeOf(array) it return 'object' 

  ## 3.2. 
    Arrays are mutable so it's not like string which always create new string when a operation is done. So it changes 

  ## 3.3. 
    We can store values at any index in array if we are storing a value at a place greater than length of array then the intermediate index will store empty values and the length of array will also change.

    e.g:
    let fruits = ["apple","banana","apple"] ; 
    fruits[10] = "mango" ; 
    console.log(fruits) ; 
    // {11} ['apple','banana','apple',empty x 7,'mango'] 

  ## 3.4. 
    fruits.push('guava') // push the element at the last of the array.

  ## 3.5. 
    let deleted = fruits.pop() ; // This will remove the last element from the array and store it in deleted.

  ## 3.6. 
    fruits.unshift("lichi") ; // add the elemet at start of the array

  ## 3.7. 
    fruits.shift() // remove the element at the start of the array as well as return the value which is removed

  ## 3.8. 
    arr.indexOf("value") ; // return index of the value in array if not exist then return -1

  ## 3.9. 
    arr.includes("value") ; // this return true if value exist in arr and false if not 

  ## 3.10. 
    first_arr.concat(second_arr) ; // concatenate two arr in new arr it don't change the original arr. 

  ## 3.11. 
    arr.reverse() ; // it reverses the values of original array 

  ## 3.12.
    arr.slice(start , last) ; // it return the sliced array with last index exclusive 
    Note : if arr.length = 4 then,
    arr.slice(5) ; // [] (when index > arr.length)
    arr.slice(-5) ; // [return all element]  

  ## 3.13. 
    arr.splice(start,deleteCount,item0....itemN) ; 
    splice() - removes / replace / add element in place 
    e.g :
    let colors = ['red','yellow','blue','ornage','pink','white'];
    colors.splice(4) ; // {2} ['pink','white'] as well as remove the sliced element from the original array. so array becomes : 
    (4) ['red', 'yellow', 'blue', 'ornage']

    same output as ,
    colors.slice(4)  but there is a major difference slice don't change the original array but splice change the original array. 
    
    colors.splice(0,1) ; // ['red'] and it remove the 'red' element from the array.
    colors.splice(0,1,'black','grey') ; // ['yellow'] and it remove the yellow element as well as add black and grey in the array.

  ## 3.14. 
    arr.sort() ; // arrange the element in ascending order.
    this sort() method works fine with string but when we use it for numbers. then it return random value since sort() method first convert he element in string then give the order. 

  ## 3.15. 
    [1] == [1] ; // false 
    [1] === [1] ; // false 
    because array don't store values it stores address of the value where it is stored so when comparing we are comparing address of two different array which are stored in different location in memory. but , if we do 
    e.g : 
    let arrCopy = arr ; 
    arrCopy.push('c') ; // this will change the arr values as well since array reference is same. 
    arr == arrCopy ; // true since the memory location is copied 

  ## 3.16. 
    const arr = [1,2,3] ; // constant array is created 
    arr.push(4) ;
    arr.pop() ; 
    we can add new element , pop the element change the length of array but we can't change the array into completly new array like arr = [3,4,5] this will give error . So basically we can't overwrite the reference memory of other location. 

    const insures that we accidently don't change or make the memory location NULL of any array.

  ## 3.17. nested array/ matrix :
      let nums = [[2,3],[4,5]] ; 
      







# 4. Pop-Up messages
  ## 4.1. 
    alert("Something is wrong"); // This will pop up an alert message on the screen

  ## 4.2. 
    prompt("What is your name ? ") ; // ask question form the user upon opening the tab and can be stored in a variable and used later.
    e.g : 
    let firstName = prompt("Enter your name: "); // Takes input from the user at the time of loading the screen
    console.log(firstName);

  ## 4.3. 
    console.error("This is an error message");

  ## 4.4. 
    console.warn("This is a warning message");


# 5. Loops 
  ## 5.1. for of loop :
    syntax :
    for(element of collection){
      //do something
    }
    let fruits = ["mango","apple","banana","litchi","ornage"];
    for(fruit of fruits){ 
      // This go through all the element of fruits  collection and save it into fruit each time.
      console.log(fruit);
    } 

# 6.  Object Literals : 
  JS objects literals : used to store keyed collections & complex entities. 
  property => (key , value)  pair e.g (name , "Harsh") or (age , 21) 
  SO objects are a collection of properties.

  e.g of Objects literals : 
  let student = {
    name: "Harsh" ,
    age: 21 ,  
    marks: 95  
  };
  To get the values :
  student["name"]; // 'Harsh'
  OR 
  student.name; // 'Harsh' 

  NOTE: 
        let obj = {
          1: "a",
          2: "b",
          null: "c", // This are not keyword but in object literal JS convert this keys into string internally automatically.
          true: "d",
          undefined: "e" 
        };
        and 
        obj[1] ---> Here 1 is not any integer or index it is basically in JS internally getting converted in string.

  ## Update/Add value :
    const student = {
      name: "Harsh",
      age: 21 ,
      marks: 99,
      city:"Gujarat"
    };
    student.city = "Bihar" ; // Update 
    student["age"] = 20 ; 
    student.gender = "male" ; // Adding new key-value pair

  ## Delete : 
    delete student.marks;
    delete student.city ; 
    
  ## Nested Object :
      ```js
        const classInfo = {
        harsh: {
            grade: "A+",
            city: "bihar"
        },
        raghav: {
            grade: "A++",
            city: "Vyara"

        },
        meet: {
            grade: "A+++",
            city: "rajasthan"
        }

      };
      classInfo.harsh.city; // bihar
      classInfor.meet.city = "bardoli" ; // change the city of meet

      // Array of objects :
      const classInfo = [
        {
            name: "harsh",
            grade: "A"
        },
        {
            name: "raghav",
            grade: "A++"
        },
        {
            name: "meet",
            grade: "A+"
        }
      ];
      classInfo[0].name ; // harsh
      ```

# 7. Math Object :
  ## Some important functions :
    1. Math.PI // It returns the value of PI approx 3.14
    2. Math.E // It returns the value of eular approx 2.718
    3. Math.abs(num) // retuns positive number 
    4. Math.pow(a,b) // returns a to the power b
    5. Math.floor(num) // round off to the integer which is either equal to num or less than num.e.g: 5.99 = 5 
    6. Math.ceil(num) // This round off the number into integer to the >=num
    7. Math.random() // gives any values in 0 to 1(exclusive)


# 8. Function in JS :
  ## 8.1. Syntax : 
    function definaton - 
    function funcName(arg1,arg2,...){
      // do something
      return val ; // This can be used when we need to return value instead of printing it during call.
    }

    function calling(using the function) -
    funcName(); 

  ## 8.2. Scope of Function :  
  ### 8.2.1.  e.g:
    let sum = 54 ; // Global scope 
    function calsum(a,b){
      let sum = a+b ; // function scope 
    }
    calsum(1,3);
    console.log(sum); // Outside the function the sum variable will give error since it's only scope is in the function only.

    Note : Function scope is more specific so if there is both then function will use function scope instead of global scope.

  ### 8.2.2. // Block scope - variable declared inside the {} can't be accessed outside the box
    {
      const/let a = 23 ;  // But don't use var here because that will show the value outside the box
    }
    console.log(a); // will not give anything and show error 

  ### 8.2.3. Lexical Scope 
    a variable defined a function can be accessible inside another function defined after the variable declaration. The opposite is not TRUE.
    e.g ;  
  ```js
      function outerFunction(){
      let x =5 ; 
      let y = 6 ; 
      function innerFunction(){
      console.log(x); // So basically we can use the variable defined in a function inside anothere function inside the original function.
      }
      innerFunc();
      }
  ```
      // Hoisting 
  ```js      
      function outerFunc(){
        function innerFunc(){
          console.log(x); // So basically we can use the variable defined in a function inside anothere function inside the original function.
        }
        let x =5 ; 
        let y = 6 ; 
        innerFunc(); // This is important beacause without this the innerFunction is not going to called.
      }
  ```
  ## 8.3. Function Expression : 
  ### 8.3.1. Syntax : 
        const variable = function(arg1,arg2, ....){
          // do or return something
        }
  ### 8.3.2. e.g :
        let sum = function(a,b){ // Here sum is variable name not function name so when we use   the variable like this it is called function expression.

          return a + b ;
        }
        sum(1,2) ; // calling 

  ### 8.3.3. 
    This help us to change the value of the function same as we can for variable.
    e.g :
      let hello = function() {
        console.log("hello");
      }
      hello = function(){ // Hello value is changed 
        console.log("namaster"); 
      }

      hello();

  ## 8.4. High Order Functions : 
    function that does one or both: 
      - takes one or multiple fucntions as arguments 
    e.g :
        function multiGreet(func,n){
          for(let i = 1 ; i<=n ; i++){
            func();
          }
        }
        function greet(){
          console.log("Hello");
        }
        multiGreet(greet,2); // When we use function as an argument don't write greet() it means we executed the function instead use greet only.

  - return a function
    e.g : 
        function oddOrEvenFactory(request){
        if(request == "odd"){
            return function(n){
                console.log(!(n%2==0));
            }
        } else if(request == "even"){
            return function(n){
                console.log(n%2 == 0);
            }
        }
        else {
            console.log("wrong request");
            }
        }

        let request = "odd"; 

        let func = oddOrEvenFactory(request);

        func(5);

        Here the oddOrEvenFactory(request) function is creating function on basic of user input of value of request

  ## 8.5. Methods :
    actions that can be performed on an object. OR Jo function object ke andar defined hote hai unhe methods kehate hai .
      e.g : 
          const calculator = {
            add: function(a,b){
              return a + b ; 
            }
            sub: function(a,b){
              return a - b ; 
            }
            mul: function(a,b){
              return a * b; 
            }
            div: function(a,b){
              return a/b ; 
            }
          }
          calculator.add(a,b);

          // ShortHand
          const calculator = {
            add(a,b) {
              return a+b ;
            },
            sub(a,b){
              return a-b ; 
            },
            mul(a,b){
              return a*b ; 
            }
          }
  ## 8.6. this keyword : line 536
    const student = { 
      name: "Harsh",
      age: 21 ,
      eng:95,
      math:94,
      phy:99,
      getAvg(){
        let Avg = (eng + math + phy)/3 ; 
        console.log(Avg);
      }
    }
    student.getAvg();

    This will create an error saying english is not defined. To use the variable in same object we use this keyword
    e.g :
    const student ={ 
      name: "Harsh",
      age: 21 ,
      eng:95,
      math:94,
      phy:99,
      getAvg(){
        console.log(this); // Here this will display the student object
        let Avg = (this.eng + this.math + this.phy)/3 ; 
        console.log(Avg);
      }
    }
    function getAvg(){
      console.log(this); // Here the value of this is interesting , which is window object. SO basically in JS EVERYTHING IS WE WRITE INSIDE WINDOW OBJECT and functions like alert(),prompt(),etc are methods inside WINDOW object.
    }

    ## 8.7. this with Arrow Functions :
      Arrow function has lexical scope instead of normal scope where this referece to the calling object.
      Lexical scope means scope is the scope of parent.

  ## 8.7. Try & Catch : line 550
    try {
      console.log(a);
    } catch {
      console.log("Caught an error... a is not defined);
    }

  ## 8.8. Arrow Functions : line 549
    ### 8.8.1 Syntax :
      const func = (arg1,arg2,...) => {
        function defination
      }

    ### 8.8.2 e.g :
      const sum = (a,b) => {
        console.log(a+b)
      }
      const cube = (n) => {
        console.log(n*n*n)
      }

      // If function is only returning values then we can ignore return in Arrow function also the pranthesis comes in place of curly braces.
      e.g :
      const mul = (a,b) => (a*b);

  ## 8.9. Set Timeout Function : line 559
    ### Syntax :
      SetTimeout(function,timeout) ; // timeout in milisecond and 1000ms = 1s
    ### e.g : 
      console.log("Hii there!");
      setTimeout( () => {
        console.log("Apna College");
      },4000);
      console.log("Welcome to");

  ## 8.10. Set Interval Function : line 565
    ### Syntax :
    setInterval(function,timeout);
    ### e.g : 
      setInterval( () => {
        console.log("Apna college")
      },3000);

  ## 8.11. Difference between this in Arrow function and Normal function : line 577 
  e.g :
    const student = {
    name: "Harsh",
    prop: this, 
    marks: 99,
    getName: function () {
      console.log(this);
      return this.name;
    },
    getMarks: () => {
      console.log(this); // Parent's scope means Student object -> parent -> Window so scope is Window
      return this.marks;
    },
    getInfo1: function() {
      setTimeout( () => {
        console.log(this) // Student object because Arrow function this referece to the parent scope so here 
        // setTimeout() is called inside the student object so the parent object is student .
      },2000)
    },
    getInfo2: function() {
      setTimeout(function() {
        console.log(this) // Window Object because normal function only see which function is calling me 
        // here setTimeout() is the function calling this so The object which contain setTimeout() will be 
        // pointed by this keyword.
      },2000)
    },
  };
    


            




