class Dog {
    constructor (name, breed) {
        this.name = name
        this.breed = breed
        this.isGoodBoy = Boolean("of course")
    }
    sit () {
        // sitting code goes here
    }   
    fetch () {
        // fetching code goes here
    }   
}
class GuardDog extends Dog {
    constructor(name, breed, attackWord) {
        super(name, breed)
        this.attackWord = attackWord
    }
    bark() {
        // barking code here
    }
}
// create an instance of the Dog parent class
const fluffy = new Dog("Fluffy", "Toy Poodle")
// create an instance of the GuardDog child class
const cujo = new GuardDog("Cujo", "St. Bernard", "Go")

class Traveler {
    constructor (name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt(){
        this.food += 2
    }
    eat(){
        if (this.food <= 0){
            return this.isHealthy = false
        }
        else{
            this.food -= 1
        }
        
    }
}

class Wagon {
    constructor (capacity){
        this.capacity = capacity
        this.passengersList = []
    }
    getAvailableSeatCount(){
       return this.capacity - this.passengersList.length
        /*Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.*/
    }
    join(traveler){
        if (this.getAvailableSeatCount() > 0){
            this.passengersList.push (traveler)
        }
        /*Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.*/
    }
    shouldQuarantine(){
        let unhealthy = this.passengersList.some (traveler => traveler.isHealthy === false)
        return unhealthy
        /*Returns true if there is at least one unhealthy person in the wagon. Return false if not.*/
    }
    totalFood (){
        let amountFood = 0
        for (let index = 0; index < this.passengersList.length; index += 1){
            amountFood += this.passengersList[index].food
        }
        return amountFood
        //Returns the total amount of food among all passengers in the wagon.
    }
}