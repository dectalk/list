const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent);

    const parts = parent.relativeDirectory.replace(/\\/g, '/').split('/');

    createNodeField({
      node,
      name: 'permalink',
      value: `/${parts.join('/')}/${parent.name === 'index' ? '' : parent.name}`
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const docsTemplate = path.resolve('./src/templates/item/index.js');
  
  graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              permalink
            }
            frontmatter {
              name
            }
            html
          }
        }
      }
    }
  `).then(result => {
    // For each page...
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // Create the page
      createPage({
        path: node.fields.permalink,
        component: docsTemplate,
        context: node.fields
      });
    });
  });

  return;
};
