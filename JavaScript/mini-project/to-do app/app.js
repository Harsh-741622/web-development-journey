let btn = document.querySelector("button");
let inp = document.querySelector("input"); 
let ul = document.querySelector("ul") ; 

btn.onclick = function() {
    let task = document.createElement("li") ; 
    task.innerText = inp.value ; 

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete" ; 
    delBtn.classList.add("delete") ;

    task.append(delBtn); 
    ul.appendChild(task) ; 
    inp.value = ""; // To reset the input box
}

// This below code will not delete the new task added since addEventListener only work on existing elements.
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement ; 
//         par.remove() ; 
        
//     });
// }; 


// If we want to apply the existing Event Listener to the new elements added dynamically, we can use the Event Delegation by using event bubbling.
ul.addEventListener("click",function(event){
    // console.dir(event.target.nodeName); // This is the useful property of event Object to know which is getting clicked. this event.target contain nodeName which tell exactly which element it was which is clicked.
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement ; 
        listItem.remove();
    }
});
