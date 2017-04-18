function person(value) {
    switch (typeof value) {
        case "string":
            return "my name is " + value;
        case "number":
            return "my age is " + value;
        case "boolean":
            return value ? "I'm married" : "I'm not married";
    }
}
//Depending on param type, the correct overloaded function is used
console.log(person('Jesse'));
console.log(person(21));
console.log(person(true));
//So to overload a function in typescript, have a single method, 
//but multiple signatures which accept the varying types 
//# sourceMappingURL=overloading.js.map