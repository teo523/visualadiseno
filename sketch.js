// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/RUSvMxxm_Jo

var colorArray = [];
var cursorX;
var cursorY;

function setup() {

cursorX = mouseY;
cursorY = mouseX;
   
        canvas = createCanvas(windowWidth,700);

    

    canvas.parent('canvascontainer');

    
        canvas.position(0, 0);

    
for (let i = 0; i < 100; i++) {
colorArray[i]=[random(256),random(256),random(256)];
}
    

    }

    



    //NOT USED FOR NOW
    /*gifButton = select('#gifButton');
    gifButton.mousePressed(openGif);
    gifButton.style("z-index", "1000");
    gifButton.style("height", "50");
    gifButton.style("width", "50");
    gifButton.hide();
    

    gifButton.position(inp1.width , height - gifButton.height);

    */

   
    // Setup text/draw button, that calls changeMode on click
    // modeButton = createButton('Text')
    // modeButton.style("z-index", "1000");
    // modeButton.style("height", "50");
    // modeButton.style("width", "50");
    // modeButton.position(500, 500);

    /*firebaseConfig = {
       apiKey: "AIzaSyBo4BBv2muAE4Y-yvJ90SYmn5fdwy5L84k",
       authDomain: "nueva-constitucion.firebaseapp.com",
       databaseURL: "https://nueva-constitucion-default-rtdb.firebaseio.com",
       projectId: "nueva-constitucion",
       storageBucket: "nueva-constitucion.appspot.com",
       messagingSenderId: "197438903025",
       appId: "1:197438903025:web:f7bb1385df1724038c0f50",
       measurementId: "G-VNK3XJS5Z5"
     };
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     database = firebase.database();
     storageRef = firebase.storage().ref(); 
   
     var params = getURLParams();
     console.log(params);
     if (params.id) {
       console.log(params.id);
       showDrawing(params.id);
     }
   
     ref = database.ref('drawings');
     ref.on('value', gotData, errData);
   
   */




function draw() {
width = windowWidth;
x = mouseX;
y = mouseY;
noStroke();
background(200,0,0);
for (let i = 0; i < 100; i++) {
    if (abs(x - (i/100)*width) > 50) {
    fill(colorArray[i][0],colorArray[i][1],colorArray[i][2]);}

    else {
        fill(random(256),random(256),random(256));
    }

    
  rect((i/100)*width,0,width/100,height);



}

ellipse(cursorX,cursorY,20,20);

cursorX = 0.93*cursorX+0.07*mouseX;
cursorY = 0.93*cursorY+0.07*mouseY;

for (let i = 0; i < 10; i++) {
    let opacity = map(i, 0, 10, 0, 255);
    noStroke();
    fill(230, 250, 90, opacity);
    circle(
      50 * sin(frameCount / (20 - i)) + mouseX ,
      50 * cos(frameCount / (20 - i)) + mouseY ,
      10
    );
  }

}

function windowResized() {
  resizeCanvas(windowWidth, 700);
}
   


