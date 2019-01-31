let frequencyData;		//holds our Array of data about our audio frequency

function setup() {
  	createCanvas(720, 200);	//Make an HTML <canvas> 720x200px 
}

function draw() {
		drawBackground();

		if(!analyser) {
			showStartText();
			//we haven't started the audio yet
			return;
		}
  	frequencyData = new Uint8Array(analyser.frequencyBinCount);	

  	//Tell the analyser in radio.js to fill our Array with the frequency data	
  	analyser.getByteFrequencyData(frequencyData);
	
  	fill(255);		//Set the fill color to white
  	noStroke();		//Turn off the outline of our shape

  	//Draw an ellipse in the center of our canvas that scales with the frequency data 
		ellipse(width/2, height/2, 1+frequencyData[10], 1+frequencyData[10] );

  	/* More explanation of the ellipse function above:
  	The parameters to are ellipse(xPosition, yPosition, width, height)
  	width/2 and height/2 sets the coordinates to the center of the canvas
  	The size of the ellipse is 1+frequencyData[10]
  	meaning the minimum size of the ellipse is 1 and we then add 
  	the number analyyser put into in the 10th bin of frequencyData
  	The higher the bin number, the higher the frequency the circle will react to.
  	*/
}

function drawBackground() {
	//Sets the fill color of our shape red with low opacity
	//uses low opacity so the circle fades out on edges
	fill(255, 0, 0, 10);
	//Draw a rectangle, which will be red with low opacity	
	rect(0, 0, width, height);	
}

function showStartText() {
	const START_TEXT = 'Click here to start the groove';
	textSize(32);
	strokeWeight(1);
	textStyle(BOLD);
	textAlign(CENTER);
	fill(255);
	text(START_TEXT, width/2, height/2)
}
