import * as React from 'react';
import { Link } from 'react-router-dom';
import { Hover } from 'mishmash';
import { Div, Txt } from 'elmnt';

import styles, { colors } from '../../styles';

import { createUrl } from './index';

interface BreadCrumbsProps {
  path: { url: string; name: string }[];
}
export default function BreadCrumbs({ path }: BreadCrumbsProps) {
  return (
    <Div style={{ layout: 'bar', spacing: 10, paddingRight: 200 }}>
      {path.map((_, i) => (
        <Div style={{ layout: 'bar', spacing: 10 }} key={i}>
          {i !== 0 && (
            <svg
              width={14}
              height={14}
              style={{ display: 'block' }}
              viewBox="0 0 8 16"
            >
              <path
                d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3z"
                style={{ fill: '#333' }}
              />
            </svg>
          )}
          {i === path.length - 1 ? (
            <Txt
              style={{
                ...styles.text,
                fontSize: 16,
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              {path[i].name}
            </Txt>
          ) : (
            <Link to={createUrl(path.map(p => p.url).slice(0, i + 1))}>
              <Hover
                style={{
                  ...styles.text,
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: colors.purple,
                  hover: { color: colors.purpleDark },
                }}
              >
                <Txt>{path[i].name}</Txt>
              </Hover>
            </Link>
          )}
        </Div>
      ))}
    </Div>
  );
}
