import get from 'lodash/get';

export const theme = (key) => (prop) => get(prop.theme, key) || console.warn('missing key', key);
