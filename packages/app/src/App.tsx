import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Text} from '@MyApp/ui/common';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView testID="safe-area-view">
        <Text>It's working</Text>
      </SafeAreaView>
    </>
  );
};
export default App;
