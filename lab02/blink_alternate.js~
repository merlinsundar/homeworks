var b = require('bonescript');
var state = 0;

b.pinMode('P9_42', b.INPUT);
b.pinMode('P9_36', b.INPUT);

b.pinMode('P9_12', b.OUTPUT);

setInterval(check,100);

function check(){
b.digitalRead('P9_42', ON);
b.digitalRead('P9_36', OFF);
}


function ON(x) { //checks for input and turns led on
  if(x.value === 1){
    state = 1;
    b.digitalWrite('P9_12', state);
  }
}

function OFF(x) { // chekcs for input and turns led off
  if(x.value === 1){
    state = 0;
    b.digitalWrite('P9_12', state);
  }
}
