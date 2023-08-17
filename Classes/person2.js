var Person2 = (function () {
    function Person2(
        //Automatically defines a parameter for this
        //Declares an implicit property when public and type are given in constructor
        firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        //Now there is no need for assignment
    }
    Person2.prototype.greetMe = function () {
        console.log("Hello " + this.firstName);
        //Able to use property even though it is implicit
    };
    return Person2;
}());
var p2 = new Person2('Erin', 'Eland', 'erin@erineland.com', 23);
//Same as before but a much cleaner class with less code
p2.greetMe();
//# sourceMappingURL=person2.js.map