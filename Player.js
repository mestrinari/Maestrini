import Metronome from "react-native-metronome";


Metronome.play(80); //play with 80 bpm

Metronome.nextSound(); //play next sound

Metronome.stop(); // stop playing

Metronome.isPlay(status => {
  console.log(status);
})

export default Player;