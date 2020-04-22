import React from "react";
import renderer from "react-test-renderer";
import ContactTemplate from "./contact-template";

describe("ContactTemplate", () => {
  const props = {
    data: {
      site: {
        siteMetadata: {
          title: "test",
          subtitle: "test",
        },
      },
    },
  };

  it("renders correctly", () => {
    const tree = renderer.create(<ContactTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
