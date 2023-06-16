import React , { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
 
    
    // Função para reproduzir ou pausar a música
    const togglePlay = () => {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    return (
      <View>
        <Text>Player de Música</Text>
        <TouchableOpacity onPress={togglePlay}>
{/*     <Text>{isPlaying ? 'Pausar' : 'Reproduzir'}</Text>  */}
        </TouchableOpacity>
      </View>
  );
};

export default Player;