var Person = (function () {
    //Now creat the constructor using keyword
    function Person(fn, ln, email, age) {
        //Assign parameters to the fields and properties alreayd declared
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
        //Be sure to use 'this' keyword
    }
    //Constructors are not required
    //Now create a method
    Person.prototype.greetme = function () {
        console.log("Hello " + this.firstName);
    };
    return Person;
}());
//Instantiate the new class
var p = new Person("***REMOVED***", "***REMOVED***", "***REMOVED***@***REMOVED******REMOVED***.com", 23);
//Invoke method on the new class
p.greetme();
//# sourceMappingURL=person.js.map