// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
var timeInMin = 0;

export function timeToMixJuice(name) {
  switch (name) {
  case "Pure Strawberry Joy":
    timeInMin = 0.5;
    break;
  case "Energizer":
  case "Green Garden":
    timeInMin =  1.5;
    break;
  case "Tropical Island":
    timeInMin = 3;
    break;
  case "All or Nothing":
      timeInMin = 5;
     break;
  default:
      timeInMin = 2.5;
  }
  return timeInMin;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {

var wedges = 0;
var totalWedges = 0;
var i = 0;
 while (totalWedges < wedgesNeeded && i < limes.length) {
   switch (limes[i]) {
     case "small":
     wedges = 6;
break;
     case "medium":
       wedges = 8;
break;
     case "large":
       wedges = 10; 
       break;

   }

   totalWedges = totalWedges + wedges;
   
   i++;
  
   
 }  
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

do {  
timeLeft = timeLeft - timeToMixJuice(orders.shift())
} while (timeLeft > 0 && orders.length > 0);

  return orders;
console.log(result);
// Expected output: "12345"

}
