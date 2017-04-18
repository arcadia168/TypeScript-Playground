class Person {
    public firstName: string;
    public lastName: string;
    public email: string;
    private age: number;

    //Now creat the constructor using keyword
    constructor(
        fn: string,
        ln: string,
        email: string,
        age: number
    ) {
        //Assign parameters to the fields and properties alreayd declared
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
        //Be sure to use 'this' keyword
    }

    //Constructors are not required

    //Now create a method
    greetme () {
        console.log(`Hello ${this.firstName}`);
    }
}

//Instantiate the new class
let p = new Person("***REMOVED***", "***REMOVED***", "***REMOVED***@***REMOVED******REMOVED***.com", 23);

//Invoke method on the new class
p.greetme();