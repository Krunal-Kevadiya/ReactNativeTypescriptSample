import { RegexStrings } from '@constants';
import { isEmpty } from 'lodash';

// eslint-disable-next-line no-extend-native
String.prototype.format = function format() {
  const fmt = this;
  if (!fmt.match(RegexStrings.stringFormat)) {
    throw new Error(`String invalid format string. ${fmt}`);
  }
  return fmt.replace(RegexStrings.stringArg, (m: string, str, index) => {
    if (str) {
      return str.replace(RegexStrings.stringArgFormat, (m: string) => m[0]);
    }
    if (index >= arguments.length) {
      throw new Error(`String argument index is out of range in format ${index}`);
    }
    // eslint-disable-next-line prefer-rest-params
    return arguments[index];
  });
};

export function getTwoInitialCharacters(text?: string): string {
  const array = (text || '').split(' ');
  if (array.length >= 2) {
    return `${array[0].charAt(0)}${array[1].charAt(0)}`.toUpperCase();
  }
  return `${array[0].charAt(0)}`.toUpperCase();
}

export function isNotNullOrEmpty(text?: string | null): boolean {
  return text !== null && text !== undefined && !isEmpty(text);
}
