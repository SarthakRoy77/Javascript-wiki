/*
Question: Animal Zoo Manager
Create a Zoo system with classes:

Base class: Animal

Constructor takes name and species.

    Instance method makeSound() → returns "${name} makes a generic sound".

    Static method getAnimalCount() → returns total Animal objects created (across all subclasses). Use a static property to track this.

    Child class: Dog (extends Animal)
*/

class Animal{
    static animalCount = 0

    constructor(name1, species){
        this.name1 = name1;
        this.species = species;
        Animal.animalCount++;
    }
    makeSound(){
        console.log(`${(this.name1)} makes a generic sound`);

    }

    static getAnimalCount(){
        console.log(`${Animal.animalCount} Animal subclasses have been created `)
    }

}

class Dog extends Animal{

    getName(){
        return this.name1;
    }
}

const Dog1 = new Dog("dog", "Labrador");
Dog1.makeSound();
Dog1.getName();
Animal.getAnimalCount();
console.log(Dog1.name1);
console.log(Dog1.species);
