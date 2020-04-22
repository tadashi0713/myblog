import React from "react";
import renderer from "react-test-renderer";
import Feed from "./Feed";

describe("Feed", () => {
  const props = {
    edges: [
      {
        node: {
          fields: {
            slug: "/test_0",
            categorySlug: "/test_0",
            tagSlugs: ["/test_0"],
          },
          frontmatter: {
            date: "2016-09-01",
            description: "test_0",
            category: "test_0",
            title: "test_0",
            image: "/media/test_0.png",
            tags: ["test_0"],
          },
        },
      },
      {
        node: {
          fields: {
            slug: "/test_1",
            categorySlug: "/test_1",
            tagSlugs: ["/test_1"],
          },
          frontmatter: {
            date: "2016-09-01",
            description: "test_1",
            category: "test_1",
            title: "test_1",
            image: "/media/test_1.png",
            tags: ["test_1"],
          },
        },
      },
    ],
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Feed {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
