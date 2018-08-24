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
    $(".size").text(newPizza.size);
    $(".priceOutput").text(newPizza.runningPrice);
    $("#output").show();
  })
})
