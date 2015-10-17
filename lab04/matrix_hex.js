#!/usr/bin/env node
// Code for drving an 8 by 8 LED Matrix
// http://www.adafruit.com/products/902
// BoneScript API: https://github.com/jadonk/bonescript
// Based on code from the BeagleBone Cookbook: http://shop.oreilly.com/product/0636920033899.do
// Mark A. Yoder, 31-Aug-2015

var b = require('bonescript');
var port = '/dev/i2c-2'
var matrix = 0x70;
var time = 2000; // Delay between images in ms

// The first byte is GREEN, the second is RED.
var hex =
	[0x00, 0x00, 0x00, 0x18, 0x00, 0x00, 0x00, 0x24, 
	 0x00, 0x24, 0x00, 0x00, 0x00, 0x18, 0x00, 0x00];


b.i2cOpen(port, matrix);

b.i2cWriteByte(port,  0x21); // Start oscillator (p10)
b.i2cWriteByte(port,  0x81); // Disp on, blink off (p11)
b.i2cWriteByte(port,  0xe7); // Full brightness (page 15)

dohex();
function dohex() {
	b.i2cWriteBytes(port, 0x00, hex);
}


// Fade the display
setTimeout(doFadeDown, 3*time);
var fade = 0xef;
function doFadeDown() {
    b.i2cWriteByte(port,  fade);
	fade--;
	if(fade >= 0xe0) {
		setTimeout(doFadeDown, time/10);
	} else {
		setTimeout(doFadeUp);
	}
}
function doFadeUp() {
    b.i2cWriteByte(port,  fade);
	fade++;
	if(fade <= 0xef) {
		setTimeout(doFadeUp, time/10);
	}
}
