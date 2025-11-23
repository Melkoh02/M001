import React from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {
  Button,
  Drawer,
  Switch,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useTheme} from '../../lib/hooks/useAppTheme.ts';
import {useStore} from '../../lib/hooks/useStore.ts';
import SelectLanguageModal from '../organisms/selectLanguageModal.tsx';
import BaseLayout from '../templates/BaseLayout.tsx';

const FlatDrawerSection: React.FC<
  React.ComponentProps<typeof Drawer.Section>
> = ({title, children, ...rest}) => (
  <Drawer.Section {...rest}>
    {title && (
      <Text
        variant="titleSmall"
        style={{
          marginLeft: 16,
          marginBottom: 4,
        }}>
        {title}
      </Text>
    )}
    {children}
  </Drawer.Section>
);

export default function DrawerItems() {
  const {t} = useTranslation();
  const theme = useTheme();
  const {themeStore, userStore} = useStore();
  const [selectLanguageModalVisible, setSelectLanguageModalVisible] =
    React.useState<boolean>(false);

  const isDarkTheme = theme.scheme === 'dark';

  const onOpen = (url: string) => Linking.openURL(url);

  const DrawerItemsData = [
    {
      key: 0,
      label: t('drawer.links.github'),
      icon: 'github',
      onPress: () => onOpen('https://github.com/Melkoh02/'),
    },
    {
      key: 1,
      label: t('drawer.links.template'),
      icon: 'source-repository',
      onPress: () => onOpen('https://github.com/Melkoh02/M001'),
    },
    {
      key: 2,
      label: t('drawer.links.contact'),
      icon: 'email',
      onPress: () => onOpen('mailto:contact@melkoh.dev'),
    },
    {
      key: 3,
      label: t('drawer.links.newsApi'),
      icon: 'newspaper-variant-outline',
      onPress: () => onOpen('https://newsapi.org/docs'),
    },
    {
      key: 4,
      label: t('drawer.links.pokeApi'),
      icon: 'pokeball',
      onPress: () => onOpen('https://pokeapi.co/docs/v2'),
    },
  ];

  return (
    <BaseLayout>
      <DrawerContentScrollView
        alwaysBounceVertical={false}
        style={styles.noPadding}
        contentContainerStyle={{...styles.noPadding, flexGrow: 1}}>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}>
          <View>
            <FlatDrawerSection
              showDivider={true}
              title={t('drawer.links.title', 'Links')}>
              {DrawerItemsData.map(({key, ...item}, index) => (
                <Drawer.Item
                  style={styles.noMargin}
                  key={key}
                  {...item}
                  onPress={() => {
                    item.onPress?.();
                  }}
                />
              ))}
            </FlatDrawerSection>
            <FlatDrawerSection
              showDivider={true}
              title={t('drawer.preferences')}>
              <Drawer.Item
                style={styles.noMargin}
                onPress={() => setSelectLanguageModalVisible(true)}
                label={t('drawer.language')}
              />
              <TouchableRipple onPress={themeStore.toggle}>
                <View style={styles.preference}>
                  <Text variant="labelLarge">{t('drawer.darkTheme')}</Text>
                  <View pointerEvents="none">
                    <Switch value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </FlatDrawerSection>
          </View>
          <Button onPress={userStore.logout} textColor={theme.colors.error}>
            {t('settings.logout')}
          </Button>
        </View>
        <SelectLanguageModal
          isVisible={selectLanguageModalVisible}
          onDismiss={() => setSelectLanguageModalVisible(false)}
        />
      </DrawerContentScrollView>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  noPadding: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingStart: 0,
    paddingEnd: 0,
  },
  noMargin: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
