// 1. Write a JavaScript function that reverse a number. 
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNumber(32243)); // Output: 34223

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/\s+/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}
console.log(isPalindrome("nurses run")); // Output: true

// 3. Write a JavaScript function that generates all combinations of a string.
function getCombinations(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}
console.log(getCombinations("dog")); // Output: ["d", "do", "dog", "o", "og", "g"]

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function alphabetizeString(str) {
    return str.split('').sort().join('');
}
console.log(alphabetizeString("webmaster")); // Output: "abeemrstw"

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
console.log(capitalizeFirstLetter("the quick brown fox")); // Output: "The Quick Brown Fox"

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("Web Development Tutorial")); // Output: "Development"

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("The quick brown fox")); // Output: 5

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true

// 9. Write a JavaScript function which accepts an argument and returns the type.
function getType(arg) {
    return typeof arg;
}
console.log(getType(42)); // Output: "number"

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(i === j ? 1 : 0);
        }
        matrix.push(row);
    }
    return matrix;
}
console.log(identityMatrix(3)); // Output: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function secondLowestAndGreatest(arr) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => a - b);
    return {
        secondLowest: uniqueArr[1],
        secondGreatest: uniqueArr[uniqueArr.length - 2]
    };
}
console.log(secondLowestAndGreatest([1, 2, 3, 4, 5])); // Output: { secondLowest: 2, secondGreatest: 4 }

// 12. Write a JavaScript function which says whether a number is perfect.
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
console.log(isPerfect(6)); // Output: true

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function getFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(getFactors(12)); // Output: [1, 2, 3, 4, 6, 12]

// 14. Write a JavaScript function to convert an amount to coins.
function amountToCoins(amount, coins) {
    const result = [];
    for (const coin of coins) {
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }
    return result;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1])); // Output: [25, 10, 10, 1]

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function power(b, n) {
    return Math.pow(b, n);
}
console.log(power(2, 3)); // Output: 8

// 16. Write a JavaScript function to extract unique characters from a string. 
function extractUniqueChars(str) {
    const uniqueChars = new Set(str);
    return Array.from(uniqueChars).join('');
}
console.log(extractUniqueChars("thequickbrownfoxjumpsoverthelazydog")); // Output: "thequickbrownfxjmpsvlazydg"

// 17. Write a JavaScript function to get the number of occurrences of each letter in a specified string.
function letterOccurrences(str) {
    const occurrences = {};
    for (const char of str) {
        if (char !== ' ') {
            occurrences[char] = (occurrences[char] || 0) + 1;
        }
    }
    return occurrences;
}
console.log(letterOccurrences("the quick brown fox jumps over the lazy dog")); // Output: { t: 2, h: 2, e: 3, q: 1, u: 2, i: 1, c: 1, k: 1, b: 1, r: 2, o: 4, w: 1, n: 1, f: 1, x: 1, j: 1, m: 1, s: 1, v: 1, l: 1, a: 1, z: 1, y: 1, d: 1 }

// 18. Write a function for searching JavaScript arrays with a binary search. 
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; 
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2

// 19. Write a JavaScript function that returns array elements larger than a number. 
function largerThan(arr, num) {
    return arr.filter(element => element > num);
}
console.log(largerThan([1, 2, 3, 4, 5], 3)); // Output: [4, 5]

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
function generateRandomId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
console.log(generateRandomId(10)); // Output: Random string of length 10

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
function subsetsOfLength(arr, length) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            result.push([arr[i], arr[j]]);
        }
    }
    return result;
}

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
function countLetterOccurrences(str, letter) {
    let count = 0;
    for (const char of str) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}
console.log(countLetterOccurrences("microsoft.com", "o")); // Output: 3

// 23. Write a JavaScript function to find the first not repeated character. 
function firstNonRepeatedChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeatedChar("abacddbec")); // Output: "e"

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); // Output: [1, 4, 9, 12, 23, 64, 84, 98, 122, 213, 234, 345, 455, 546, 3223]

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
function longestCountryName(countries) {
    let longestName = '';
    for (const country of countries) {
        if (country.length > longestName.length) {
            longestName = country;
        }
    }
    return longestName;
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"])); // Output: "United States of America"

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestUniqueSubstring(str) {
  let seen = {}, start = 0, maxLength = 0, longest = '';
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]] >= start) {
      start = seen[str[i]] + 1;
    }
    seen[str[i]] = i;
    if (i - start + 1 > maxLength) {
      maxLength = i - start + 1;
      longest = str.slice(start, i + 1);
    }
  }
  return longest;
}
console.log(longestUniqueSubstring("abcabcbb")); // Output: "abc"

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
function longestPalindrome(str) {
  let max = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substr = str.slice(i, j + 1);
      if (substr === substr.split('').reverse().join('') && substr.length > max.length) {
        max = substr;
      }
    }
  }
  return max;
}

console.log(longestPalindrome("bananas")); // Output: "anana"

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function greet(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const name = "kishore";
  return callback(name);
}

console.log(processUserInput(greet)); // Output: Hello, kishore!

// 29. Write a JavaScript function to get the function name. 
function sampleFunction() {}

function getFunctionName(func) {
  return func.name;
}

console.log(getFunctionName(sampleFunction)); // Output: "sampleFunction"