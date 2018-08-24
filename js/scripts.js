//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.addToppings = function() {
  //push selected toppings to this.toppings
}

Pizza.protoype.price = function() {
  var runningPrice = 10;
  if(this.size === "Medium") {
    runningPrice += 2;
  } else if (this.size === "Large") {
    runningPrice +=4;
  }
  if(this.toppings.length > 0) {
    runningPrice += this.toppings.length;
  }
  return runningPrice;
}


//user interface logic
