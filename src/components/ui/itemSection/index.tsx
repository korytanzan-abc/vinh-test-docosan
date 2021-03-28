import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Text} from '@components/base';
import {colors, sizes} from '@theme';
import {CalendarType} from '@const';
import moment from 'moment';
import {ItemList} from '../itemList';

interface IPropsItemSection {
  section: CalendarType;
}

export const ItemSection: React.FC<IPropsItemSection> = ({section}) => {
  return (
    <View style={styles.container}>
      <Text bold header grey style={styles.item}>
        {moment(section.title, 'H').format('HH:mm')}
      </Text>
      <View style={styles.dividerVertical} />
      <View style={styles.list}>
        {section.data.map((item, index, array) => (
          <ItemList key={index} item={item} index={index} arr={array} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    height: 112
  },
  item: {
    marginLeft: sizes.margin
  },
  dividerVertical: {
    width: 1,
    height: '100%',
    borderColor: colors.grey,
    borderLeftWidth: 1,
    marginLeft: sizes.margin * 2
  },
  list: {
    borderTopWidth: 1,
    marginLeft: -sizes.margin,
    height: 112,
    marginTop: sizes.margin + 2,
    marginBottom: -(sizes.margin + 2),
    padding: sizes.padding,
    width: '100%',
    flexDirection: 'row',
    overflow: 'scroll',
    paddingRight: sizes.padding
  }
});
