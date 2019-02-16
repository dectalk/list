import React from 'react';
import GlobalLayout from './../components/GlobalLayout';
import { graphql } from 'gatsby';
import Link from '../components/Links';
import SEO from '../components/SEO';

class Item extends React.Component {
  render() {
    const pages = this.props.data.allMarkdownRemark.edges.map(page => page.node);
    return (
      <GlobalLayout>
        <SEO title="Homepage" keywords={['dectalk', 'list']} />
        <div>
          Put some inspirational message about how DECtalk is excellent.
        </div>
        <ul>
          {pages.map((page) => (
            <li key={page.fields.permalink}>
              <Link to={page.fields.permalink}>{page.frontmatter.name}</Link>
            </li>
          ))}
        </ul>
      </GlobalLayout>
    );
  }
}

export const pageQuery = graphql`
  query homepage {
    allMarkdownRemark {
      edges {
        node {
          html
          rawMarkdownBody
          frontmatter {
            name
          }
          fields {
            permalink
          }
        }
      }
    }
  }  
`;

export default Item;
