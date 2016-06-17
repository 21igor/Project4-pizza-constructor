function Pizza() {
  this.base = base;
  this.sause = sause;
  this.toppings = [];
}
function Toppings () {
  this.chicken = chicken;
  this.olives = olives;
  this.mozzarella = mozzarella;
  this.champignons = champignons;
}

Pizza.prototype.myOrder = function() {

}

// user interface logic
$("form#ingredients").submit(function(event) {
  event.preventDefault();
  var selected = [];
  $('input:checked').each(function() {
      selected.push($(this).attr('value'));
  });
});
