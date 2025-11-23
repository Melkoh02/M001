import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Avatar, IconButton, Searchbar} from 'react-native-paper';

import {SearchBarNavProp} from '../../lib/types/navigation.ts';

type MainSearchBarProps = {
  placeholder?: string;
  searchQuery: string;
  setSearchQuery: (text: string) => void;
};

const MainSearchBar: React.FC<MainSearchBarProps> = ({
  placeholder,
  searchQuery,
  setSearchQuery,
}) => {
  const {t} = useTranslation();
  const navigation = useNavigation<SearchBarNavProp>();
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleClearAndBlur = () => {
    setSearchQuery('');
    inputRef.current?.blur?.();
    setFocused(false);
  };

  return (
    <>
      <Searchbar
        ref={inputRef}
        mode="bar"
        placeholder={placeholder ?? t('common.search')}
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        icon={'menu'}
        onIconPress={() => navigation.openDrawer()}
        right={props =>
          focused || searchQuery.length > 0 ? (
            <IconButton
              {...props}
              icon="close"
              onPress={handleClearAndBlur}
              accessibilityLabel={t('common.clear')}
            />
          ) : (
            <Avatar.Image
              {...props}
              size={30}
              source={require('../../assets/images/defaultAvatar.png')}
            />
          )
        }
      />
    </>
  );
};

export default MainSearchBar;
