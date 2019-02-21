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
    <Layout title={`Contact - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Contact">
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          // onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input
                name="bot-field"
                // onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input
                type="text"
                name="name"
                // onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input
                type="email"
                name="email"
                // onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea
                name="message"
                // onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
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
