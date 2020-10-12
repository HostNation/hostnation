import keysToObject from 'keys-to-object';
import st from 'style-transform';

export default (...args) => {
  const map = args.pop();
  return props$ =>
    props$('style', ...args, (style = {} as any, ...values) => {
      if (style.expandFor) return { style: map(...values, style) };
      const keys = Object.keys(style);
      if (keys.length && keys.every(k => typeof style[k] === 'object')) {
        return { style: map(...values, keysToObject(keys, k => st(style[k]))) };
      }
      return { style: map(...values, st(style)) };
    });
};