var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(
   content == "take my selfie"
    ) {
        console.log("Taking Selfie --");
        speak();
    }
}


function speak() {
 var synth = window.speechSynthesis;
 speakdata = "Taking Your Selfie In 5 Seconds";
 var utterThis = new SpeechSynthesisUtterance(speakdata);
 synth.speak(utterThis);
 Webcam.attach(camera);

 setTimeout(function()  {
     takesnapshot();
     save();
 }, 5000);
}
Webcam.set({
    width:350,
    height:250,
    image_format:'jpeg',
    jpeg_quality:80
});
 
camera = document.getElementById("camera");

function takesnapshot() {
    Webcam.snap(function(data_uri){ 
        document.getElementById("result").innerHTML = '<img id="img1" src = "'+data_uri+'">';

    });
}

function save() {
link = document.getElementById("link");
img = document.getElementById("img1").src;
link.href = img;
link.click();
}