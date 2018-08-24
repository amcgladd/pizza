//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
    var runningPrice = 10;
    if (this.size === "Medium") {
      runningPrice += 2;
    } else if (this.size === "Large") {
      runningPrice += 4;
    }
    runningPrice += this.toppings.length;
    return runningPrice;
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
    $("#price").text(finalPrice);
  })
})
