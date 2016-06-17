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

  $('form').click(function(){

     var id = this.id;
     if(id == 'italiano')
       // page background
         alert('Italiano');
     else
         alert('something else');
       //header
  })





  $("form#ingredients").submit(function() {
    event.preventDefault();
    var selected = [];
    $('input:checked').each(function() {
        selected.push($(this).attr('value'));
    });
    var price = 0;
    for (var i in selected) {
      price += parseFloat(selected[i]);
    }
    $("#price").html(price);
  });
});
