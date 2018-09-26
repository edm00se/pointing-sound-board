import Vue from 'vue';
import HelloWorld from './HelloWorld';

describe('Message', () => {
  let cmp;
  let vm;

  beforeEach(() => {
    CMP = Vue.extend(HelloWorld);
    vm = new CMP({
      data: {
        msg: ['willkommen']
      }
    }).$mount(); // Instances and mounts the component
  });

  it('renders props.msg when passed', () => {
    expect(vm.msg).toEqual(['willkommen']);
  });
});
