import React from 'react';
import { graphql } from 'gatsby';
import { Button, Form } from 'react-bootstrap';
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
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossOrigin="anonymous"
      />
      <Sidebar />
      <Page title="Contact">
        <Form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          // onSubmit={this.handleSubmit}
        >
          <Form.Group controlId="bot-field" hidden>
            <Form.Label>Don’t fill this out:{' '}</Form.Label>
            <Form.Control
              // onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Your name / お名前</Form.Label>
            <Form.Control
              type="text"
              // onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Your Email / メールアドレス</Form.Label>
            <Form.Control
              type="email"
              // onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message / お問い合わせ内容</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              // onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
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
