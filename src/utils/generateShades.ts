import type { ColorObjectType } from '@constants';
import tinycolor from 'tinycolor2';

function multiply(rgb1: any, rgb2: any) {
  rgb1.b = Math.floor((rgb1.b * rgb2.b) / 255);
  rgb1.g = Math.floor((rgb1.g * rgb2.g) / 255);
  rgb1.r = Math.floor((rgb1.r * rgb2.r) / 255);
  return tinycolor(`rgb ${rgb1.r} ${rgb1.g} ${rgb1.b}`);
}

export function generateShades(hex: string, algorithm = 'constantin'): ColorObjectType {
  switch (algorithm) {
    case 'constantin': {
      const baseLight = tinycolor('#ffffff');
      const baseDark = multiply(tinycolor(hex).toRgb(), tinycolor(hex).toRgb());
      const baseTriad = tinycolor(hex).tetrad();
      return {
        '50': tinycolor(tinycolor.mix(baseLight, hex, 12)).toHexString(),
        '100': tinycolor(tinycolor.mix(baseLight, hex, 30)).toHexString(),
        '200': tinycolor(tinycolor.mix(baseLight, hex, 50)).toHexString(),
        '300': tinycolor(tinycolor.mix(baseLight, hex, 70)).toHexString(),
        '400': tinycolor(tinycolor.mix(baseLight, hex, 85)).toHexString(),
        '500': tinycolor(tinycolor.mix(baseLight, hex, 100)).toHexString(),
        '600': tinycolor(tinycolor.mix(baseDark, hex, 87)).toHexString(),
        '700': tinycolor(tinycolor.mix(baseDark, hex, 70)).toHexString(),
        '800': tinycolor(tinycolor.mix(baseDark, hex, 54)).toHexString(),
        '900': tinycolor(tinycolor.mix(baseDark, hex, 25)).toHexString(),
        A100: tinycolor(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(65)).toHexString(),
        A200: tinycolor(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(55)).toHexString(),
        A400: tinycolor(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(45)).toHexString(),
        A700: tinycolor(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(40)).toHexString()
      };
    }

    case 'buckner': {
      const baseLight = tinycolor('#ffffff');
      const baseDark = multiply(tinycolor(hex).toRgb(), tinycolor(hex).toRgb());
      const baseTriad = tinycolor(hex).tetrad();

      return {
        '50': tinycolor(tinycolor.mix(baseLight, hex, 12)).toHexString(),
        '100': tinycolor(tinycolor.mix(baseLight, hex, 30)).toHexString(),
        '200': tinycolor(tinycolor.mix(baseLight, hex, 50)).toHexString(),
        '300': tinycolor(tinycolor.mix(baseLight, hex, 70)).toHexString(),
        '400': tinycolor(tinycolor.mix(baseLight, hex, 85)).toHexString(),
        '500': tinycolor(tinycolor.mix(baseLight, hex, 100)).toHexString(),
        '600': tinycolor(tinycolor.mix(baseDark, hex, 87)).toHexString(),
        '700': tinycolor(tinycolor.mix(baseDark, hex, 70)).toHexString(),
        '800': tinycolor(tinycolor.mix(baseDark, hex, 54)).toHexString(),
        '900': tinycolor(tinycolor.mix(baseDark, hex, 25)).toHexString(),
        A100: tinycolor(tinycolor.mix(baseDark, baseTriad[3], 15).saturate(80).lighten(48)).toHexString(),
        A200: tinycolor(tinycolor.mix(baseDark, baseTriad[3], 15).saturate(80).lighten(36)).toHexString(),
        A400: tinycolor(tinycolor.mix(baseDark, baseTriad[3], 15).saturate(100).lighten(31)).toHexString(),
        A700: tinycolor(tinycolor.mix(baseDark, baseTriad[3], 15).saturate(100).lighten(28)).toHexString()
      };
    }

    default:
      return {
        '50': tinycolor(tinycolor(hex).lighten(52)).toHexString(),
        '100': tinycolor(tinycolor(hex).lighten(37)).toHexString(),
        '200': tinycolor(tinycolor(hex).lighten(26)).toHexString(),
        '300': tinycolor(tinycolor(hex).lighten(12)).toHexString(),
        '400': tinycolor(tinycolor(hex).lighten(6)).toHexString(),
        '500': tinycolor(tinycolor(hex)).toHexString(),
        '600': tinycolor(tinycolor(hex).darken(6)).toHexString(),
        '700': tinycolor(tinycolor(hex).darken(12)).toHexString(),
        '800': tinycolor(tinycolor(hex).darken(18)).toHexString(),
        '900': tinycolor(tinycolor(hex).darken(24)).toHexString(),
        A100: tinycolor(tinycolor(hex).lighten(50).saturate(30)).toHexString(),
        A200: tinycolor(tinycolor(hex).lighten(30).saturate(30)).toHexString(),
        A400: tinycolor(tinycolor(hex).lighten(10).saturate(15)).toHexString(),
        A700: tinycolor(tinycolor(hex).lighten(5).saturate(5)).toHexString()
      };
  }
}

export function shade(col: string, amt: number): string {
  let usePound = false;

  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}

const mapperOpacityToCode: string[] = [
  '00',
  '03',
  '05',
  '08',
  '0A',
  '0D',
  '0F',
  '12',
  '14',
  '17',
  '1A',
  '1C',
  '1F',
  '21',
  '24',
  '26',
  '29',
  '2B',
  '2E',
  '30',
  '33',
  '36',
  '38',
  '3B',
  '3D',
  '40',
  '42',
  '45',
  '47',
  '4A',
  '4D',
  '4F',
  '52',
  '54',
  '57',
  '59',
  '5C',
  '5E',
  '61',
  '63',
  '66',
  '69',
  '6B',
  '6E',
  '70',
  '73',
  '75',
  '78',
  '7A',
  '7D',
  '80',
  '82',
  '85',
  '87',
  '8A',
  '8C',
  '8F',
  '91',
  '94',
  '96',
  '99',
  '9C',
  '9E',
  'A1',
  'A3',
  'A6',
  'A8',
  'AB',
  'AD',
  'B0',
  'B3',
  'B5',
  'B8',
  'BA',
  'BD',
  'BF',
  'C2',
  'C4',
  'C7',
  'C9',
  'CC',
  'CF',
  'D1',
  'D4',
  'D6',
  'D9',
  'DB',
  'DE',
  'E0',
  'E3',
  'E6',
  'E8',
  'EB',
  'ED',
  'F0',
  'F2',
  'F5',
  'F7',
  'FA',
  'FC',
  'FF'
];

export function generateOpacity(col: string, amt: number): string {
  return `${col}${mapperOpacityToCode[amt]}`;
}
