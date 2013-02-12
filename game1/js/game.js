jQuery(document).ready(function($){
    function game(){
        // This contains all of the game dialogue
        var dialogue = [
            "<p>A trusted companion of yours informed you that Bill Cosby is disguised at the circus.</p>",
            "<p>You must find him and get his autograph.</p>",
            "<p>You are standing at the circus entrance, without a penny. What do you do to get in?</p>"
        ],
            userAction = $('#user-action'),
            feedbackContainer = $('.feedback-container'),
            feedback = $('.feedback'),
            positions = {
                entrance: {
                    NORTH : "you can see the ticket booth.",
                    SOUTH : "the street.",
                    WEST  : "sidewalk leading to a group of garbage cans.",
                    EAST  : "a hotdog stand."
                }
            };
            current = positions.entrance,
            directions = [];
            
        for (key in current) {
            directions.push(key);
        }

        // This is where game dialogue gets sent to the player
        feedback.append( dialogue[0] + dialogue[1] + dialogue[2] );

        function availableDirections(){
            var dirlength = directions.length,
                $p = $('<p>').append("Available directions: ")
            for (var i = 0; i < dirlength; i++) {
                if (i !== dirlength - 1){
                    $p.append(directions[i] + ", ");
                } else {
                    $p.append(directions[i]);
                }
            }
            feedback.append($p);
        }

        function send(){
            if (userAction.val() !== "") {
                feedback.append('<p class="command">' + userAction.val() + "</p>");
                switch (userAction.val()) {
                    case "directions":
                        availableDirections();
                        break;
                    default:
                        feedback.append("<p>What?</p>");
                }
            }
            feedbackContainer.scrollTop(feedback.height());
            userAction.val("").focus();
        }

        userAction.keydown(function(event){
            if (event.keyCode === 13) {
                event.preventDefault();
                send();
            }
        });

        userAction.focus();
    }
    game();
});
