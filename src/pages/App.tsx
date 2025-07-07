import {observer} from 'mobx-react-lite';

import BaseLayout from '../components/templates/BaseLayout';
import Routes from '../routes/routes';

export default observer(function App() {
  return (
    <BaseLayout>
      <Routes />
    </BaseLayout>
  );
});
