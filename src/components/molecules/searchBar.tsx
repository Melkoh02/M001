import * as React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Searchbar} from 'react-native-paper';
import {useTheme} from '../../lib/hooks/useAppTheme.ts';
import {SearchBarNavProp} from '../../lib/types/navigation.ts';

const MainSearchBar = () => {
  const navigation = useNavigation<SearchBarNavProp>();
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
        onIconPress={() => navigation.openDrawer()}
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
