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

function identify()
{
    my_picture = document.getElementById("picture");
    classifier.classify(my_picture, got_result);

}

function got_result(error, results)
{
   if (error){
        console.error(error);
   }
   else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        accuracy = ((results[0].confidence)*100).toFixed(2);
        document.getElementById("result_object_accuracy").innerHTML = accuracy+"%";
   }
}
