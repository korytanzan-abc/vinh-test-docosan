import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@components/base';
import {colors, sizes} from '@theme';

export const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.item}>
          <View style={[styles.circle, styles.backgroundPassed]}>
            <View style={styles.dot} />
          </View>
          <Text>Passed</Text>
        </View>
        <View style={styles.item}>
          <View style={[styles.circle, styles.backgroundPending]}>
            <View style={styles.dot} />
          </View>
          <Text>Pending</Text>
        </View>
        <View style={styles.item}>
          <View style={[styles.circle, styles.backgroundApproved]}>
            <View style={styles.dot} />
          </View>
          <Text>Approved</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.grey
  },
  content: {
    borderColor: colors.green,
    borderRadius: sizes.radius * 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: sizes.padding,
    flexDirection: 'row',
    borderWidth: 1,
    width: '70%'
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: sizes.base,
    height: sizes.base,
    borderRadius: sizes.base / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: sizes.padding
  },
  dot: {
    width: sizes.base / 2,
    height: sizes.base / 2,
    borderRadius: sizes.base / 4,
    backgroundColor: colors.white
  },
  backgroundPassed: {
    backgroundColor: colors.grey
  },
  backgroundPending: {
    backgroundColor: colors.pink
  },
  backgroundApproved: {
    backgroundColor: colors.green
  }
});
