import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Sound from './Sound.vue';

describe('Sound', () => {
  const sampleSound = {
    text: 'Discuss',
    path: 'talkAmongstYourselves.m4a',
    mime: 'audio/mp4',
    color: '#3F88C5',
  };

  const vm = mount(Sound, {
    props: {
      sound: sampleSound,
    },
  });

  it('renders props when passed', async () => {
    expect(vm.text()).toContain('Discuss');
  });

  it('provides sound data', async () => {
    expect(vm.find('audio').html()).toContain(
      `src="../clips/${sampleSound.path}"`
    );
  });

  it('provides a different background on hover', async () => {
    vm.componentVM.updateHoverState(true);
    expect(vm.componentVM.isActive).toBe(true);
  });

  it('provides a playable interface', async () => {
    const spy = vi
      .spyOn(vm.componentVM, 'playAudio')
      .mockImplementation(() => {});
    vm.componentVM.playAudio();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
