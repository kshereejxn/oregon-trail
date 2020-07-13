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
class Traveler {
    constructor (name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt(){
        //increase food by 2
    }
    eat(){
        //consume 1 unit of food
        //no food means isHealthy false
    }
}
class Wagon {
    constructor (capacity){
        this.capacity = capacity
        this.passengersList = []
    }
    getAvailableSeatCount(){
        /*Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.*/
    }
    join(traverler){
        /*Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.*/
    }
    shouldQuarantine(){
        /*Returns true if there is at least one unhealthy person in the wagon. Return false if not.*/
    }
    totalFood (){
        //Returns the total amount of food among all passengers in the wagon.
    }
}