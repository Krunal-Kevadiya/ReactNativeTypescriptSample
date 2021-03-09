import { generateShades } from '@utils';

export type ColorObjectType = {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
};

type DictionaryType = {
  [key: string]: ColorObjectType;
};

const ConstColors: DictionaryType = {};

export const generateColors = (color: string) => {
  if (!ConstColors[color]) {
    ConstColors[color] = generateShades(color);
  }
};

export const getConstColors = (color: string, shader: ColorObjectType) => {
  if (ConstColors[color]) {
    return ConstColors[color][shader];
  }
  return color;
};
