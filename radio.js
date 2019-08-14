//Uses the WebAudio API to analyze streaming audio
let analyser, source;
let audioElement = document.getElementById("radio");    //gets the element in the HTML document with the id="radio"

window.onload = function () {

    // Start playing the radio stream when document is clicked
    document.getElementById('defaultCanvas0').addEventListener("click", function () {
        audioElement.play();
        let context = new (window.AudioContext || window.webkitAudioContext)();       //Tells the browser we want to use Audio for out analyser

        source = context.createMediaElementSource(audioElement);    //Set the context to be our radio stream
        analyser = context.createAnalyser();

        source.connect(analyser);             //Connect up the radio stream to the audio analyser

        // Connect the output of the analyser to the destination, so that the audio will play out speakers 
        analyser.connect(context.destination);
        // By default, the analyser does a Fast Fourier Transform with 2048 points.
        console.log(analyser.fftSize);
        // Once the analyser has broken down the audio frequency, the number of data points we get back is half the size of the fftSize  
        console.log(analyser.frequencyBinCount);

    });
}