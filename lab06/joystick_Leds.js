//To light up LED's using Joystick

var b = require('bonescript');

var inputPin = "P9_36";
var inputPin2 = "P9_38";
var outputPin = "P9_14";
var outputPin2 = "P9_16";

b.pinMode(outputPin, b.ANALOG_OUTPUT);
b.pinMode(outputPin2, b.ANALOG_OUTPUT);
loop();
//loop2();

function loop() {
    var value = b.analogRead(inputPin);
    b.analogWrite(outputPin, value);
    console.log(value.toFixed(3));
    var value2 = b.analogRead(inputPin2);
    b.analogWrite(outputPin2, value2);
    console.log(value.toFixed(3));
        setTimeout(loop, 200);
}

//function loop2() {
  //  var value = b.analogRead(inputPin);
//    b.analogWrite(outputPin2,value);
//        setTimeout(loop2, 1000);
  //      }

