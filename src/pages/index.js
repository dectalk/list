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
        <h1>DECtalk</h1>
        <form action="https://talk.moustacheminer.com/api/gen">
          <h2>Generate some DECtalk</h2>
          <p>Insert your query into the box and click the submit button.</p>
          <textarea className="dectalk-textarea full-width" ref={this.textarea} name="dectalk"></textarea>
          <button className="btn asbestos">Submit</button>
        </form>
        <h2>List of DECtalks</h2>
        <p>Help this website by adding more DECtalk examples at <a href="https://github.com/dectalk/list/tree/master/data">GitHub</a></p>
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
