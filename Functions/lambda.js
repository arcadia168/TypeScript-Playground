//Like lambda functions in C# TS has arrow functions
//The overly verbose non-arrow function
var multiplyit = function (num1, num2) {
    return num1 * num2;
};
//Can replace the above with a neater arrow function
var multiplyitLambda = function (num1, num2) { return num1 * num2; };
//Can also declare a function like a delegate, wihtout a body
var sayFirstNumber;
//This is like a delegate, where the function params and return type have been defined already
sayFirstNumber = function (first) {
    console.log(first);
};
console.log(multiplyit(5, 7));
console.log(multiplyitLambda(5, 7));
sayFirstNumber(35);
//# sourceMappingURL=lambda.js.map