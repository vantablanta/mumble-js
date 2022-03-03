/*function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }*/
/*const greeting = document.getElementById("demo")


function myFunction() {
    document.getElementById("demo").textContent = greeting;


}
greeting.addEventListener("click", myFunction());*/


//get the numbers from the input 


/*function verifyNumber(){
  let num = document.getElementById("num").value;
  if (isNaN(num) || num < 1 || num > 10){
    output = "Incorrect answer";
  }
  else{
    output = "Correct answer"
  }
  document.getElementById("output").textContent = output
}

function changeBgColor(){
  document.getElementById('text').style.backgroundColor = "Yellow"
}
function successSubmit(){
  var textToShow = document.getElementById("after-click").textContent = "Successfully Submited";
  document.getElementById('after-click').style.backgroundColor = "Green"

}


function toUpperCase(){
  var text = document.getElementById('text');
  text.value = text.value.toUpperCase();
}
function submitted(){
  document.getElementById("btn")
}
function showSubmitText(){
  var text = document.getElementById('submitted');
  text.textContent = "Submitted"
}
submitted.addEventListener("click", showSubmitText); 

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}



function greetingFunction(){
  const welcomeText = document.querySelector("#text");
  const name = prompt("What is your name?");
  alert(`Hello ${name}`);
  welcomeText.textContent = `Welcome ${name}`;
}


var num1 = parseInt(prompt("Provide First Number:"));
var num2 = parseInt(prompt("Provide Second Number:"));
function add(num1, num2){
  var result = num1 + num2
  var outputText = "The sum is: "+ result
  alert(outputText)
}
add(num1, num2);*/



/*function newGreeting(){
  let name = prompt("What is your name?")
  alert(`Hi there! Thank you for visiting us ${name}`)
}
newGreeting();*/

/*function subtractNumbers(){
  let num1 = parseInt(prompt("Enter first operand"));
  let num2 = parseInt(prompt("Enter second operand"))
  let result = num1 - num2;
  alert(`This is the value after subtracting your operands:  ${result}`)

}
subtractNumbers();

function userInfo(){
  let name = prompt("Enter your Name")
  let age = prompt("Enter your age");
  let favFood = prompt("Enter favourite food");

  alert(`Hello ${name}, you are ${age} years of age and love ${favFood}`)
}
userInfo()*/          


/*function multiply(a, b){
  return a * b
}


// arrow function format
let pilau = (numberOfPilauPlatesToMake) => {
    let ingredients = (amountOfIngredient, unitOfMeasure, nameOfIngredient) => {
           let totalIngredientAmount = amountOfIngredient * numberOfPilauPlatesToMake;
     if(totalIngredientAmount > 1){
             nameOfIngredient = nameOfIngredient + "s"      
     }
     console.log(`${totalIngredientAmount} ${unitOfMeasure} ${nameOfIngredient}`) 
  }
// the mistake I was making was not passign the below to set values for ingredient function
ingredients(1, "kg", "meat"); //pass various arguments for the ingredients functions 
ingredients(0.25, "cup", "rice");//pass various arguments for the ingredients functions 
ingredients(0.25, "cup", "water");//pass various arguments for the ingredients functions 
ingredients(1, "clove", "garlic");//pass various arguments for the ingredients functions 
ingredients(2, "tablespoon", " oil");//pass various arguments for the ingredients functions 
ingredients(0.5, "teaspoon", "spice");//pass various arguments for the ingredients functions 
}
//notice where the scope is ending

pilau(10) // call the pilau function with the number of plates as the argument. 
        //you can call it here or in chromes console

// `{}`this means you to print the value that the variable in here :{} holds
// it goes like `${variable1} ${variable2} ${variable 3}`

// this exercise is from Eloquent Javascript.

*/

/*
let firstNumber = parseInt(prompt("Enter first value"));
let secondNumber = parseInt(prompt("Enter second value"));
let thirdNumber = parseInt(prompt("Enter third value"));
let fourthNumber = parseInt(prompt("Enter fourth value"))
let firstSumValue = firstNumber + secondNumber
let firstSubtractValue = thirdNumber - fourthNumber
let finalResult = firstSumValue * firstSubtractValue
let evenOddResult = finalResult % 2

const parent = document.querySelector('section')

const firstValue = document.createElement('p')
firstValue.textContent = `First Input is:  ${firstNumber}`

const secondValue = document.createElement('p')
secondValue.textContent = `Second Input is:  ${secondNumber}`

const thirdValue = document.createElement('p')
thirdValue.textContent = `Third Input is:  ${thirdNumber}`

const fourthValue = document.createElement('p')
fourthValue.textContent = `Fourth Input is:  ${fourthNumber}`

parent.appendChild(firstValue)
parent.appendChild(secondValue)
parent.appendChild(thirdValue)
parent.appendChild(fourthValue)


const para1 = document.getElementById('numbers');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is:  ${ finalResult }`;
para1.textContent = `Is the Final result 48? ${ finalResultCheck }`;
const para2 = document.getElementById('evenOrOdd');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd'
para2.textContent = evenOddResultCheck;
*/



// check even or odd
/*
let num = parseInt(prompt("Provide number to confirm if its even "));
function checkEven(num){
  if (num % 2 == 0){
    console.log("Even")
  
  }else{
    console.log("ODD")
  }
}
checkEven(num)
*/

// CAFE
/*
let coffee = confirm("Do you want Coffee?")
function cafe(coffee){
  if (coffee == true){
    console.log("Ok! Ill bring you coffee")
  }else {
    console.log("Ok! Ill bring you tea")
  }
}

cafe(coffee)
*/


