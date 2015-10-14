var b = require('bonescript');

// setup starting conditions
var awValue = 0.01;
var awValue2 = 1.01;
var awDirection = 1;
var awDirection2 = 1;
var awPin = "P9_14";
var awPin2 = "P9_16";

// configure pin 
b.pinMode(awPin, b.ANALOG_OUTPUT);
b.pinMode(awPin2, b.ANALOG_OUTPUT);

// call function to update brightness every 10ms
setInterval(fade, 10);
setInterval(fade2, 10);

// function to update brightness
function fade() {
 b.analogWrite(awPin, awValue);
 awValue = awValue + (awDirection*0.01);
 if(awValue > 1.0) { awValue = 1.0; awDirection = -1; }
 else if(awValue <= 0.01) { awValue = 0.01; awDirection = 1; }
 }
function fade2() {
 b.analogWrite(awPin2, awValue2);
 awValue2 = awValue2 + (awDirection2*0.01);
 if(awValue2 <= 0.01) { awValue2 = 0.01; awDirection2 = 1; }
 else if(awValue2 > 1.0) { awValue2 = 1.0; awDirection2 = -1; }
 }

