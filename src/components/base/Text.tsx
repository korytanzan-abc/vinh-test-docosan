import React from 'react';
import {StyleSheet, Text as Typography, TextProps} from 'react-native';

import {colors, sizes} from '@theme';

interface IPropsText {
  h1?: boolean;
  h2?: boolean;
  title?: boolean;
  header?: boolean;
  body?: boolean;
  caption?: boolean;
  small?: boolean;
  size?: number;
  transform?: string;
  align?: string;
  // styling
  regular?: boolean;
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
  light?: boolean;
  weight?: string;
  center?: boolean;
  right?: boolean;
  spacing?: number; // letter-spacing
  height?: number; // line-height
  // colors
  color?: string;
  green?: boolean;
  blue?: boolean;
  darkBlue?: boolean;
  yellow?: boolean;
  pink?: boolean;
  orange?: boolean;
  grey?: boolean;
  white?: boolean;
  black?: boolean;
  style?: any;
}

export const Text: React.FC<IPropsText & TextProps> = ({
  h1,
  h2,
  title,
  header,
  body,
  caption,
  small,
  size,
  transform,
  align,
  regular,
  bold,
  semibold,
  medium,
  light,
  weight,
  center,
  right,
  spacing,
  height,
  color,
  green,
  blue,
  darkBlue,
  yellow,
  pink,
  orange,
  grey,
  white,
  black,
  style,
  children,
  ...props
}) => {
  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    title && styles.title,
    header && styles.header,
    body && styles.body,
    caption && styles.caption,
    small && styles.small,
    size && {fontSize: size},
    transform && {textTransform: transform},
    align && {textAlign: align},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && {color},
    // color && styles[color],
    // color && !styles[color] && { color },
    green && styles.green,
    blue && styles.blue,
    darkBlue && styles.darkBlue,
    yellow && styles.yellow,
    pink && styles.pink,
    orange && styles.orange,
    grey && styles.grey,
    white && styles.white,
    black && styles.black,
    style // rewrite predefined styles
  ];

  return (
    <Typography style={textStyles} {...props}>
      {children}
    </Typography>
  );
};

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: sizes.font,
    color: colors.black
  },
  // variations
  regular: {
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bold'
  },
  semibold: {
    fontWeight: '600'
  },
  medium: {
    fontWeight: '500'
  },
  light: {
    fontWeight: '200'
  },
  // position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  // colors
  green: {color: colors.green},
  blue: {color: colors.blue},
  darkBlue: {color: colors.darkBlue},
  yellow: {color: colors.yellow},
  pink: {color: colors.pink},
  orange: {color: colors.orange},
  grey: {color: colors.grey},
  white: {color: colors.white},
  black: {color: colors.black},
  // fonts
  h1: {fontSize: sizes.h1},
  h2: {fontSize: sizes.h2},
  title: {fontSize: sizes.title},
  header: {fontSize: sizes.header},
  body: {fontSize: sizes.body},
  caption: {fontSize: sizes.caption},
  small: {fontSize: sizes.small}
});
