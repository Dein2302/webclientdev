//Function formula
function removeFirstOccurrence(mainString, searchString) {
    return mainString.replace(searchString, '');
}

//Display the result
const string = "Hello world";
const searchString = "ell"; //Enter Value
const result = removeFirstOccurrence(string, searchString);
console.log(result);