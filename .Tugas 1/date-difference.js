//Function formula
function calculateDayDifference(date1, date2) {
    var d1 = new Date(date1);
    var d2 = new Date(date2);
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
        throw new Error("Invalid date format. Please use 'YYYY-MM-DD'.");
    }
    var timeDifference = d2.getTime() - d1.getTime();
    var dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    return dayDifference;
}
//Display the result
console.log(calculateDayDifference("2025-03-19", "2025-03-21")); //Enter Value
