function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured-image" src="'+data_uri+'"/>';
    });
}
Webcam.set({
    width:350,
    height:350,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

console.log('ml5version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Zin4zDFVd/model.json',modelloaded);

function modelloaded(){
    console.log("model is loaded");
    
}
function check(){
    img = document.getElementById('captured-image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
 if (error){
     console.error(error);
 }
 else{
     console.log(results);
     document.getElementById("result_object_name").innerHTML =results[0].label;
     document.getElementById("result_object_accuracy").innerHTML =results[0].confidence.toFixed(3);
    }
}