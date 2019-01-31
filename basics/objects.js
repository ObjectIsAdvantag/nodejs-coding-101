// Inspired from NodeSchool JavaScripting
// https://github.com/workshopper/javascripting

var pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2,
  };
  
  console.log(pizza);
  console.log(pizza.crust);
  
  pizza.size = "XL";
  pizza.showDetails = function () {
    console.log(`I am a ${pizza.size} pizza with ${this.toppings.length} toppings: ${this.toppings} `);
  }
  pizza.showDetails();