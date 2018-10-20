const axios = require('axios');
const FlashLight = require("./blink");

const checkForWaiting = async () => {
    axios.get('https://tasks.jollyit.co.uk/php/LMI/check_waiting.php')
  .then(function (res) {
    // Console log the result of the session status
    console.log(res.data);
    if(res.data === "WAITING"){
      // call the arduino flash
      setTimeout(FlashLight, 5000);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

setInterval(checkForWaiting, 5000);


