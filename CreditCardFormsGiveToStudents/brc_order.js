"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Professor: Dr. Roger Webster
   Code: Nathan Welsh
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
      -------------------------------------------------------------
     Major Modifications by Dr. Roger Webster FSW
     More Major Modifications by Nathan Welsh
    -------------------------------------------------------------
   
*/


window.addEventListener("load", function() {
   calcOrder();
   SwitchImage();

   var BRCorderForm = document.forms.orderForm;
   
   // Todays Date
   BRCorderForm.elements.orderDate.value = new Date().toDateString();
   BRCorderForm.elements.model.focus();  
  
   // Event handlers for the web form
   
   BRCorderForm.elements.qty.onchange = calcOrder;

   BRCorderForm.elements.model.onchange = calcOrder;

   var planOptions = document.querySelectorAll('input[name="protection"]');
   for (var i = 0; i <= planOptions.length; i++) {
      planOptions[i].onclick = calcOrder;
   }
  
});

function calcOrder() {
   var BRCorderForm = document.forms.orderForm;
   
   // Calculate the initial cost of the order
   var mIndex = BRCorderForm.elements.model.selectedIndex;
   var mCost = BRCorderForm.elements.model.options[mIndex].value;
   var qIndex = BRCorderForm.elements.qty.selectedIndex;
   var quantity = BRCorderForm.elements.qty[qIndex].value;
   
   // Initial cost = model cost x quantity 
   var initialCost = mCost*quantity;
   orderForm.elements.initialCost.value = formatUSCurrency(initialCost);

   // Retrieve the cost of the user's protection plan
   var pCost = document.querySelector('input[name="protection"]:checked').value*quantity;
   BRCorderForm.elements.protectionCost.value = formatNumber(pCost, 2);
   
   // Calculate the order subtotal
   BRCorderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);
   
   // Calculate the sales tax
   var salesTax = 0.05*(initialCost + pCost);
   BRCorderForm.elements.salesTax.value = formatNumber(salesTax, 2);
   
   // Calculate the cost of the total order
   var totalCost = initialCost + pCost + salesTax;
   BRCorderForm.elements.totalCost.value = formatUSCurrency(totalCost);
   
   // Store the order details
   BRCorderForm.elements.modelName.value =  
      BRCorderForm.elements.model.options[mIndex].text;
   BRCorderForm.elements.protectionName.value = 
      document.querySelector('input[name="protection"]:checked').nextSibling.nodeValue;
}

function SwitchImage() {
   var BRCorderForm = document.forms.orderForm;
   var mIndex = BRCorderForm.elements.model.selectedIndex;
   calcOrder();

   switch (mIndex){
      case 0:
         document.getElementById("ImageBox").src="images/highlinewhite24.jpg";
         break
      case 1:
         document.getElementById("ImageBox").src="images/highlinewhite30.jpg";
         break
      case 2:
         document.getElementById("ImageBox").src="images/highlinewhite36.jpg";
         break
      case 3:
         document.getElementById("ImageBox").src="images/highlinewhite60.jpg";
         break
   }
}

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}