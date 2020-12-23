import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import Text from '../Text';

export default {
  title: 'common/Text',
  component: Text,
};

const Template: Story<ComponentProps<typeof Text>> = (args) => (
  <Text {...args} />
);

export const SinglePreview = Template.bind({});
SinglePreview.args = {
  children: 'This is a simple text',
};
