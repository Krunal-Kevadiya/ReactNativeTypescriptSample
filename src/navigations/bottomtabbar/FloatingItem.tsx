import { CustomIcon } from '@components';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { useSelector } from 'react-redux';
import { FloatingItemPropsType } from './Types';

export function FloatingItem({ type, name, style }: FloatingItemPropsType): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return <CustomIcon type={type} name={name} color={colors.invertedWhite} size={32} style={style} />;
}
