var isString = false;
    var isVariable = false;
    var isComment = false;
    for(var i = 0; i < document.getElementsByTagName("b").length; i++){
        document.getElementsByTagName("b")[i].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    
    for(var i = 0; i < document.getElementsByClassName("php").length; i++){
        var color = function(wtr, colour, special){
            var replaces = "<span style='color:" + colour + "'>" + wtr + "</span>";
            if(special !== "comment"){
                if(!isString && !isComment){
                    document.getElementsByClassName("php")[i].innerHTML = document.getElementsByClassName("php")[i].innerHTML.replace(wtr, replaces);
                    
                }
            }else{
                var quant = document.getElementsByClassName("php")[i].innerHTML.match(wtr);
                document.getElementsByClassName("php")[i].innerHTML = document.getElementsByClassName("php")[i].innerHTML.replace(quant, replaces);
            }
        };
        color("echo", "blue");
        color("print", "blue");
        color("if", "purple");
        color("else", "purple");
        color("elseif", "purple");
        color("php", "blue");
        color(".", "rgb(158, 158, 158)");
        color(/\$\w+/gi, "green")
        color(/#(\w+)+/gi, "red", "comment");
    }
