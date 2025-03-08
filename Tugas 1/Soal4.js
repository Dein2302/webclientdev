//Get difference between dates in days
function dateDifference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const day1 = d1.getDate();
    const day2 = d2.getDate();
    return day2 - day1;
}

console.log(dateDifference("2025-03-19", "2025-03-21"));