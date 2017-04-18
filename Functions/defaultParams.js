function addit(num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    var total = num1 + num2 + num3;
    return total;
}
var defaultAnswer = addit(14, 23, 30);
console.log("Adding three numbers " + defaultAnswer);
//Test default param by passing in only 2 numbers
defaultAnswer = addit(14, 23);
console.log("Adding three numbers " + defaultAnswer);
//# sourceMappingURL=defaultParams.js.map