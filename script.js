//Font Awesome CSS - https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css
//Bootstrap CSS - https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css
//JQuery JS - https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js
//Bootstrap JS - https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js


/*This is a simple "Drum Machine" which plays sound clips when you press buttons.*/

/*
var audioFiles = [
"https://res.cloudinary.com/dlqvbphtt/video/upload/v1544675188/Qmorsecode.wav",
"https://res.cloudinary.com/dlqvbphtt/video/upload/v1544675188/Wmorsecode.wav",
"https://res.cloudinary.com/dlqvbphtt/video/upload/v1544675188/Emorsecode.wav",
"https://res.cloudinary.com/dlqvbphtt/video/upload/v1544675188/Amorsecode.wav",
"https://res.cloudinary.com/dlqvbphtt/video/upload/v1544675188/Smorsecode.wav",
"https://res.cloudinary.com/dlqvbphtt/video/upload/v1544675188/Dmorsecode.wav",
"https://res.cloudinary.com/dlqvbphtt/video/upload/v1544675188/Zmorsecode.wav",
"https://res.cloudinary.com/dlqvbphtt/video/upload/v1544675188/Xmorsecode.wav",
"https://res.cloudinary.com/dlqvbphtt/video/upload/v1544675188/Cmorsecode.wav"
];
*/

var audioInfo = [
"Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: --.- <br/> Original Text: Q",
"Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: .-- <br/> Original Text: W",
"Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: . <br/> Original Text: E",
"Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: .- <br/> Original Text: A",
"Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: ... <br/> Original Text: S",
"Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: -.. <br/> Original Text: D",
"Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: --.. <br/> Original Text: Z",
"Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: -..- <br/> Original Text: X",
"Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: -.-. <br/> Original Text: C"
];

var buttonList = ['Q','W','E','A','S','D','Z','X','C'];

$(document).ready(function()
{
	$(document).keydown( function(event) 
	{
		switch (String.fromCharCode(event.which)) 		//Capture the correct button presses
		{
			case 'Q':
			case 'q':
				playAudio(0);
				break;
			case 'W':
			case 'w':
				playAudio(1);
				break;
			case 'E':
			case 'e':
				playAudio(2);
				break;
			case 'A':
			case 'a':
				playAudio(3);
				break;
			case 'S':
			case 's':
				playAudio(4);
				break;
			case 'D':
			case 'd':
				playAudio(5);
				break;
			case 'Z':
			case 'z':
				playAudio(6);
				break;
			case 'X':
			case 'x':
				playAudio(7);
				break;			
			case 'C':
			case 'c':
				playAudio(8);
				break;	
			//default:							//Only for testing - Send keypresses to the console
				//console.log(event.which);
		};
	});
	
	//Capture the mouse clicks
	$('#Qbutton').click(function() {
		playAudio(0);
	});
	
		
	$('#Wbutton').click(function() {
		playAudio(1);
	});
		
	$('#Ebutton').click(function() {
		playAudio(2);
	});
		
	$('#Abutton').click(function() {
		playAudio(3);
	});
		
	$('#Sbutton').click(function() {
		playAudio(4);
	});
		
	$('#Dbutton').click(function() {
		playAudio(5);
	});
		
	$('#Zbutton').click(function() {
		playAudio(6);
	});
		
	$('#Xbutton').click(function() {
		playAudio(7);
	});
		
	$('#Cbutton').click(function() {
		playAudio(8);
	});
		
});

function playAudio(clip)
{	
	//console.log(clip);	//Testing for correct button press
	//console.log(audioInfo[clip]);	//Testing for correct audio file info
	$('#description').empty();
	$('#description').append(audioInfo[clip]);	
	document.getElementById(buttonList[clip]).play();
	
	
}