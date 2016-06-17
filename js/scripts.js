// function Pizza() {
//   this.base = base;
//   this.sause = sause;
//   this.toppings = [];
// }
// function Toppings () {
//   this.chicken = chicken;
//   this.olives = olives;
//   this.mozzarella = mozzarella;
//   this.champignons = champignons;
// }
//
// Pizza.prototype.myOrder = function() {
//
// }

// user interface logic
$(document).ready(function(){
  $("form#ingredients").submit(function(event) {
    event.preventDefault();
    var selected = [];
    $('input:checked').each(function() {
        selected.push($(this).attr('value'));
    });
    var price = 0;
    for (var i in selected) {
      price += parseInt(selected[i]);
    }
    $("#price").html(price);
  });
});
