import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';

import { Div, Txt } from '../../core/elements';
import Layout from '../../core/Layout';
import styles, { colors } from '../../core/styles';
import st from '../../core/style-transform';
import { useHover } from '../../core/utils';

import Story from '../../core/Story';

import storiesHeader from '../../img/stories.png';

const PostLink = ({ post }) => {
  console.log(post.frontmatter.category);
  const [isHovered, hoverProps] = useHover();
  const buttonStyle = st(styles.button('purple') as any)
    .mergeKeys({ hover: isHovered })
    .merge({
      padding: 5,
      fontSize: 16,
      display: 'inline-block',
      width: 150,
    });
  if (post.frontmatter.category == "HostNation Film") {
    return (
      <Link to={post.parent.name}>
        <Txt {...hoverProps} style={{ ...buttonStyle, padding: 5, fontSize: 16 }}>
          SEE MORE »
      </Txt>
      </Link>
    );
  }
  else {
    return (
      <Link to={post.parent.name}>
        <Txt {...hoverProps} style={{ ...buttonStyle, padding: 5, fontSize: 16 }}>
          READ MORE »
      </Txt>
      </Link>
    );
  }
};

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout location="/stories">
    <Helmet title="Stories | HostNation" />
    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <img src={storiesHeader} style={{ maxWidth: 600, margin: '0 auto' }} />
      <Div style={{ spacing: 20 }}>
        {edges.map((edge, i) => [
          ...(i === 0
            ? []
            : [
              <div
                key={`${edge.node.id}_A`}
                style={{
                  background: colors.black,
                  height: 3,
                  borderRadius: 3,
                }}
              />,
            ]),
          <Div
            key={`${edge.node.id}_B`}
            style={{ spacing: 20, background: 'white', padding: '50px 15px' }}
          >
            <Story post={edge.node} />
            <div style={{ maxWidth: 600, margin: '0 auto' }}>
              <PostLink post={edge.node} />
            </div>
          </Div>,
        ])}
      </Div>
    </Div>
  </Layout>
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(format: HTML, pruneLength: 700)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            author
            category
            title
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`;
