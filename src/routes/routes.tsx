import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {StoreContext} from '../../index.tsx';
import AuthStack from './stacks/AuthStack.tsx';

export default function Routes() {
  const {userStore} = React.useContext(StoreContext);
  const isLoggedIn = Boolean(userStore.accessToken);

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
