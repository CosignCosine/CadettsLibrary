var glow = function(whattoglow, color){
    oofoofoofoof = document.getElementById(whattoglow);
    oofoofoofoof.style.color = color;
    oofoofoofoof.style.textShadow = "0px 0px 15px " + color + ", 0px 0px 15px " + color + ", 0px 0px 15px " + color + ", 0px 0px 15px " + color + ", 0px 0px 15px " + color + ", 0px 0px 15px " + color + ", 0px 0px 15px " + color;
}

//What to add?
var createAnimation = function(){
    var args = arguments;
var l = args.length;
var giveback = "";
//wip keyframes, any advice?
    for(var i = 0; i < l; i++){
        giveback += i.percentage + "%{";
    }
}
