import { mount } from '@vue/test-utils';

import RoundButton from '../round-button.component.vue';

describe('RoundButton component', () => {
  test('Render basic component', () => {
    const button = mount(RoundButton, {
      props: {
        icon: 'fa-regular fa-user'
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    });
    expect(button.get('font-awesome-icon-stub').attributes('icon')).toBe('fa-regular fa-user');
  });

  test('Render component with size', () => {
    const button = mount(RoundButton, {
      props: {
        icon: 'fa-regular fa-user',
        size: 'lg'
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    });
    expect(button.get('font-awesome-icon-stub').attributes('size')).toBe('lg');
  });
});
