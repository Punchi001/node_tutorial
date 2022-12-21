var grade = -0;

if (grade > 99 || grade < 1) {
    console.log("Invalid grade!!");
} else if (grade > 80) {
    console.log("Got an A");
} else if (grade > 65) {
    console.log("Got a B");
} else if (grade > 50) {
    console.log("Got a C");
} else if (grade > 40) {
    console.log("Got a D");

} else if (grade > 1 && grade <= 39) {
    console.log("Fail");
} else {
    console.log("grade must not be in chararacters rather than numbers!!");
}