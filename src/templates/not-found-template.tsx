import React, { ReactElement } from "react";
import { graphql } from "gatsby";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";

const NotFoundTemplate = ({ data }): ReactElement => {
  const { title, subtitle } = data.site.siteMetadata;

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle} image={""}>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default NotFoundTemplate;
