import React from 'react';
import { View, Text, StatusBar } from 'react-native';

declare const global: { HermesInternal: null | {} };

const App: React.FC = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Text>Template config! :D</Text>
    </View>
  );
};

export default App;
