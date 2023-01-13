Webcam.set({
    width:350,
    height:300,
    img_format: 'png',
    png_quality: 90
});

mycanvas = document.getElementById("webcam_view");

Webcam.attach("#webcam_view");

function take_snapshot(){
    Webcam.snap(function(pic){
        document.getElementById("webcam_image").innerHTML =  "<img src ='" + pic +"'></img>";
    });
}

console.log("My ML5 library's version is ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kZFx8ETgM/model.json", model_Loaded);

function model_Loaded(){
    console.log("Model is loaded");
}

