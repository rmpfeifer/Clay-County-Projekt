const xscale = 28;
const yscale = 28.2;
let xPos = 0;
let yPos = 0;
let highlight_x = 0;
let highlight_y = 0;
let offsetX = 0;
let offsetY = 0;
let canvas_back = document.getElementById('canvas_back');
let canvas_front = document.getElementById('canvas_front');
let ctx_back = canvas_back.getContext('2d');
let ctx_front = canvas_front.getContext('2d');

let img = new Image();
img.src = "IMG/mapcc.png"

img.onload = function(){          
    ctx_back.drawImage(img,0,0);  
};

function runHigh(inputR,inputT,inputS){
    if(inputS >= 1 && inputS < 7){
        //firstrow
        offsetY = 1
        offsetX = (7-(inputS%6))
    }
    else if(inputS >= 7 && inputS < 13){
        //secondrow
        offsetY = 2
        offsetX = ((inputS%6))
    }
    else if(inputS >= 13 && inputS < 19){
        //thirdrow
        offsetY = 3
        offsetX = (7-(inputS%6))
    }
    else if(inputS >= 19 && inputS < 25){
        //fourthrow
        offsetY = 4
        offsetX = ((inputS%6))
    }
    else if(inputS >= 25 && inputS < 31){
        //fifthrow
        offsetY = 5
        offsetX = (7-(inputS%6))
    }
    else if(inputS >= 31){
        //sixthrow
        offsetY = 6
        offsetX = ((inputS%6))
    } 

    xPos = ((inputR-1)*6)+offsetX;
    yPos = (((inputT-6))*6)+offsetY;
    highlight_x = (xscale * xPos) + 15;
    highlight_y = (yscale * yPos) + 65;
    highlightTownship();
};


function highlightTownship(){    
    ctx_front.fillStyle = 'rgba(225, 225, 0, 0.25)';
    ctx_front.fillRect(highlight_x, highlight_y, xscale, yscale);
};


//----- Clickmap not needed yet-----//
// function clickmap(){
//     console.log("yes")
//     function display(event) {
//          let X = event.clientX;
//          let Y = event.clientY;
//          let result = document.getElementById("result");
//          result.innerHTML = "<b>X-coordinate: </b>" + X + "<br><b>Y-coordinate: </b>: " + Y;
//       }
// }

// canvas_front.addEventListener("click", clickmap, false);
