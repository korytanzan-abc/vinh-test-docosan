import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from '@components/base';
import {colors, sizes} from '@theme';
import {AppoitmentType} from '@const';
import {images} from '@assets';

interface IPropsItemList {
  item: AppoitmentType;
  index: number;
  arr: AppoitmentType[];
}

export const ItemList: React.FC<IPropsItemList> = ({item, index, arr}) => {
  const imagesSource = [images.male, images.female];
  const statusColor = new Map([
    ['passed', colors.grey],
    ['pending', colors.pink],
    ['approved', colors.green]
  ]);
  return (
    <View
      style={[
        styles.container,
        arr.length >= 1 && index != 0 && {marginLeft: -(sizes.margin + 4)}
      ]}>
      <View
        style={[
          styles.divider,
          {
            backgroundColor: item.color_code
          }
        ]}
      />
      <View
        style={[
          styles.content,
          {
            borderRightWidth: arr.length >= 1 ? 0 : 1
          }
        ]}>
        <View style={styles.containerAvatar}>
          {item.avatar ? (
            <Image style={styles.avatar} source={{uri: item.avatar}} />
          ) : (
            <Image
              style={styles.avatar}
              source={
                imagesSource[Math.floor(Math.random() * imagesSource.length)]
              }
            />
          )}
        </View>
        <Text bold header grey>
          {item.requester}
        </Text>
        <View style={styles.item}>
          <View
            style={[
              styles.circle,
              {backgroundColor: statusColor.get(item.status)}
            ]}>
            <View style={styles.dot} />
          </View>
          <View style={{width: '90%'}}>
            {arr.length <= 2 && (
              <Text numberOfLines={1} ellipsizeMode="tail">
                {item.symptom}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: sizes.margin,
    flexDirection: 'row',
    borderRadius: sizes.radius,
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    padding: sizes.padding,
    borderColor: colors.grey,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  divider: {
    width: sizes.margin,
    height: '100%'
  },
  containerAvatar: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden'
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 25
  },
  item: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
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
  }
});
