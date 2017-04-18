interface Phone {
    model: string;
    version: number;
    ring(): string;
}

//Just a simple interface, like in C#

//Creat a sample class which implements this interface
class TraditionalPhone implements Phone {
    //Interface has not been implemented until all interface members are implemented
    constructor (
        public model: string,
        public version: number
    ) {
        //No need for body, use of public in params creates properties and auto-assigns as desired.
    }

    ring () {
        return "ring ring";
    }
}

//Create another implementation of this interface
class ModernPhone implements Phone {
    //Interface has not been implemented until all interface members are implemented
    constructor (
        public model: string,
        public version: number
    ) {
        //No need for body, use of public in params creates properties and auto-assigns as desired.
    }

    ring () {
        return "ring tone";
    }
}

//Create instances of our test classes
let oldPhone = new TraditionalPhone("Bell", 12.4);
let newPhone = new ModernPhone("iPhone 7", 1.0);

//Create an array of phones, where our 2 types of phone still apply, thanks to the polymorphism of interfaces
var phones: Phone[]= []; //Each phone has interface type of 'Phone' and own type
phones.push(oldPhone);
phones.push(newPhone);

//Iterate over array
//Use for-of shorthand of iterating over a collection in TypeScript
for (var index of phones) {
    //Invoke functionality of each phone
    console.log(index.ring());
}
