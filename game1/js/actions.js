//TODO Give proper interactions as in define how the players environment is to be setup
//TODO grant actions
//TODO who does what or who goes where   
    

function Start(choice){

    var chances = 5;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    //first Game Scene - entrance to the Carnival where player is expected to start his/her search for BC
    this.entrance = function(choice){
    //story and decisions for the entrance
    switch (choice){
        case "Elephants":
            this.elephants();
            break;
            
        case "Clowns":
            this.clowns();
            break;
            
        case "Lions":
            this.lions();
            break;
            
        case "Monkeys":
            this.monkeys();
            break;
            
        case "Bearded ladies":
            this.bearedLadies();
            break;
            
        case "food stalls":
            this.foodStalls();
            break;
            
        case "main acts":
             this.mainActs();
             break;
             
        //returns you to the entrance if you fail at any given point
        default:
            this.entrance();
            break;   
    }//switch(choice)
   };//entrance
   
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     
    //Elephants Tent
   
    this.elephants= function(choice){
    //story and decisions for the entrance
  
    switch (choice){
        case "north":
            console.log( "something");
            break;
          //a way to keep track of chances the player gets to search
            
        case "south":
        
            chance -= 1;
            if (chance < 1){
                this.entrance();
            }
            this.entrance();
            break;
            
        case "east":
            return "response unknown";
            chance -= 1;
            if (chance < 1){
                this.entrance();
            }
            this.entrance();
            break;
            
        case "west":
            return "response unknown";
            chance -= 1;
            if (chance < 1){
                this.entrance();
            }
            this.entrance();
            break;
            
        //returns you to the entrance if you fail at any given point
        default:
            this.entrance();
            break;   
    }//switch(choice)
   };//Elephants tent

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    //clowns tent  
    this.clowns = function(choice){   
         };//clowns tent

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    //Lions tent
    this.lions = function(choice){            
      };//Lions tent

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    //Lions tent
    this.lions = function(choice){            
      };//Lions tent

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


}//Start() --end of start Class

//entry point of game
var Game = function(){
    //global that tells us if bc has been found
    this.bcFound = false;
    
    //main game loop
    while(bcFound !== true){
        Start("north");     
    }

};


