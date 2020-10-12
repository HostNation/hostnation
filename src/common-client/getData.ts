import { Query } from 'rgo';

import ejson from './ejson';
import { root } from './utils';

export default function getData(...queries: Query[]): any;
export default function getData(propName: string, ...queries: Query[]): any;
export default function getData(
  mapPropsToQuery: (props: any) => Query | Query[],
): any;
export default function getData(
  propName: string,
  mapPropsToQuery: (props: any) => Query | Query[],
): any;
export default function getData(...args) {
  const propName = typeof args[0] === 'string' ? (args[0] as string) : 'data';
  const queries = typeof args[0] === 'string' ? args.slice(1) : args;
  return (props$, push) =>
    props$(
      props =>
        typeof queries[0] === 'function' && ejson.stringify(queries[0](props)),
      (jsonQueries, commit) => {
        push({ data: null });
        if (commit) {
          return root.rgo.query(
            ...(jsonQueries ? ejson.parse(jsonQueries) : queries),
            data => push({ [propName]: data && { ...data } }),
          );
        }
      },
    );
}