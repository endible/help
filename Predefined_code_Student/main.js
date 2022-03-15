x = 0
y = 0

var draw_circle = ""  
var draw_square = ""

var speechRecognation = window.webkitSpeechRecognition
var recognation = new speechRecognation()

function start (){

    document.getElementById("status").innerHTML="system is listening"
    recognation.start()
}

recognation.onresult = function(event){

   console.log(event)
   var content = event.results[0][0].transcript
   document.getElementById("status").innerHTML="the shape recognized is: "+content
   if (content == circle){
       x = Math.floor(Math.random()*900)
       y = Math.floor(Math.random()*600)
       document.getElementById("status").innerHTML="started drawing cirlce"
       draw_circle = "set"
   }
}
function setup (){
    canvas = createCanvas(900, 600)
    
}
function draw (){

    if (draw_circle == "set"){

        radius = 20
        circle(x, y, radius)
        draw_circle = ""
    }
}
