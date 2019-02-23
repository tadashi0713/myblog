import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';

const ContactThanksTemplate = ({ data }) => {
  const {
    title,
    subtitle
  } = data.site.siteMetadata;

  return (
    <Layout title={`Thanks  - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Thank you">
        <p>Thank you for contact</p>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query ContactThanksQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default ContactThanksTemplate;
