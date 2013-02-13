//ideas for how to strcture our program

function Scene (zone, item, verb) {
this.zone = zone;
this.item = item;
this.verb = verb;
}

var ElephantScene = new Scene(elephant, peanut, give);
//literal notation for entrance

var goToElephantScene = function (){
  return ElephantScene;
}
//navigation html

//add event handler
<a href='#' onclick='goToElephantScene();'></a>

