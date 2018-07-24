import * as React from 'react';
import r from 'refluent';
import { css, Txt } from 'elmnt';
import { restyle, watchHover } from 'common-client';

import { Link } from '../router';

export default r
  .do(watchHover)
  .do(
    restyle('isHovered', (isHovered, style) => {
      const base = style.mergeKeys({ hover: isHovered });
      return {
        cell: base
          .filter(...css.groups.box, ...css.groups.other)
          .expandFor('paddingLeft'),
        cellAlt: base
          .mergeKeys('alt')
          .filter(...css.groups.box, ...css.groups.other)
          .expandFor('paddingLeft'),
        text: base.filter(...css.groups.text),
        index: base.mergeKeys('index').filter(...css.groups.text),
      };
    }),
  )
  .yield(({ path, values: [url, ...values], index, hoverProps, style }) => (
    <tr {...hoverProps} style={{ cursor: 'pointer' }}>
      {[`${index + 1}`, ...values].map((v, j) => (
        <td
          style={{
            ...(index % 2 === 0 ? style.cell : style.cellAlt),
            ...(j !== 0
              ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
              : {}),
            ...(j !== values.length
              ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
              : { paddingRight: style.cell.paddingLeft }),
          }}
          key={j}
        >
          <Txt style={j ? style.text : style.index}>{v}</Txt>
          <Link
            to={`${path}/${url}`}
            route
            style={{
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          />
        </td>
      ))}
    </tr>
  ));
