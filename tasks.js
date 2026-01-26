
// js-array-tasks

/*
  ----------------------task 1;-----------------------
 *  Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
 */

const fruits = ['orange', 'malta', 'watermelon', 'fineApple', 'Mango'];
console.log(fruits[3]);

fruits[2]= 'jambura';
console.log(fruits)


/**  ----------------------task-2;-----------------------
 *  Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
 */
const touristSpots = ['sajek', 'sreemongol', 'coxsbazar'];
touristSpots.push('sundorbon');
touristSpots.push('saintMartin', 'bandarban');
touristSpots.pop();
console.log(touristSpots);



/**  ----------------------task-3;-----------------------
 *Checking Array Membership with ‘includes’
Instructions:
Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not.
 */
const books =['javaScript', 'html', 'css', 'react'];
if(books.includes('javaScript')){
    console.log('javaScript book is available')
}
else{
    console.log('Javascript book is not available');
}


/**  ----------------------task-4;-----------------------
 *Checking if it's an Array
Instructions:
Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not.
 */
const checkArray = [20,50,40,9,400];
const name ="Mahdi";
const number =200;
console.log(Array.isArray(checkArray));
console.log(Array.isArray(name));
console.log(Array.isArray(number));


/**  ----------------------task-5;-----------------------
 *Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
 */
const friend = ['tasrif', 'khairul','tohfa'];
const student =['siam', 'israfyl', 'rahi'];
const combinArray = friend.concat(student);
console.log(combinArray);