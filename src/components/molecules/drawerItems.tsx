import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Badge, Drawer, Switch, Text, TouchableRipple} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useTheme} from '../../lib/hooks/useAppTheme.ts';

export default function DrawerItems() {
  const theme = useTheme();
  const [drawerItemIndex, setDrawerItemIndex] = React.useState<number>(0);
  const isDarkTheme = false;

  const _setDrawerItem = (index: number) => setDrawerItemIndex(index);

  const DrawerItemsData = [
    {
      label: 'Inbox',
      icon: 'inbox',
      key: 0,
      right: () => <Text variant="labelLarge">44</Text>,
    },
    {
      label: 'Starred',
      icon: 'star',
      key: 1,
      right: ({color}: {color: string}) => (
        <Badge
          visible
          size={8}
          style={[styles.badge, {backgroundColor: color}]}
        />
      ),
    },
    {label: 'Sent mail', icon: 'send', key: 2},
    {label: 'Colored label', icon: 'palette', key: 3},
    {
      label: 'A very long title that will be truncated',
      icon: 'delete',
      key: 4,
      right: () => <Badge visible size={8} style={styles.badge} />,
    },
  ];

  return (
    <DrawerContentScrollView
      alwaysBounceVertical={false}
      style={{
        ...styles.drawerContent,
        backgroundColor: theme.colors.surface,
      }}>
      <Drawer.Section title="Example items">
        {DrawerItemsData.map((props, index) => (
          <Drawer.Item
            {...props}
            key={props.key}
            // theme={props.key === 3 ? coloredLabelTheme : undefined}
            active={drawerItemIndex === index}
            onPress={() => _setDrawerItem(index)}
          />
        ))}
      </Drawer.Section>
      <Drawer.Section title="Preferences">
        <TouchableRipple onPress={() => console.log('Pressed')}>
          <View style={[styles.preference, styles.v3Preference]}>
            <Text variant="labelLarge">Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={isDarkTheme} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  v3Preference: {
    height: 56,
    paddingHorizontal: 28,
  },
  badge: {
    alignSelf: 'center',
  },
  collapsedSection: {
    marginTop: 16,
  },
  annotation: {
    marginHorizontal: 24,
    marginVertical: 6,
  },
});
