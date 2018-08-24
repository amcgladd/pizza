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

Pizza.prototype.cartName = function() {
  return this.size + " - $" + this.runningPrice;
}

//user interface logic
$(document).ready(function() {
  $("#add-button").click(function() {
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

    if(newPizza.toppings.length < 1) {
      picOutput = '<h2>no toppings</h2>'
    } else {
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
      });
    }

    $("ul#pizza-cart").append("<li><span class='cart-item'>" + newPizza.cartName() + "</span></li>" +
    "<span id='cart-detail'>"+ newPizza.toppings + "</span>");

    $(".pic-output").html(picOutput);
    $("#output").slideDown();
  })

  $(".cart-item").last().click(function() {
    $("#cart-detail").show();
  });
})
