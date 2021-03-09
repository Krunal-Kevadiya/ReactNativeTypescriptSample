import { getConstColors } from '@constants';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { CustomIcon } from '../icon/CustomIcon';
import { FontEnumType } from '../icon/Types';
import styles from './styles/SearchStyles';
import type { SearchPropsType } from './Types';

export function Search({ colors, isLowerCase, ...inputProps }: SearchPropsType): React.ReactElement {
  const [searchText, setSearchText] = useState('');
  function handleChange(value: string): void {
    const text = isLowerCase ? value?.trim()?.toLowerCase() : value?.trim();
    setSearchText(text);
  }

  function handleBlur(): void {
    handleChange(searchText);
  }

  return (
    <View style={[styles.container, styles.centerSide]}>
      <View style={styles.searchContainer}>
        <CustomIcon
          type={FontEnumType.materialIcons}
          name="search"
          color={getConstColors(colors.gray, '200')}
          size={24}
        />
        <TextInput
          {...inputProps}
          autoFocus
          value={searchText}
          returnKeyType="search"
          style={[styles.inputSearch, inputProps.style, { color: colors.invertedBlack }]}
          placeholderTextColor={colors.gray}
          keyboardType="default"
          selectionColor={colors.secondary}
          onChangeText={handleChange}
          onBlur={handleBlur}
          onSubmitEditing={handleBlur}
        />
        <Text style={[styles.textLabel, { color: colors.invertedBlack }]}>Cancel</Text>
      </View>
      <View style={[styles.line, { backgroundColor: getConstColors(colors.gray, '200') }]} />
    </View>
  );
}
