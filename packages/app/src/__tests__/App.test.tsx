import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

it('should render correctly', async () => {
  const {toJSON} = render(<App />);

  expect(toJSON()).toMatchSnapshot();
});
