//Deriving from the person class
class Person{
    constructor(
        //Automatically defines a parameter for this
        //Declares an implicit property when public and type are given in constructor
        public firstName : string,
        public lastName : string,
        public email : string,
        private age: number
    ) {
        //Now there is no need for assignment
    }

    greetMe () {
        console.log(`Hello ${this.firstName}`);
        //Able to use property even though it is implicit
    }
}

//Creating a class which derives from person
class Student extends Person {
    constructor(
        //Can just previous fields and properties using base
        firstName : string, //if defined in base, no need to re-use the keyword for access level (public)
        lastName: string,
        email: string,
        age: number,
        private grade: string //does not exist in base class, so needs private keyword to become property automatically
    ) {
        //Call base class constructor and pass in base parameters
        super(firstName, lastName, email, age);
    }

    //Now overriding greetMe in the super class
    greetMe () {

        //Call into and use the base class code in this overridden method
        super.greetMe();
        console.log(`I am in the ${this.grade} grade`);
    }
}

//Instantiate and test the example inheriting class
let student = new Student('***REMOVED***', '***REMOVED***', '***REMOVED***@***REMOVED******REMOVED***.com', 23, "12th");
student.greetMe();