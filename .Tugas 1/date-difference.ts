//Function formula
function calculateDayDifference1(date1: string, date2: string): number {
    const d1: Date = new Date(date1);
    const d2: Date = new Date(date2);
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
        throw new Error("Invalid date format. Please use 'YYYY-MM-DD'.");
    }
    const timeDifference: number = d2.getTime() - d1.getTime();
    const dayDifference: number = timeDifference / (1000 * 60 * 60 * 24);
    return dayDifference;
}
//Display the result
console.log(calculateDayDifference1("2025-03-19", "2025-03-21")); //Enter Value