import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@components/base';
import {colors, sizes} from '@theme';
import {AppoitmentType} from '@const';
import moment from 'moment';

interface IPropsSectionHeader {
  title: string;
  data: AppoitmentType[];
}

export const SectionHeader: React.FC<IPropsSectionHeader> = ({title, data}) => {
  if (data.length !== 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text bold header grey style={styles.item}>
        {moment(title, 'H').format('HH:mm')}
      </Text>
      <View style={styles.divider}>
        <View style={styles.dividerVertical} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 112,
    flexDirection: 'row'
  },
  item: {
    marginLeft: sizes.margin
  },
  divider: {
    borderColor: colors.grey,
    borderTopWidth: 1,
    marginLeft: sizes.margin,
    flex: 1,
    marginTop: sizes.margin + 2,
    marginBottom: -(sizes.margin + 2)
  },
  dividerVertical: {
    width: 1,
    height: '100%',
    borderColor: colors.grey,
    borderLeftWidth: 1,
    marginLeft: sizes.margin
  }
});
