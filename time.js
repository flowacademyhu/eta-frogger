const timeleft = () =>{

let timeStartAt = 60;

let downloadTimer = setInterval(function() {
  console.clear();
  console.log(timeStartAt);
  
  if (timeStartAt < 1) {
    console.clear();
    clearInterval(downloadTimer);
  }
  timeStartAt--;
}, 1000)

return timeStartAt;
};
timeleft();  
 
module.exports = {
timeleft: timeleft
};