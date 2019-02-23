import React from 'react';
import { graphql } from 'gatsby';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class ContactTemplate extends React.Component {
  // const {
  //   title,
  //   subtitle
  // } = data.site.siteMetadata;
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => console.log('Hello'))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout title={'Contact - title'} description='subtitle'>
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
            onSubmit={this.handleSubmit}
          >
            <Form.Group controlId="bot-field" hidden>
              <Form.Label>Don’t fill this out:{' '}</Form.Label>
              <Form.Control
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Your name / お名前</Form.Label>
              <Form.Control
                type="text"
                onChange={this.handleChange}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Your Email / メールアドレス</Form.Label>
              <Form.Control
                type="email"
                onChange={this.handleChange}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message / お問い合わせ内容</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                onChange={this.handleChange}
                required={true}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Page>
      </Layout>
    );
  }
}

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
