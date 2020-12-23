import {addParameters} from '@storybook/react';
import {create} from '@storybook/theming';

addParameters({
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction'],
    },
    theme: create({
      base: 'light',
      appBg: '#fff',
      brandTitle: 'Design System',
    }),
  },
});
