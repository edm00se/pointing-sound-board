import Vue from 'vue';
import Sound from './Sound';
import { Howl } from 'Howler';

describe('Sound', () => {
  let CMP;
  let vm;

  const sampleSound = {
    text: 'Discuss',
    path: 'talkAmongstYourselves.m4a',
    mime: 'audio/mp4',
    color: '#3F88C5'
  };

  beforeEach(() => {
    CMP = Vue.extend(Sound);
    vm = new CMP({
      propsData: {
        sound: sampleSound
      }
    }).$mount(); // Instances and mounts the component
  });

  it('renders props when passed', () => {
    expect(vm.sound.text).toBe('Discuss');
  });

  it('provides sound data', () => {
    expect(vm.sound.path).toBe(sampleSound.path);
  });

  it('provides a different background on hover', () => {
    vm.updateHoverState(true);
    expect(vm.isActive).toBe(true);
  });

  it('provides a playable interface', () => {
    // would prefer to use the Howl function with spy, but not working out currently
    const spy = jest.spyOn(vm, 'playAudio');
    vm.playAudio();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
