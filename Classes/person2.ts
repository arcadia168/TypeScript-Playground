class Person2{
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

let p2 = new Person2('Erin', 'Eland', 'erin@erineland.com', 23);

//Same as before but a much cleaner class with less code
p2.greetMe();