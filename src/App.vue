<template>
  <div id="main">
    <SoundList />
  </div>
</template>

<script>
import SoundList from './components/SoundList';

export default {
  name: 'App',
  components: {
    SoundList
  }
};
</script>

<style>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
