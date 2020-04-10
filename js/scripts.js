////////////////// Back-end ///////////////
function Pizza() {
  this.cost = 0;
}

Pizza.prototype.sizePrice = function (size) {
  if (size === "1") {
    this.cost += 5;
  } else if (size === "2" ) {
    this.cost += 8;
  } else if (size === "3") {
    this.cost += 11;
  }
  return this.cost;
}

Pizza.prototype.toppingsPrice = function (toppings) {
  if (toppings) {
    this.cost += 1.50;
  }
  return this.cost;
}

Pizza.prototype.total = function () {
  let total = this.cost;
  return total;
}
////////////////// Front-end //////////////////

// function to check for order details //

// function checkForOrderSubmit(usersTotal) {
//   if ($("#orderSubmit")) {
//     $("#ordersList").append("<li>" + usersTotal + "</li>");
//   }
// }

$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    let theUsersPizza = new Pizza();
    let theUsersSize = $("[name = size]").val();
    theUsersPizza.sizePrice(theUsersSize);
    $("input:checkbox[name = topping]:checked").each(function () {
      let usersToppings = $(this).val();
      theUsersPizza.toppingsPrice(usersToppings);
    });
    let usersTotal = theUsersPizza.total();
    $("#output").text("Your total for this order is: $" + usersTotal);
    // checkForOrderSubmit(usersTotal);
    // console.log(checkForOrderSubmit(usersTotal));
    // $("#output").append(". Would you like to place another order?")
  });
});