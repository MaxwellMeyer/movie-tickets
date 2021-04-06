function Ticket(movie, time, age) {
  this.movie = movie
  this.time = time;
  this.age = age;
  this.price = 10;
}

Ticket.prototype.priceMe = function() {
  switch(this.time) {
    case "morning":
      this.price -= 2;
      break;
    case "night":
      this.price += 5;
      break;
  }
  switch(this.age) {
    case "kid":
      this.price -= 5;
      break;
    case "senior":
      this.price -= 3;
      break;
  }
  return this.price;
}

$(document).ready(function(){
  $(".movie").submit(function(event){
    event.preventDefault();
    const selectedMovie = $("#movies").val();
    const selectedTime = $("#time").val();
    const selectedAge = $("#age").val();
    const ticketObject = new Ticket(selectedMovie, selectedTime, selectedAge);
    $(".cost").text(ticketObject.priceMe());
    $(".result").fadeIn();
  });
});