//ideas for how to strcture our program

function Scene (zone, item, verb) {
this.zone = zone;
this.item = item;
this.verb = verb;
}

var entrance = new Scene(entrance, ticket, grab);
//literal notation for entrance
var entrance = {
  zone: entrance,
  item: ticket,
  verb: grab
  }

//navigation css
div#entrance
//add event handler
getElementbyId('#entrance').onClick(entrance)
