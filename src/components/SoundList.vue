<template>
  <div class="sound-list">
    <h1>Pointing Sound Board</h1>
    <div class="sounds">
      <Sound v-for="sound in soundList" :key="sound.text" :sound="sound" />
    </div>
  </div>
</template>

<script>
import Sound from './Sound.vue';
import SoundAr from '../assets/sounds.json';
import { randomColor } from '../util';

export default {
  name: 'SoundList',
  components: {
    Sound
  },
  data() {
    const updatedSoundAr = SoundAr.map(snd => {
      const nwSnd = snd;
      if (nwSnd.color == null) {
        nwSnd.color = randomColor();
      }
      return nwSnd;
    });
    return {
      soundList: updatedSoundAr
    };
  }
};
</script>

<style>
.sounds {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
