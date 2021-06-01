import React from 'react';

import { Div, Txt } from '../../core/elements';
import styles, { colors } from '../../core/styles';

export default ({ post }) => (
  <Div style={{ spacing: 25, maxWidth: 720, margin: '0 auto' }}>
    <Txt
      style={{
        ...styles.button('yellow'),
        padding: 5,
        fontSize: 16,
        margin: '0 auto',
        width: 150,
      }}
    >
      {post.frontmatter.category}
    </Txt>
    <Txt style={styles.title}>{post.frontmatter.title}</Txt>
    <Txt
      style={{
        ...styles.body,
        textTransform: 'uppercase',
        fontSize: 16,
        color: colors.yellow,
      }}
    >
      {post.frontmatter.author}
    </Txt>
    <div className="markdown">
      <div
        dangerouslySetInnerHTML={{ __html: post.html || post.excerpt }}
      ></div>
    </div>
  </Div>
);
