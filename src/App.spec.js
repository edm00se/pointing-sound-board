import Vue from 'vue';
import App from './App.vue';
import SoundList from './components/SoundList.vue';

describe('App Component', () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(App); // Create a copy of the original component
    vm = new cmp({
      data: {}
    }).$mount(); // Instances and mounts the component
  });

  it('defines and adds the SoundList component', () => {
    expect(Object.keys(App.components)).toContain('SoundList');
  });
});
