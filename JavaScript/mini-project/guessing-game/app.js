const max = prompt("Enter maximum number :") ; 
const random = Math.floor(Math.random()*max)+1 ;
let guess = prompt(`Guess the number between 1 to ${max}`);
console.log("Enter 'quit' to exit the game");
let counter = 0 ; 
while(random != guess){
    if(guess == "quit"){
        console.log("Quitting the guess game");
        break;
    }
    counter ++ ;
    if(counter >= 2){
        if(guess > random){
            guess = prompt("Try again! (Hint: Guess smaller number)");
        } else {
            guess = prompt("Try again! (Hint: Guess larger number)")
        }
    } else {
        guess = prompt("You guessed wrong. Try again!");
    }
}
if(random == guess){
    console.log("Congratulation! You guessed right");
}