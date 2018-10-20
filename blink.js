module.exports = function FlashLight(){
  let five = require('johnny-five');
  let board = new five.Board({
    port: "COM3"
  });

  board.on('ready', function () {
    let led = new five.Led(13); // pin 13
    led.blink(500); // 500ms interval
  });
}
