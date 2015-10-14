var b = require('bonescript');
var state = 0;

b.pinMode('P9_42', b.INPUT); // button serving as input
b.pinMode('P9_36', b.INPUT);

b.pinMode('P9_12', b.OUTPUT); //leds serving as output
b.pinMode('P9_14', b.OUTPUT);

setInterval(check,1000);

function check(){
b.digitalRead('P9_42', LED1); // checking for signal 
b.digitalRead('P9_36', LED1);
b.digitalRead('P9_42', LED2);
b.digitalRead('P9_36', LED2);
}


function LED1(x) {    // checks for any input and flashes one top led on/off
  if(x.value === 1){
    b.digitalWrite('P9_12', b.HIGH);
  }
}


function LED2(x) {    // checks for two input and flashes both leds on/off
  if(x.value === 1){
    	if(state === 1){
    		b.digitalWrite('P9_14', b.HIGH);
    		b.digitalWrite('P9_12', b.HIGH);
		state = 0;	
	}
	else state = 1;
  }
  else  state = 0;
}
