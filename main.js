var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
console.log(event);
var Content=event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML=Content;
console.log(Content);
if(Content == "selfie"){
console.log("taking selfie");
speak();
}
}
function speak(){
var synth = window.speechSynthesis;
speak_data="taking your selfie in five seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
}
camera=document.getElementById("camera");
Webcam.set({
width:350,
height:250,
image_format:'jpeg',
jpeg_quality:90
});