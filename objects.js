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

// class = (E26 feature) provides a more structural and cleaner way to
//           work with objects compared to traditional constructor function
//          and also helps with new concepts that are to be learned.
//          e.x. static keyword, encapsulation, inheritance

class Product{
    constructor(name1, price){
        this.name1 = name1;
        this.price = price;}

        displayProduct(){
            console.log(`Product Name: ${this.name1}`);
            console.log(`Product Price: $${this.price}`);
        }
}

const Product1 = new Product("Shirt", 19.99)
Product1.displayProduct();

// static keyword = defines properties or methods that belong to a class itself rather than
//                  the objects created by the class(class owns anything static, not the objects)

class CircleUtil{
    static PI = 3.14159;

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return 2 * Math.pow(radius, 2);
    }
}

console.log(CircleUtil.PI);
console.log(CircleUtil.getCircumference(10));
console.log(CircleUtil.getArea(10));

// inheritance = allows a new class to inherit properties and method from
//               an existing class (parent -> child).Helps with code reusability

class Animal{
    alive = true;
    name;

    eat(){
        console.log(`This ${this.name} is eating`)
    }
}

class Rabbit extends Animal{
    name = "Rabbit";
}

const rabbit = new Rabbit() //
rabbit.eat()
console.log(rabbit.alive)
