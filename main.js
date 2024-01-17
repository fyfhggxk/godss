img="";
objects=[];
status="";

function preload(){
    img=loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjWy3pYLQqk5Z7RtUVi_WzO52dV2zqRpTrQ&usqp=CAU");

}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
 
  }
  function modelLoaded(){
  console.log("cocossd");
  status=true;
  }
  function gotResults(error,results){
  if (error){
  console.log(error);
  }else{
    console.log(results)
    objects=results;
  }
  }
  function draw(){
    image(video,0,0,400,400);
  if(status != ""){
      r=random(250);
      g=random(250);
      b=random(250);
      objectDetector.detect(video, gotResults);
      for (var i = 0; i< objects.length; i++) {
          document.getElementById("number_of_objects").innerHTML= "n. objetos detectados"+objects.length;
  fill(r,g,b);
      porcentaje =floor(objects[i].confidence*100);
      text(objects[i].label+"  "+"%"+porcentaje , objects[i].x, objects[i].y );
       noFill();
       stroke(r,g,b);   
       rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
      }
  
  }
  }
