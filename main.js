// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numToString = () => {
  
  let num = document.getElementById("num-to-str").value;
  let text = num.toString();

  document.getElementById("number").innerHTML = text;

} 


// Write a JavaScript program to convert a string to the number.

const stringToNum = () => {
  
  let str = document.getElementById("str-to-num").value;
  let num = parseInt(str);

  document.getElementById("results").innerHTML = num;

} 



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  
// * Boolean
const findTypeOf = () => {
let a = true;
console.log(`a is a ${typeof a}`);

let b = null
console.log('b is an object set to null');

let c;
console.log(`c is a ${typeof c}`);

let d = 32
console.log(`d is a ${typeof d}`);

let e = isNaN('Hello')
  if (e == true) {
    console.log(`e is a NaN`);
  }

  f = "Hello"

  let h2 = document.getElementById("practice");

  let html = `<p>a is a ${typeof a}</p>
             <p>b is an object set to null</p>
             <p>c is a ${typeof c}</p>
             <p>d is a ${typeof d}</p>
             <p>e is a NaN</p>
             <p>f is a ${typeof f}</p>`

  h2.insertAdjacentHTML("afterend", html);

}
  





  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  

  
// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = () => {

  let numOne = document.getElementById('num1').valueAsNumber
  let numTwo = document.getElementById('num2').valueAsNumber

  sum = numOne + numTwo
  
  document.getElementById("sum-of-numbers").innerHTML = sum;

}

// Write a JavaScript program that runs only when 2 things are true.
const bothTrue = () => {
  let numThree = document.getElementById('num3').valueAsNumber;
  let numFour = document.getElementById('num4').valueAsNumber;

  if (numThree > 50 && numFour > 50) {
    document.getElementById("greater-than-fifty").innerHTML = "Yes"
  }

  else {
    document.getElementById("greater-than-fifty").innerHTML = "No"
  }

}

// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = () => {

  if (document.getElementById("umbrella-yes").checked) {
    document.getElementById("umbrella-results").innerHTML = "You need an umbrella."
  }

  else {
    document.getElementById("umbrella-results").innerHTML = "You don't need an umbrella."
  }
  
}

// Write a JavaScript program that runs when both things are not true.
const bothFalse = () => {
 
  if (document.getElementById("power-no").checked && document.getElementById("wifi-no").checked){
    document.getElementById("power-results").innerHTML = "You can't attend class."
  }

  else (
    document.getElementById("power-results").innerHTML = "You probably can make it work, but nothing is certain."
  )
  

}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
