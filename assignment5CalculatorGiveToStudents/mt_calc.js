"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Theresa Kaine
   Modified by: Nathan Welsh
   Date:   2018-03-01
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter
      
       // Modified for FSW by Dr. Roger Webster
       // GiveToStudents code

*/

window.onload = init;

function init() {
   var calcButtons = document.getElementsByClassName("calcButton");
   
   for (var i = 0; i < calcButtons.length; i++) {
      calcButtons[i].onclick = buttonClick;
   }
   
   document.getElementById("calcWindow").onkeydown = calcKeys;

   document.getElementById("decimals").value = 2;
}

function buttonClick(e) {
   var calcValue = document.getElementById("calcWindow").value;
   var calcDecimal = document.getElementById("decimals").value;
   var buttonValue = e.target.value;
   
   // Check which button was clicked
   switch(buttonValue){
      case "del":
         calcValue = "";
         break;
      case "bksp":
         calcValue = eraseChar(calcValue);
         break;
      case "enter":
         calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
         break;
      case "prev":
         calcValue += lastEq(calcValue);
         break;
      default:
         calcValue += buttonValue;
   }

   //Set the value of calcValue -> calcWindow
   document.getElementById("calcWindow").value = calcValue;
   document.getElementById("calcWindow").focus();
}

function calcKeys(e) {
   var calcValue = document.getElementById("calcWindow").value;
   var calcDecimal = document.getElementById("decimals").value;  
   
   switch (e.key) {
      case "Delete":
         calcValue = "";
         break;
      case "Enter":
         calcValue += " = " + evalEq(calcValue, calcDecimal) ;
         break;
      case "ArrowUp":
         calcValue += lastEq(calcValue);
         e.preventDefault();
   }
       //Set value of calcValue -> calcWindow
       document.getElementById("calcWindow").value = calcValue;
}


/* ===================================================================== */
/* Helper functions
/* ===================================================================== */
function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}