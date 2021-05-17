import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';

import { Div, Txt } from '../../core/elements';
import Layout from '../../core/Layout';
import styles, { colors } from '../../core/styles';

const PostLink = ({ post }) => (
  <Link to={post.parent.name}>
    <Txt style={{ ...styles.text, color: colors.purple }}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Txt>
  </Link>
);

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <Helmet title="Stories | HostNation" />
    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <Txt style={{ ...styles.title }}>HostNation Stories</Txt>
      <Txt style={{ ...styles.text }}>All stories:</Txt>
      <Div style={{ spacing: 20 }}>
        {edges.map((edge) => (
          <PostLink key={edge.node.id} post={edge.node} />
        ))}
      </Div>
    </Div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
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
