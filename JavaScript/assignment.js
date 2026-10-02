// Assignment Question on JS(Part 7) : 
// let arr = [10,20,30]
// let arrayAverage = (arr) => {
//   let sum = 0 ;
//   for(let i=0 ; i<arr.length ; i++){
//     sum += arr[i] ;
//   }
//   return sum / arr.length ; 
// }

// let n = 54; 
// let isEven = n => {
//     if(n%2 == 0){
//         return true ; 
//     } else {
//         return false ;
//     }
// }

const obj = {
    mess: 'Hello, World!',
    logMess() {
        console.log(this.mess);
    }
};
setTimeout(obj.logMess,1000);