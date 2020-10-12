import keysToObject from 'keys-to-object';

export default {
  stringify: value =>
    JSON.stringify(value, (_, v) => {
      if (Array.isArray(v)) {
        return v.map(
          x =>
            Object.prototype.toString.call(x) === '[object Date]'
              ? { $date: x.getTime() }
              : x,
        );
      }
      if (Object.prototype.toString.call(v) === '[object Object]') {
        return keysToObject(
          Object.keys(v),
          k =>
            Object.prototype.toString.call(v[k]) === '[object Date]'
              ? { $date: v[k].getTime() }
              : v[k],
        );
      }
      return v;
    }),
  parse: value =>
    value &&
    JSON.parse(
      value,
      (_, v) =>
        Object.prototype.toString.call(v) === '[object Object]' &&
        Object.keys(v).join(',') === '$date'
          ? new Date(v.$date)
          : v,
    ),
};