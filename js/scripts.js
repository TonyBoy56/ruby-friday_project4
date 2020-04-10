////////////////// Back-end ///////////////
function Pizza() {
  this.cost = 0;
}

Pizza.prototype.sizePrice = function (size) {
  if (size ===)
}

////////////////// Front-end //////////////////
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var theUsersSize = $("[name = size]").val();
  });
});