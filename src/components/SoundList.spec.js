import Vue from 'vue';
import SoundList from './SoundList';

// create sample array, forcing coverage
jest.mock('../assets/sounds.json', () => {
  return [
    {
      "text": "Consensus",
      "path": "consensus.m4a",
      "mime": "audio/mp4",
      "color": null
    },
    {
      "text": "Discuss",
      "path": "talkAmongstYourselves.m4a",
      "mime": "audio/mp4",
      "color": '#3F88C5'
    }
  ];
})

describe('SoundList', () => {
  let CMP;
  let vm;

  beforeEach(() => {
    CMP = Vue.extend(SoundList);
    vm = new CMP({}).$mount(); // Instances and mounts the component
  });

  it('constructs soundList accordingly', () => {
    expect(vm.soundList.length).toBe(2);
  });
});
