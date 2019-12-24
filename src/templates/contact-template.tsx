import React from "react";
import { navigate } from "gatsby-link";
import { Button, Form } from "react-bootstrap";
import Recaptcha from "react-google-recaptcha";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";

import siteConfig = require("../../config");

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default class ContactTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout
        title={`Contact - ${siteConfig.title}`}
        description={siteConfig.subtitle}
        image={""}
      >
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
        <Sidebar />
        <Page title="Contact / お問い合わせ">
          <Form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            onSubmit={this.handleSubmit}
          >
            <Form.Group hidden>
              <Form.Label>Don’t fill this out: </Form.Label>
              <Form.Control name="bot-field" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your name / お名前</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={this.handleChange}
                required={true}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Email / メールアドレス</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={this.handleChange}
                required={true}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message / お問い合わせ内容</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                name="message"
                onChange={this.handleChange}
                required={true}
              />
            </Form.Group>
            <Recaptcha
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
            <br />
            <Button variant="warning" type="submit">
              Send
            </Button>
          </Form>
        </Page>
      </Layout>
    );
  }
}
