import React, {useState} from 'react';
import {Text} from 'react-native';
import {useTheme} from '../lib/hooks/useAppTheme.ts';
import {useTranslation} from 'react-i18next';
import MainSearchBar from '../components/molecules/searchBar.tsx';
import MainFab from '../components/molecules/fab.tsx';
import BaseLayout from '../components/templates/BaseLayout.tsx';

export default function HomeScreen() {
  const theme = useTheme();
  const {t} = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <BaseLayout>
      <MainSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Text style={{color: theme.colors.primary, padding: 10}}>
        {t('home.title')}
      </Text>
      <MainFab />
    </BaseLayout>
  );
}
