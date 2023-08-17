var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Deriving from the person class
var Person = (function () {
    function Person(
        //Automatically defines a parameter for this
        //Declares an implicit property when public and type are given in constructor
        firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        //Now there is no need for assignment
    }
    Person.prototype.greetMe = function () {
        console.log("Hello " + this.firstName);
        //Able to use property even though it is implicit
    };
    return Person;
}());
//Creating a class which derives from person
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(
        //Can just previous fields and properties using base
        firstName, //if defined in base, no need to re-use the keyword for access level (public)
        lastName, email, age, grade //does not exist in base class, so needs private keyword to become property automatically
    ) {
        var _this = 
        //Call base class constructor and pass in base parameters
        _super.call(this, firstName, lastName, email, age) || this;
        _this.grade = grade; //does not exist in base class, so needs private keyword to become property automatically
        return _this;
    }
    //Now overriding greetMe in the super class
    Student.prototype.greetMe = function () {
        //Call into and use the base class code in this overridden method
        _super.prototype.greetMe.call(this);
        console.log("I am in the " + this.grade + " grade");
    };
    return Student;
}(Person));
//Instantiate and test the example inheriting class
var student = new Student('Erin', 'Eland', 'erin@erineland.com', 23, "12th");
student.greetMe();
//# sourceMappingURL=inheritance.js.map