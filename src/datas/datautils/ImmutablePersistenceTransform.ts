/**
 * Transformer to use seamless-immutable with redux-persist
 * More info: https://github.com/rt2zz/redux-persist/issues/133#issuecomment-299298148
 */
import R from 'ramda';
import Immutable from 'seamless-immutable';

// is this object already Immutable?
const isImmutable = R.has('asMutable');

// change this Immutable object into a JS object
function convertToJs(state: any) {
  return state.asMutable({ deep: true });
}

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = R.when(isImmutable, convertToJs);

// convert this JS object into an Immutable object
function toImmutable(raw: any) {
  return Immutable(raw);
}

// the transform interface that redux-persist is expecting
export default {
  out: (state: any) => {
    return toImmutable(state);
  },
  in: (raw: any) => {
    return fromImmutable(raw);
  }
};
