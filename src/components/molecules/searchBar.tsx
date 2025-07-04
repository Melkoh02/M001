import * as React from 'react';
import {Avatar, Searchbar} from 'react-native-paper';
import {useTheme} from '../../lib/hooks/useAppTheme.ts';
import {View} from 'react-native';

const MainSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        paddingHorizontal: 16,
      }}>
      <Searchbar
        mode="bar"
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        icon={'menu'}
        onIconPress={() => console.log('Menu pressed')}
        right={props => (
          <Avatar.Image
            {...props}
            size={30}
            source={require('../../assets/images/defaultAvatar.png')}
            onTouchEnd={() => console.log('Avatar pressed')}
          />
        )}
      />
    </View>
  );
};

export default MainSearchBar;
