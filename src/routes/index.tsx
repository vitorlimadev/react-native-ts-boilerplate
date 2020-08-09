import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const routes: React.FC = () => {
  const DefaultStack = createStackNavigator();

  return (
    <DefaultStack.Navigator initialRouteName="Home">
      <DefaultStack.Screen name="Home" component={Home} />
    </DefaultStack.Navigator>
  );
};

export default routes;
