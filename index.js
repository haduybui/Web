

//This is hoisting - declare variable first, then the reference to the defintion after $(document).ready(function(){});
var clickBait;
var clickNoBait;
var retard;
var isFun = false;
var isOrange = false;

var array = ["haha","hello","hhohhohoh"];

for(index in array){
    console.log("index is: "+index);
    console.log("array["+index+"] is: "+array[index]);
}

var json = {"data":{
                    "entry":{
                        "key1":"value1",
                        "key2":"value1",
                        "key3":"value1",
                        }
                    }
            }

 var nestedJson = json.data.entry;
 for(key in nestedJson){
     console.log(key);
     console.log(nestedJson[key]);
 }

$(document).ready(function(){
    document.getElementById("button4").addEventListener("click", function(){console.log("konnichiwa")});
    // These work++++++++++++++++++++++++++++++++++++++
    $("#button1").on('click',function(){
        $("p").slideToggle();
        $("button").css({"color":"orange"});
    });

    $("#target").on('mouseover mouseout', function() {
          $("h1").slideToggle();
      })
    // These work++++++++++++++++++++++++++++++++++++++

    //These don't-----------------------------------------
    clickNoBait = function() {
        console.log("you have reached the thing");
        alert("Tada");
        $("#target").hide(1000).show(1000);
    };

    retard = function() {
        if(!isFun){
            $("#button2").css({"color":"green"});
            $("h1").css({"color":"blue"});
            isFun = false;
        }
        if(isFun){
            $("#button2").css({"color":"yellow"});
            $("h1").css({"color":"red"});
            isFun = true;
        }
    }

    clickBait = function() {
        if(!isOrange){
            $("#other").css("color", "orange");
            $("#target").css({"fontSize":"11px"});
            isOrange = true;
        } else {
            $("#other").css({"color":"blue"});
            $("#target").css({"fontSize":"30px"});
            isOrange = false;
        }
    }
    //These don't-----------------------------------------
});



// $("#button1").on("click",function(){console.log("hello from jquery")});

