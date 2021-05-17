import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';

import { Div, Txt } from '../../core/elements';
import Layout from '../../core/Layout';
import styles, { colors } from '../../core/styles';

export default ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <Helmet title={`${frontmatter.title} | HostNation`} />
    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <Link to="/stories">
        <Txt style={{ ...styles.text, color: colors.purple }}>« Back</Txt>
      </Link>
      <Div style={{ spacing: 10 }}>
        <Txt style={{ ...styles.title }}>{frontmatter.title}</Txt>
        <Txt style={{ ...styles.title, fontSize: 20 }}>{frontmatter.date}</Txt>
      </Div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Div>
  </Layout>
);

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
