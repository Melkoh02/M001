import {useEffect} from 'react';

import {observer} from 'mobx-react-lite';
import BaseLayout from '../components/templates/BaseLayout';
import Routes from '../routes/routes';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';

export default observer(function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  return (
    <BaseLayout>
      <Routes />
    </BaseLayout>
  );
});
