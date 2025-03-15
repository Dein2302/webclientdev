//Print name initials in uppercase
function nameInitials(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
console.log(nameInitials("John Doe"));