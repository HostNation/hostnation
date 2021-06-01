import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';

import { Div, Txt } from '../../core/elements';
import Layout from '../../core/Layout';
import styles, { colors } from '../../core/styles';

import Story from './Story';

import storiesHeader from '../../img/stories.png';

export default ({ data: { markdownRemark: post } }) => (
  <Layout>
    <Helmet title={`${post.frontmatter.title} | HostNation`} />
    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <img src={storiesHeader} style={{ maxWidth: 600, margin: '0 auto' }} />
      <Link to="/stories">
        <Txt style={{ ...styles.text, color: colors.purple }}>« Back</Txt>
      </Link>
      <Div style={{ spacing: 20, background: 'white', padding: '50px 15px' }}>
        <Story post={post} />
      </Div>
    </Div>
  </Layout>
);

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        author
        category
        title
      }
    }
  }
`;
