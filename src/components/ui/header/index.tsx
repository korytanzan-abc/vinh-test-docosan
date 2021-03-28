import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '@components/base';
import {colors} from '@theme';

interface IPropsHeader {
  title: string;
}

export const Header: React.FC<IPropsHeader> = ({title}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[colors.green, colors.blue]}
      style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text white title bold>
        {title}
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
