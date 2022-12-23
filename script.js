var bugsAlive = 15;
var bugsDead = 0;
var empty = false;
var commentArr = [];
function initialize(){
    
}

function clickToSquash(id){
   document.getElementById(String(id)).src= "images/splat.png";
   bugsAlive--;
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
    if(bugsAlive > 8){
        
    }
}