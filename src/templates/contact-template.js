import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';

const ContactTemplate = ({ data }) => {
  const {
    title,
    subtitle
  } = data.site.siteMetadata;

  return (
    <Layout title={`Contact me - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Contact me">
        <p>Contact</p>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default ContactTemplate;
