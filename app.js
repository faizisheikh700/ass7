//---------------------CH # 35 -38   (FUNCTION)----------------------------
//? Q 1
// function displayDateTime() {
//     var currentDateTime = new Date();
//     document.write(currentDateTime);
// };
// displayDateTime();

//? Q 2

// function welUser() {
//     var firstName = prompt('Enter First Name');
//     var lastName = prompt('Enter Last Name');
//     var fulName = firstName +' '+ lastName;
//     document.write('Salam '+ fulName);
// };
// welUser();

//? Q 3

// function addNumbers(){
//     var num1 = +prompt('Enter 1st Number');
//     var num2 = +prompt('Enter 2st Number');
//     var sum = num1 + num2;
//     return sum
// }
// var add = addNumbers();
// document.write(add);

//? Q 4

// function calcu(num1, op, num2){
//     var num1 = +prompt('Enter 1st Number');
//     var op = prompt("Enter Operator(+, -, *, /):");
//     var num2 = +prompt('Enter 2nd Number');
//     switch (op) {
//     case '+':
//     result = num1 + num2;
//     break;
//     case '-':
//     result = num1 - num2;
//     break;
//     case '*':
//     result = num1 * num2;
//     break;
//     case '/':
//     if (num2 === 0) {
//     return "It Can't Division by zero.";
//     };
//     result = num1 / num2;
//     break;
// default:
// return "Invalid operator. Please use +, -, *, or /.";
// };
//     return result;
// };
// var ab = calcu();
// document.write(ab);

//? Q 5

// function square(number) {
//     return number * number;
// }

// var userInp = +prompt('Enter Any Number For Square Root');
// var result = square(userInp);
// document.write("The square of " + userInp + " is: " + result);

//? Q 6

// function factorialRecursive(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         var num = factorialRecursive(number - 1)
//         var mul = number * num;
//         return mul
//     }
// }
// var inputNumber = +prompt('Enter Any Number');
// var result = factorialRecursive(inputNumber);
// document.write("The factorial of " + inputNumber + " is: " + result);

//? Q 7

// function countNumbers(start, end) {
//     if (isNaN(start) || isNaN(end)) {
//         return "Invalid input. Please enter valid numbers.";
//     }
//     start = +(start);
//     end = +(end);
//         var result = "";
//         for (var i = start; i <= end; i++) {
//             result += i + " ";
//         }
        
//         if (start >= end){
//             return "End number must be greater than or equal to start number.";
//         }
        
//         return result;
// }

// var startNumber = +prompt("Enter the start number:");
// var endNumber = +prompt("Enter the end number:");
// var counting = countNumbers(startNumber, endNumber);
// if (counting === "Invalid input. Please enter valid numbers." || counting === "End number must be greater than or equal to start number.") {
//     document.write(counting);
// } else {
//     document.write("Counting: " + counting);
// }

//? Q 8

// var base = prompt('Enter Base');
// var perpendicular = prompt('Enter Perpendicular');
// var hypotenuse = calculateHypotenuse(base, perpendicular);

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//         return x * x;
//     }
    
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
    
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
    
//     return hypotenuse;
// }

// document.write("For a right-angled triangle with base " + base + " and perpendicular " + perpendicular + "," + "<br>");
// document.write("The hypotenuse is: " + hypotenuse + "<br>");

//? Q 9
//! i
// function calcRectAreaByVal(width, height) {
//     return width * height;
// }
// var area1 = calcRectAreaByVal(5, 8);
// document.write("The area of the rectangle is (using values): " + area1 + '<br>');

//! ii
// function calcuRectAreaByVar(width, height) {
//     return width * height;
// }
// var rectWidth = 5;
// var rectHeight = 8;
// var area2 = calcuRectAreaByVar(rectWidth, rectHeight);
// document.write("The area of the rectangle is (using variables): " + area2);

//? Q 10

// function isPalindrome(str) {
//     str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     return str === str.split('').reverse().join('');
// }

// var inputString = prompt("Enter Any Word");
// if (isPalindrome(inputString)) {
//     document.write(inputString + " is a palindrome.");
// } 
// else{
//     document.write(inputString + " is not a palindrome.");
// }

//? Q 11

// function capiWords(inputString) {
//     var words = inputString.split(' ');

//     var capitalWords = words.map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     var resultString = capitalWords.join(' ');
  
//     return resultString;
// }

//   var inputString = 'the quick brown fox';
//   var outputString = capiWords(inputString);
//   document.write('String: '+ inputString + "<br>")
//   document.write('Output: ' + outputString); 
  
//? Q 12

// function LongestWord(inpStr) {
//     var words = inpStr.split(' ');
  
//     var longWord = '';
//     var longestWordLength = 0;
//     for (var word of words) {
//       if (word.length > longestWordLength) {
//         longWord = word;
//         longestWordLength = word.length;
//       }
//     }
  
//     return longWord;
//   }
  
//   var inpStr = 'Web Development Tutorial';
//   var longWord = LongestWord(inpStr);
//   document.write(inpStr + "<br>"); 
//   document.write(longWord); 
  
//? Q 13

// function countOccurr(inpStr, letter) {
//     var count = 0;
  
//     for (var i = 0; i < inpStr.length; i++) {
//       if (inpStr[i] === letter) {
//         count++;
//       }
//     }
  
//     return count;
// }
//   var inpStr = 'JSResourceS.com';
//   var letterToCount = 'o';
//   var result = countOccurr(inpStr, letterToCount);
//   document.write('The letter ' + letterToCount + ' appears ' + result+ ' times in the string.');
  
//? Q 14
// function calcCircum(radi) {
//     var  circumference = 2 * Math.PI * radius;
//     document.write('The circumference is' +circumference + '<br>');
//   }
//   function calcArea(radius) {
//     var  area = Math.PI * Math.pow(radius, 2);
//     document.write(`The area is ${area}`);
//   }
//   var  radi = 5;   calcCircum(ri);
//   calcArea(radi);