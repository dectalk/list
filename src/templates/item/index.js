import React from 'react';
import ItemLayout from './../../components/ItemLayout';
import { graphql } from 'gatsby';

import SEO from '../../components/SEO';

class Item extends React.Component {
  render() {
    const data = this.props.data.markdownRemark;
    return (
      <ItemLayout>
        <SEO title={data.frontmatter.name} keywords={['dectalk', 'list']} />
        <h2>{data.frontmatter.name}</h2>
        <pre>
          {data.rawMarkdownBody}
        </pre>
      </ItemLayout>
    );
  }
}

export const pageQuery = graphql`
  query itemPage($permalink: String!) {
    markdownRemark(fields: { permalink: { eq: $permalink }}) {
      html
      rawMarkdownBody
      frontmatter {
        name
      }
      fields {
        filename
      }
    }
  }
`;

export default Item;
