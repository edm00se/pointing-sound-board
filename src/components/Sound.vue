<template>
  <div
    class="sound"
    v-bind:class="{ active: isActive }"
    v-bind:style="{ backgroundColor: color, color: textColor }"
    v-on:click="playAudio()"
    @mouseenter="updateHoverState(true)"
    @mouseleave="updateHoverState(false)"
  >
    {{ text }}
    <audio v-bind:src="soundPath"></audio>
  </div>
</template>

<script>
const isProd = process.env.NODE_ENV === 'production';

export default {
  name: 'Sound',
  computed: {
    text() {
      return this.sound.text;
    },
    color() {
      return this.sound.color;
    },
    textColor() {
      return 'white';
    },
    isActive() {
      return this.hoverState;
    },
    soundPath() {
      return `${isProd ? '.' : '..'}/clips/${this.sound.path}`;
    }
  },
  data() {
    return {
      hoverState: false
    };
  },
  methods: {
    updateHoverState(isHover) {
      this.hoverState = isHover;
    },
    playAudio() {
      let sound = this.$el.querySelector('audio');
      this.haltOtherAudio(sound);
      sound.currentTime = 0;
      sound.play();
    },
    haltOtherAudio(mySound) {
      [...document.querySelectorAll('audio')]
        .filter(el => el !== mySound)
        .forEach(el => {
          el.pause();
          el.currentTime = 0;
        });
    }
  },
  props: ['sound']
};
</script>

<style lang="scss">
.sound {
  font-weight: 600;
  min-height: 100px;
  border: 1px solid grey;
  border-radius: 0.5em;
  width: 25%;
  margin: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 45%;
    margin-bottom: 10px;
  }
}
.active {
  filter: brightness(175%);
}
audio {
  display: none;
}
</style>
