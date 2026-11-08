// This is to change the image of all the small images in the page to spiderman image.
// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0 ; i<smallImages.length ; i++){
//     smallImages[i].src = "assets/spiderman_img.png" ; 
//     console.log(`value of ${i} is changed`) ;
// }


// This is to change the content of the heading element to underline Spider Man.
// let heading = document.querySelector("h1") ;
// // heading.innerHTML = "<u>Spider Man</u>" ;
// heading.innerHTML = `<u>${heading.innerText}</u>`; // By the help of `${}` We can directly apply anything on the content without need of remembering the content of the element.


// This is to change the attribute of the element. In this case we are changing the id attribute of the img element to newImg.
// let img = document.querySelector("img") ;
// img.getAttribute("id") ; // This will return the value of the attribute of the element. In this case it will return "mainImg" which is the value of id attribute of the img element. 
// img.setAttribute("id" , "newImg") ; // This will change the value of the attribute of the element. In this case it will change the value of id attribute of the img element to "newImg" due to that the CSS will get reset and Thus always think twice before changing the value of the attribute of the element.   


// This is to change the color of all the anchor tags inside the div element to yellow.
// let divAnchor = document.querySelectorAll("div a") ; 
// // for(let i=0 ; i<divAnchor.length ; i++){
// //     divAnchor[i].style.color = "yellow" ;
// // }
// //OR
// for(link of divAnchor){
//     link.style.color = "purple" ;
// }



// let heading = document.querySelector("h1") ;
// // heading.classList.add("green") ; // This will add the class "green" to the heading element. If the class is already present then it will not add the class again.
// // heading.classList.add("underline") ; // This will add the class "underline" to the heading element.

// heading.setAttribute("class" , "green underline") ; // This will set the class attribute of the heading element to "green underline". If the class is already present then it will not add the class again. But if we use setAttribute then it will replace the existing class with the new class. So always use classList.add() method to add a class to an element.   
// heading.classList.remove("green") ; // This will remove the class "green" from the heading element. If the class is not present then it will not do anything.   
// heading.classList.contains("underline") ; // This will return true if the class "underline" is present in the heading element. If the class is not present then it will return false.   
// heading.classList.toggle("green") ; // This will toggle the class "green" in the heading element. If the class is present then it will remove the class. If the class is not present then it will add the class.    



// let newParagraph = document.createElement("p") ; // This will create a new element of type "p". But it will not be added to the DOM. We need to use appendChild() method to add the element to the DOM.
// newParagraph.innerText = "Hii! This is a new paragraph." ; // This will set the inner text of the new paragraph element
// let body = document.querySelector("body") ; // This will select the body element of the page.
// body.appendChild(newParagraph) ; // This will add the new paragraph element to the body element.

// let btn = document.createElement("button") ; // This will create a new element of type "button". But it will not be added to the DOM. We need to use appendChild() method to add the element to the DOM.
// btn.innerText = "Click Me!" ; // This will set the inner text of the button element. We can use innerText to set the content of the element. We can also use innerHTML to set the content of the element. But innerText is more powerful than innerHTML because we can use HTML tags in innerText. But we cannot use HTML tags in innerHTML. So always use innerText to set the content of the element. 
// let box = document.querySelector(".box") ; // This will select the element with class "box" of the page.
// box.appendChild(btn) ; // This will add the button element to the box element.

// newParagraph.append("This is new text added to the new paragraph.") ; // This will add the text to the new paragraph element. We can use append() method to add the text to the element. We can also use innerText to set the content of the element. But append() method is more powerful than innerText because we can use HTML tags in append() method. But we cannot use HTML tags in innerText. So always use append() method to add the text to the element.  
// newParagraph.append(btn) ; // This will add the button element to the new paragraph element. We can use append() method to add the element to the element. We can also use appendChild() method to add the element to the element. But append() method is more powerful than appendChild() method because we can add multiple elements at once in append() method. But we cannot add multiple elements at once in appendChild() method. So always use append() method to add the element to the element.
// newParagraph.prepend("This is new text added before to the new paragraph.") ; // This will add the text to the new paragraph element. We can use prepend() method to add the text to the element. We can also use innerText to set the content of the element. But prepend() method is more powerful than innerText because we can use HTML tags in prepend() method. But we cannot use HTML tags in innerText. So always use prepend() method to add the text to the element.


// let btn2 = document.createElement("button") ; 
// btn2.innerText = "NEW BUTTON" ; 
// let p = document.querySelector("p") ;
// p.insertAdjacentElement("beforebegin" , btn2) ; // This will add the button element before the p element. We can use insertAdjacentElement() method to add the element to the element. We can also use appendChild() method to add the element to the element. But insertAdjacentElement() method is more powerful than appendChild() method because we can add the element at any position in the element. But we cannot add the element at any position in the element using appendChild() method. So always use insertAdjacentElement() method to add the element to the element.    
// p.insertAdjacentElement("afterbegin" , btn2) ; // This will add the button element after the p element. We can use insertAdjacentElement() method to add the element to the element. We can also use appendChild() method to add the element to the element. But insertAdjacentElement() method is more powerful than appendChild() method because we can add the element at any position in the element. But we cannot add the element at any position in the element using appendChild() method. So always use insertAdjacentElement() method to add the element to the element.  
// p.insertAdjacentElement("beforeend" , btn2) ; // This will add the button element before the end of the p element. We can use insertAdjacentElement() method to add the element to the element. We can also use appendChild() method to add the element to the element. But insertAdjacentElement() method is more powerful than appendChild() method because we can add the element at any position in the element. But we cannot add the element at any position in the element using appendChild() method. So always use insertAdjacentElement() method to add the element to the element.
// p.insertAdjacentElement("afterend" , btn2) ; // This will add the button element after the p element. We can use insertAdjacentElement() method to add the element to the element. We can also use appendChild() method to add the element to the element. But insertAdjacentElement() method is more powerful than appendChild() method because we can add the element at any position in the element. But we cannot add the element at any position in the element using appendChild() method. So always use insertAdjacentElement() method to add the element to the element.    


// body.removeChild(btn2) ; // This will remove the button element from the body element. We can use removeChild() method to remove the element from the element. We can also use remove() method to remove the element from the element. But removeChild() method is more powerful than remove() method because we can remove the element from the element using removeChild() method. But we cannot remove the element from the element using remove() method. So always use removeChild() method to remove the element from the element.    
// newParagraph.remove() ; // This will remove the new paragraph element from the body element. We can use remove() method to remove the element from the element. We can also use removeChild() method to remove the element from the element. But remove() method is more powerful than removeChild() method because we can remove the element from the element using remove() method. But we cannot remove the element from the element using removeChild() method. So always use remove() method to remove the element from the element.   


// Assignment Question 24. Js(part 9) :
// To create input and button and set text of button to "Click me"
// let btn = document.createElement("button") ; 
// btn.innerText = "Click me" ; 
// document.querySelector("body").append(inp)
// document.querySelector("body").append(btn)
// // To set placeholder of input to "username" and id of button to "btn"
// inp.placeholder = "username" ; 
// btn.id = "btn" ; 
// // To select the button using button and button id and set background color of button to "blue" and text color to "white"
// let b = document.querySelector("button");
// let b1 = document.querySelector("#btn") ; 
// b1.classList.add("background"); 
// // To create h1 and set text of h1 to "DOM Practice" underline and set color of h1 to "purple"
// let h1 = document.createElement("h1") ; 
// h1.innerHTML = "<u>DOM Practice</u>"; 
// h1.style.color = "purple" ; 
// document.querySelector("body").prepend(h1) ; 
// // To create p tag and set text of p to "Apna College Delta Practice" and set bold to "Delta"
// let p = document.createElement("p") ; 
// p.innerHTML = "Apna College <b>Delta</b> Practice"; 
// document.querySelector("body").prepend(p) ;