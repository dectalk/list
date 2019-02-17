import React from 'react';
import ItemLayout from './../../components/ItemLayout';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';

import './index.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.copy = this.copy.bind(this);
    this.playMSS = this.playMSS.bind(this);
    this.textarea = React.createRef();
    this.loading = false;
    this.state = {
      playButtonText: 'Play in browser',
      blobURL: null,
      loading: false,
    };
  }
  copy() {
    this.textarea.current.select();
    document.execCommand('copy');
  }
  playMSS() {
    if (this.state.blobURL) {
      this.playURL(this.state.blobURL);
    } else if (this.state.loading === false) {
      const data = this.props.data.markdownRemark;
      this.setState({
        playButtonText: 'Loading...',
        loading: true
      });
      fetch('https://talk.moustacheminer.com/api/gen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          dectalk: data.rawMarkdownBody
        })
      })
        .then(res => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          this.setState({
            blobURL: url,
            playButtonText: null,
            loading: false,
          });
        });
    }
  }
  render() {
    const data = this.props.data.markdownRemark;
    return (
      <ItemLayout>
        <SEO title={data.frontmatter.name} keywords={['dectalk', 'list']} />
        <h2>{data.frontmatter.name}</h2>
        {
          data.frontmatter.by ?
            <p>By: {data.frontmatter.by}</p> :
            null
        }
        <div className="row">
          <a className="btn asbestos" onClick={this.copy}>Copy</a>
          {
            this.state.playButtonText ?
              <a className="btn asbestos" onClick={this.playMSS}>{this.state.playButtonText}</a> :
              null
          }
          {
            data.frontmatter.link ?
              <a className="btn asbestos" href={data.frontmatter.link}>{data.frontmatter.by || 'Source'}</a> :
              null
          }
        </div>
        
        {
          this.state.blobURL ?
            <div className="row">
              <audio className="full-width" controls autoPlay>
                <source src={this.state.blobURL} type="audio/wav"/>
              </audio> 
            </div> :
            null
        }
        
        <textarea className="dectalk-textarea full-width" ref={this.textarea} value={data.rawMarkdownBody} readOnly></textarea>
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
        link
        by
      }
    }
  }
`;

export default Item;
