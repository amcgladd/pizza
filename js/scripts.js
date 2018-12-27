//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.runningPrice = 10;
  this.toppingPics = [];
}

Pizza.prototype.price = function() {
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


    if(newPizza.toppings.length < 1) {
      picOutput = '<h2>no toppings</h2>'
    } else {
      newPizza.toppings.forEach(function(element) {
        if (element === "Pepper") {
          newPizza.toppingPics += '<img class="output-pic" src="img/pepper.png">';
        } else if (element === "Mushrooms") {
          newPizza.toppingPics += '<img class="output-pic" src="img/mushroom.png">';
        } else if (element === "Onions") {
          newPizza.toppingPics += '<img class="output-pic" src="img/onion.png">';
        } else if (element === "Sausage") {
          newPizza.toppingPics += '<img class="output-pic" src="img/sausage.png">';
        } else if (element === "Bacon") {
          newPizza.toppingPics += '<img class="output-pic" src="img/bacon.png">';
        } else if (element === "Extra Cheese") {
          newPizza.toppingPics += '<img class="output-pic" src="img/cheese.png">';
        }
      });
    }

    $("ul#pizza-cart").append("<li><span class='cart-item'>" + newPizza.cartName() + "</span>" +
    "<div class='cart-detail'>"+ newPizza.toppingPics + "</div></li>");

    $(".pic-output").html(newPizza.toppingPics);
    $("#output").slideDown();

    $("span.cart-item").last().click(function() {
      $(this).next().toggle();
    })
  });
})
