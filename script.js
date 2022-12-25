var bugsAlive = 15;
var bugsDead = 0;
var empty = false;
var aggressiveCom = ["Who do you think you are?", "Splat us again I dare you", "You suck", "We will destroy you", "DIE", "How dare you","Our mother will squash you","Lowly human","Back off you mammal","This is your last chance human", "Our brothers and sisters will destroy you", "(Bug Noises)", "Move","Go do something fun, loser","LEAVE"];
var pleadingCom = ["Please", "Don't squash us anymore","I beg off you stop","Just take the money and leave please", "What do you want", "Forgive us","Take anything you want", "*CRYS*", "I'll do anything for you to stop"];

function initialize(){
    
}

function clickToSquash(id, com){
    var temp = document.getElementById(String(id));
    if(temp.getAttribute('src') === 'images/bug.png'){
        temp.src = "images/splat.png";
        temp.style.width = "200px";
        bugsAlive--;
        comments();
    }
    if(bugsAlive == 0){
        alert("You've splat us all");
    }
}


// function clickToSquash(){
//     if(document.getElementById("bug1").src == "BugSplat-main\images\bug.png"){
//         document.getElementById("bug1").src = "images/splat.png";
//     }
//     else{
//         document.getElementById("bug1").src = "images/splat.png";
//         console.log("DARN");
//     }
//  }
function comments(){
    var randomAggNum = getRandomInteger(0, aggressiveCom.length-1);
    var randomPleadNum = getRandomInteger(0, pleadingCom.length-1);
    console.log(randomAggNum);
    console.log(aggressiveCom[randomAggNum]);
    if(bugsAlive > 8){
        document.getElementById("textComment").value += aggressiveCom[randomAggNum] + '\r\n';
        aggressiveCom.splice(randomAggNum,randomAggNum);
    }
    else{
        console.log(pleadingCom[randomPleadNum]);
        document.getElementById("textComment").value += pleadingCom[randomPleadNum] + '\r\n';
    }
}   

function getRandomInteger(lower, upper){
    var multiplier = upper - (lower - 1);
    var rnd = parseInt(Math.random()*multiplier) + lower;
    return rnd;
}