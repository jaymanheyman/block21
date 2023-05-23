// Define a new class called Car 
class Car {
    // Define a constructor inside the car class
    // constructor takes three parameters: make, model, year
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  // Define a description method within the car class
  // It uses the values stored in the object to generate the description
    getDescription() {
      return `Car: ${this.make} ${this.model} (${this.year})`;
    }
  }
  
  /* Define new class called 'ElectricCar' which extends 
  the car class. In the class we take four parameters, adding the 
  range parameter to it.
  */
  class ElectricCar extends Car {
    constructor(make, model, year, range) {
      super(make, model, year);
      this.range = range;
    }
  /* New implementation that includes cars make, model, year
  and range. */
    getDescription() {
      return `Electric Car: ${this.make} ${this.model} (${this.year}) - Range: ${this.range} miles`;
    }
  }
  
  const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
  console.log(myElectricCar.getDescription());
  