//JavaScript objects = A collection of related properties and/or methods.
//                      Can represent real-world objects e.g. (people, products, places)
//                      object = {key:value,
//                                function()}

const person1 = {
    firstName: "Sarthak",
    lastName: "Roy",
    age: 40,
    isEmployed: false,
    sayHello: function(){
        console.log('Hello! I am Sarthak Roy.');
    }
}

console.log(person1.age);
person1.sayHello();


//this = reference to object where THIS is used
//      (the object depends on the immediate context)
//      person.name = this.name

const person2 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function() {
        console.log(`HI! I am ${this.name}`);//THIS takes the object in immediate context ,
        // if THIS/objectName is not it would create a reference error
    }
};

person2.sayHello();

//THIS in GEC would return the window object, do not use it with arrow functions!!!

//constructor = a special method for defining methods and properties of objects

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const Car1 = new Car("Ford", "Mustang", 2024, "red");
console.log(Car1.make);
console.log(Car1.model);
console.log(Car1.year);
console.log(Car1.color);
