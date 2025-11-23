import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  showBackButton?: boolean;
};

const AuthHeader: React.FC<Props> = ({title, showBackButton = true}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {showBackButton && (
        <IconButton
          icon="arrow-left"
          size={36}
          onPress={() => navigation.goBack()}
          style={styles.icon}
          contentStyle={styles.iconContent}
        />
      )}
      <Text variant="headlineLarge" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  icon: {
    margin: 0,
  },
  iconContent: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
  },
});

export default AuthHeader;
