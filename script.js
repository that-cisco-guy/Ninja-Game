
var leftValue = 450, topValue = 100;

function update(){
    document.getElementById("character").style.left = leftValue+"px";
    document.getElementById("character").style.top = topValue+"px";
    }

document.onkeydown = function(e){
    console.log(e);
        if(e.keyCode == 37) { // LEFT
        leftValue = leftValue - 10;
    }
        else if (e.keyCode == 39) { // RIGHT
        leftValue = leftValue + 10;    		
    }
        else if (e.keyCode == 40) { // DOWN
	    topValue = topValue + 10;
    }
        else if (e.keyCode == 38) { // UP
	    topValue = topValue - 10;
    }
    update();
}
