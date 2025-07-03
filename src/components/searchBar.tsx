import * as React from 'react';
import {Searchbar} from 'react-native-paper';
import {useTheme} from '../lib/hooks/useAppTheme.ts';
import {View} from 'react-native';

const MainSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default MainSearchBar;
