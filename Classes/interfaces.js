//Just a simple interface, like in C#
//Creat a sample class which implements this interface
var TraditionalPhone = (function () {
    //Interface has not been implemented until all interface members are implemented
    function TraditionalPhone(model, version) {
        this.model = model;
        this.version = version;
        //No need for body, use of public in params creates properties and auto-assigns as desired.
    }
    TraditionalPhone.prototype.ring = function () {
        return "ring ring";
    };
    return TraditionalPhone;
}());
//Create another implementation of this interface
var ModernPhone = (function () {
    //Interface has not been implemented until all interface members are implemented
    function ModernPhone(model, version) {
        this.model = model;
        this.version = version;
        //No need for body, use of public in params creates properties and auto-assigns as desired.
    }
    ModernPhone.prototype.ring = function () {
        return "ring tone";
    };
    return ModernPhone;
}());
//Create instances of our test classes
var oldPhone = new TraditionalPhone("Bell", 12.4);
var newPhone = new ModernPhone("iPhone 7", 1.0);
//Create an array of phones, where our 2 types of phone still apply, thanks to the polymorphism of interfaces
var phones = []; //Each phone has interface type of 'Phone' and own type
phones.push(oldPhone);
phones.push(newPhone);
//Iterate over array
//Use for-of shorthand of iterating over a collection in TypeScript
for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
    var index = phones_1[_i];
    //Invoke functionality of each phone
    console.log(index.ring());
}
//# sourceMappingURL=interfaces.js.map