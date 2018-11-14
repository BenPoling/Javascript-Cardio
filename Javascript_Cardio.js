// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log('Reverse String :', reverseString('hello'));
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
function isPalindrome(str) {
  //reverse str then check if it === str then output true or false
  let reverseStr = str.split('').reverse().join('');
  if(str === reverseStr) {
      return true;
  } else {
      return false;
  }
}

console.log('Palindrome check :', isPalindrome('madam'));
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
function reverseInt(int) {
  //split number
  let string = int + '';
  let splitStr = string.split('');
  let array = [];
  //loop over split num passing in numbers to empty array
  for(i = 0; i < splitStr.length; i++) {
    if(splitStr[i] != '-') {
    array.push(Number(splitStr[i]));
    }
  }
  array.reverse();
  if(splitStr[0] === '-') {
    array.unshift('-')
  }
  return array.join('');
}

console.log('Reverse Number :', reverseInt(-425));
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {}
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

}
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of 
  //the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples 
  //of both 3 and 5, print "FizzBuzz". Return it as a string that line breaks every 10 numbers.
function fizzBuzz() {
  //declare string
  //declare count
  let count = 0
  let string = '';
  for(i = 1; i <= 100; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        string += 'FizzBuzz ';
        count++;
      } else if(i % 3 === 0) {
        string += 'Fizz ';
        count++;
      } else if(i % 5 === 0) {
        string += 'Buzz '
        count ++;
      } else {
        string += i + ' ';
        count++
      }
      if(count % 10 === 0) {
        string += '\n';
      }
  }
  //loop over 1 to 100 adding the numbers, fizz, buzz, or fizzbuzz to the string adding 
  //in the line break every 10 numbers
  return string;
}

console.log('FizzBuzz : ', fizzBuzz());



  