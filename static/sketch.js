var mobilnet;
var puffin;

function modelReady(){
    alert("model is ready");
    //mobilnet.predict(puffin,gotResults);
}

/*function gotResults(error,results){
    if(error){
        console.log("error");
    }
    else{

        console.log("results");
    }
}

function imageReady(){
    image(puffin,0,0,width,height);
}*/

function setup() {
  createCanvas(400, 400);
  background(12,120,120);

  //puffin = createImg('iamges/puffin.jpg',imageReady);
  //puffin.hide();
  //background(0);
  alert("the model loading starts");
  mobilnet = ml5.imageClassifier('MobilNet',modelReady);
}

function draw() {
  background(12,120,120);
  ellipse(56, 46, 55, 55);
}