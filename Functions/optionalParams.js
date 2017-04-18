function add(num1, num2, num3) {
    var total = num1 + num2;
    //To use optional parameter, check first
    if (num3 != undefined) {
        total += num3;
    }
    return total;
}
var answer = add(14, 23, 30);
console.log("adding three numbers: " + answer);
answer = add(14, 23);
//Note the syntax for substitution parameters
console.log("Adding 2 numbers: " + answer);
//# sourceMappingURL=optionalParams.js.map