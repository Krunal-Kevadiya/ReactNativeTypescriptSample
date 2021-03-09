import { isNotNullOrEmpty } from '@utils';
import React, { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { CustomIcon } from '../icon/CustomIcon';
import { FontEnumType } from '../icon/Types';
import styles from './FormInputStyles';
import type { FormInputPropsType } from './Types';

function CustomInput(
  {
    id,
    label,
    labelColor,
    leftIconName,
    leftIconColor,
    leftIconSize,
    rightIconName,
    rightIconColor,
    rightIconSize,
    errorColor,
    errorMsg,
    divider,
    isLowerCase,
    dirty,
    values,
    touched,
    errors,
    setFieldValue,
    setFieldTouched,
    ...inputProps
  }: FormInputPropsType,
  ref: React.LegacyRef<TextInput>
): React.ReactElement {
  function handleChange(value: string): void {
    const text = isLowerCase ? value?.trim()?.toLowerCase() : value?.trim();
    setFieldValue(id, text);
  }

  function handleBlur(): void {
    const text = isLowerCase ? values[id]?.trim()?.toLowerCase() : values[id]?.trim();
    setFieldValue(id, text);
    setFieldTouched(id, true);
  }

  const wasTouched = dirty ? touched[id] : false;
  const fieldError = (wasTouched && errors[id]) || errorMsg;

  return (
    <View>
      {label && <Text style={[styles.textLabel, { color: labelColor }]}>{label}</Text>}
      <View style={styles.inputContainer}>
        {leftIconName && (
          <CustomIcon type={FontEnumType.materialIcons} name={leftIconName} color={leftIconColor} size={leftIconSize} />
        )}
        <TextInput ref={ref} value={values[id]} onChangeText={handleChange} onBlur={handleBlur} {...inputProps} />
        {rightIconName && (
          <Animatable.View animation="bounceIn">
            <CustomIcon type={FontEnumType.feather} name={rightIconName} color={rightIconColor} size={rightIconSize} />
          </Animatable.View>
        )}
      </View>
      <View style={[styles.line, { backgroundColor: divider }]} />
      {isNotNullOrEmpty(fieldError) && (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={[styles.errorMsg, { color: errorColor }]}>{fieldError}</Text>
        </Animatable.View>
      )}
    </View>
  );
}

export const FormInput = forwardRef(CustomInput);
