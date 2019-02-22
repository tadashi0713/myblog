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
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
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
              Don’t fill this out:{' '}
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
