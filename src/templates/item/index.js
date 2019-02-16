import React from 'react';
import ItemLayout from './../../components/ItemLayout';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';

import './index.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.copy = this.copy.bind(this);
    this.textarea = React.createRef();
  }
  copy() {
    this.textarea.current.select();
    document.execCommand('copy');
  }
  render() {
    const data = this.props.data.markdownRemark;
    return (
      <ItemLayout>
        <SEO title={data.frontmatter.name} keywords={['dectalk', 'list']} />
        <h2>{data.frontmatter.name}</h2>
        <button onClick={this.copy}>Copy</button> 
        <textarea className="dectalk-textarea full-width" ref={this.textarea} value={data.rawMarkdownBody}></textarea>
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
