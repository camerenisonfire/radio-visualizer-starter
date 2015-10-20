//Uses the WebAudio API to analyze streaming audio

var context = new AudioContext();       //Tells the browser we want to use Audio for out analyser
var analyser = context.createAnalyser();  //Makes the analyser for audio

var audioElement = document.getElementById("radio");    //gets the element in the HTML document with the id="radio"

audioElement.addEventListener("canplay", function() {       //When the audio is ready to play, execute the stuff in the function
    var source = context.createMediaElementSource(audioElement);    //Set the context to be our radio stream

    source.connect(analyser);             //connect up the radio stream to the audio analyser

    // Connect the output of the analyser to the destination, so that the audio will play out speakers 
    analyser.connect(context.destination);    

});
audioElement.play();    //start playing the radio stream



//By default, the analyser does a Fast Fourier Transform with 2048 points.
console.log(analyser.fftSize);  
//Once the analyser has broken down the audio frequency, the number of data points we get back is half the size of the fftSize  
console.log(analyser.frequencyBinCount);  
