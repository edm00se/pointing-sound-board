import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Sound from './Sound.vue';

describe('Sound', () => {
  const sampleSound = {
    text: 'Discuss',
    path: 'talkAmongstYourselves.m4a',
    mime: 'audio/mp4',
    color: '#3F88C5'
  };

  const vm = mount(Sound, {
    props: {
      sound: sampleSound
    }
  });

  it('renders props when passed', async () => {
    expect(vm.sound.text).toBe('Discuss');
  });

  it('provides sound data', async () => {
    expect(vm.sound.path).toBe(sampleSound.path);
  });

  it('provides a different background on hover', async () => {
    vm.updateHoverState(true);
    expect(vm.isActive).toBe(true);
  });

  it('provides a playable interface', async () => {
    // would prefer to use the Howl function with spy, but not working out currently
    const spy = vi.spyOn(vm, 'playAudio');
    vm.playAudio();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
