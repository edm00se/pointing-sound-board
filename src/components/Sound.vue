<template>
  <div class="sound"
    v-bind:style="{ backgroundColor: color, color: textColor }"
    v-on:click="playAudio()"
    @mouseenter="updateHoverState(true)"
    @mouseleave="updateHoverState(false)">
    {{ text }}
  </div>
</template>

<script>
import { Howl } from 'howler';

export default {
  name: 'Sound',
  computed: {
    text() {
      return this.sound.text;
    },
    path() {
      return this.sound.path;
    },
    mime() {
      return this.sound.mime;
    },
    color() {
      if (this.hoverState) {
        return 'white';
      }
      return this.sound.color;
    },
    textColor() {
      return this.hoverState ? 'black' : 'white';
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
      const sound = new Howl({
        src: [`static/clips/${this.sound.path}`]
      });
      sound.play();
    }
  },
  props: ['sound']
};
</script>

<style lang="scss">
.sound {
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
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
