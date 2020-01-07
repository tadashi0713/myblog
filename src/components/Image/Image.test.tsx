import React from "react";
import renderer from "react-test-renderer";
import Image from "./Image";

describe("Image", () => {
  const props = {
    filename: "sample.jpg",
    alt: "sample"
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Image {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
