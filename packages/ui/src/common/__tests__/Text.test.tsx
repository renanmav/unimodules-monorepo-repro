import React from 'react';
import {render} from '@testing-library/react-native';

import Text from '../Text';

it('should render correctly', async () => {
  const {toJSON} = render(<Text testID="text">Some text</Text>);

  expect(toJSON()).toMatchSnapshot();
});
