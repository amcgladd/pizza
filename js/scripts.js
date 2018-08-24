//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.runningPrice = 10;
}

Pizza.prototype.price = function() {
  // var runningPrice = 10;
  if (this.size === "Medium") {
    this.runningPrice += 2;
  } else if (this.size === "Large") {
    this.runningPrice += 4;
  }
  this.runningPrice += this.toppings.length;
  return this.runningPrice;
}

//user interface logic
$(document).ready(function() {
  $("#userInput").submit(function(event){
    event.preventDefault();

    var inputtedSize = $("input:radio[name=sizeRadios]:checked").val();
    var inputtedToppings = [];
    $("input:checkbox:checked").each(function(){
      inputtedToppings.push($(this).val());
    });

    var newPizza = new Pizza(inputtedSize, inputtedToppings);
    var finalPrice = newPizza.price();
    $(".sizeOutput").text(newPizza.size.toLowerCase());
    $(".priceOutput").text(newPizza.runningPrice);
    var picOutput = "";

    newPizza.toppings.forEach(function(element) {
      if (element === "Pepper") {
        picOutput += '<img class="output-pic" src="img/pepper.png">';
      } else if (element === "Mushrooms") {
        picOutput += '<img class="output-pic" src="img/mushroom.png">';
      } else if (element === "Onions") {
        picOutput += '<img class="output-pic" src="img/onion.png">';
      } else if (element === "Sausage") {
        picOutput += '<img class="output-pic" src="img/sausage.png">';
      } else if (element === "Bacon") {
        picOutput += '<img class="output-pic" src="img/bacon.png">';
      } else if (element === "Extra Cheese") {
        picOutput += '<img class="output-pic" src="img/cheese.png">';
      }

      $(".pic-output").html(picOutput);
      $("#output").slideDown();

    })
  })
})
