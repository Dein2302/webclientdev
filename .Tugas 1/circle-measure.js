//Find diameter, circumference and area of a circle
function circleMeasure(radius) {
    const diameter = 2 * radius;
    const circumference = (2 * Math.PI * radius);
    const area = (Math.PI * radius * radius);
    return `${diameter}, ${circumference}, ${area}`;
}
console.log(circleMeasure(5));