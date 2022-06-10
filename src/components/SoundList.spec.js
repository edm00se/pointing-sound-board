import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import SoundList from './SoundList.vue';
import Sound from './Sound.vue';
import SoundAr from '../assets/sounds.json';

// // create sample array, forcing coverage
// const soundArMock = vi.mock('../assets/sounds.json', () => [
//     {
//       text: 'Consensus',
//       path: 'consensus.m4a',
//       mime: 'audio/mp4',
//       color: null
//     },
//     {
//       text: 'Discuss',
//       path: 'talkAmongstYourselves.m4a',
//       mime: 'audio/mp4',
//       color: '#3F88C5'
//     }
//   ]
// );

describe('SoundList', () => {
  const wrapper = mount(SoundList, {
    props: {},
  });

  it('constructs soundList accordingly', () => {
    expect(wrapper).toBeTruthy();
    const soundList = wrapper.findAllComponents(Sound);
    expect(soundList).toHaveLength(SoundAr.length);
  });
});
