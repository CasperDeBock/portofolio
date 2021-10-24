

var count = 0;

function playPause(muziek){
var audio = document.getElementById(muziek);
var playPauseBTN = document.getElementById('playPauseBTN' + muziek);
  if(count == 0){
    count = 1;
    audio.play();
    playPauseBTN.innerHTML = "Pause";
  }
  else{
    count = 0;
    audio.pause();
    playPauseBTN.innerHTML = "Play";
  }
}