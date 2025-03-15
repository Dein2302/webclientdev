//Function formula
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

//Display the result
const string = "madam"; //Enter Value
const result = isPalindrome(string);
console.log(result); 