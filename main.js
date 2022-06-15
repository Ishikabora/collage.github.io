var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
 
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie"){
        console.log("taking selfie ---")
        speak();
    }
    
    
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
      img_id = "result1"
      take_snapshot();
      speak_data = "Taking your selfie in 5 seconds.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    },5000);

}
setTimeout(function()
    {
      img_id = "result2"
      take_snapshot();
      speak_data = "Taking your selfie in 10 seconds.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    },10000);

    
setTimeout(function()
    {
      img_id = "result3"
      take_snapshot();
      speak_data = "Taking your selfie in 15 seconds.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    },15000);





    Webcam.set({
        width: 350,
        height: 300,
        image_format: 'png',
        png_quality: 90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id == "result1"){
            document.getElementById("result1").innerHTML = '<img id = "result1" src = "'+data_uri+'"/>';
         }
         if(img_id == "result2"){
            document.getElementById("result2").innerHTML = '<img id = "result2" src = "'+data_uri+'"/>';
         }
         if(img_id == "result3"){
            document.getElementById("result3").innerHTML = '<img id = "result3" src = "'+data_uri+'"/>';
         }
    });
}