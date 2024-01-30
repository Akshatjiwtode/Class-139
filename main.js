img = "";
statu = "";
objects = [];


function preload(){
  img = loadImage("dog_cat.jpg");

}


function setup(){
    //canvas = createCanvas(640, 420);
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocoSSD' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Objected Dectected";
}

function modelLoaded()
{
  console.log("Model Loaded");
  statu = true;
  //objectDetector.detect(img, gotResult);
  
}

function gotResult(error, results){
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw(){


   //image(img, 0, 0, 640, 420);
   image(video, 0, 0, 380, 380);

   if(statu != "")
   {
    r = random(255);
    g = random(255);
    b = random(255);
    
    objectDetector.detect(video, gotResult);
    document
    for(i = 0; i < objects.length; i++)
    {
      document.getElementById("status").innerHTML = "Status: Objected Dectected";
      document.getElementById("number_of_objects").innerHTML = "Number of objects = "+objects.length;
      //fill("FF0000");
      fill(r,g,b);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
      noFill();
      //stroke("FF0000");
      stroke(r,g,b);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      
      
    }
  }
}




