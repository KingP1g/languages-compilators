//Aiden de Castro
var TRUNK_WIDTH = 50;
var TRUNK_HEIGHT = 100;
var TRUNK_COLOR = "#654321";
var xPos = getWidth()/2 - TRUNK_WIDTH / 2;
var yPos = getHeight() - TRUNK_HEIGHT;
var DELAY = 200;
var LIGHT_RADIUS = 5;
var LIGHTS_ROW1 = 11;
var LIGHTS_ROW2 = 19;
var LIGHTS_ROW3 = 27;
var ORNAMENT_RADIUS = 10;
var ORNAMENT_SIDE_LENGTH = 25;
var lightArr=[];
var clickNums = 0;


function start(){
    drawTree();
    mouseClickMethod(drawOrnaments);
    drawStar(200, 50);
    drawLights();
    setTimer(blink, DELAY);
}

function drawTree(){
    drawTrunk();
    drawMiddle();
    drawTop();
}

function drawTrunk(){
    var trunk = new Rectangle(TRUNK_WIDTH, TRUNK_HEIGHT);
    trunk.setPosition(xPos, yPos);
    trunk.setColor(TRUNK_COLOR);
    add(trunk);
}

function drawMiddle(){
    var x1 = 0;
    var x2 = getWidth();
    for(var i = 0; i < getWidth()/2; i++){
        var tree = new Line(x1, yPos, x2, yPos);
        tree.setColor(Color.green);
        add(tree);
        yPos--;
        x1++;
        x2--;
    }
}

function drawTop(){
    var x1 = getWidth()/6;
    var x2 = 5*getWidth()/6;
    var count = 0;
    for(var i = 0; i < getWidth()/3; i++){
        var tree = new Line(x1, yPos, x2, yPos);
        tree.setColor(Color.green);
        add(tree);
        yPos--;
        x1++;
        x2--;
        count++;
    }
}

function drawOrnaments(e){
    var color;
    clickNums++;
    if(clickNums % 6 == 1){
        color = Color.red;
    }else if (clickNums % 6 == 2){
        color = Color.blue;
    }else if (clickNums % 6 == 3){
        color = Color.orange;
    }else if (clickNums % 6 == 4){
        color = Color.purple;
    }else if (clickNums % 6 == 5){
        color = Color.cyan;
    }else if (clickNums % 6 == 0){
        color = Color.yellow;
    }
    drawCircle(e.getX(), e.getY(), ORNAMENT_RADIUS, color);
    
}

function drawCircle(x, y, rad, color){
    var ornament = new Circle(rad);
    ornament.setPosition(x, y);
    ornament.setColor(color);
    add(ornament);
}

function drawRectangle(x, y, width, height, color){
    var rect = new Rectangle(width, height);
    rect.setPosition(x - width/2, y - height/2);
    rect.setColor(color);
    add(rect);
}

function drawStar(x, y){
    var x1 = x - 50;
    var x2 = x + 50;
    var y2 = y+10;
    for(var i = 0; i < 50; i++){
        var star = new Line(x1, y, x2, y);
        star.setColor(Color.yellow);
        add(star);
        y--;
        x1++;
        x2--;
    }
    
    for(var i = 0; i < 50; i++){
        var star = new Line(x1, y2, x2, y2);
        star.setColor(Color.yellow);
        add(star);
        y2--;
        x1++;
        x2--;
    }
}

function drawLights(){
    var xPos = 150;
    var yPos = 107;
    for(var i = 0; i < LIGHTS_ROW1; i++){
        drawLight(xPos, yPos);
        if(i < (LIGHTS_ROW1 - 1) / 2){
            yPos+=3
        }else if(i >= LIGHTS_ROW1 / 2){
            yPos-=3;
        }
        xPos+=10;
    }
    xPos = 110;
    yPos = 275;
    for(var i = 0; i < LIGHTS_ROW2; i++){
        drawLight(xPos, yPos);
        if(i < (LIGHTS_ROW2 - 1) / 2){
            yPos+=.5
        }else if(i >= LIGHTS_ROW2 / 2){
            yPos-=.5;
        }
        xPos+=10;
    }
    
    xPos = 70;
    yPos = 320;
    for(var i = 0; i < LIGHTS_ROW3; i++){
        drawLight(xPos, yPos);
        if(i < (LIGHTS_ROW3 - 1) / 2){
            yPos+=.5
        }else if(i >= LIGHTS_ROW3 / 2){
            yPos-=.5;
        }
        xPos+=10;
    }

}

function drawLight(x, y){
    var light = new Circle(LIGHT_RADIUS);
    light.setPosition(x, y);
    light.setColor(Randomizer.nextColor());
    add(light);
    lightArr.push(light);
}

function blink(){
    for(var i = 0; i < lightArr.length; i++){
        lightArr[i].setColor(Randomizer.nextColor());
    }
}
