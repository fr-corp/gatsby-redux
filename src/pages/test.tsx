import React from "react";
import BlogPosts from "../../src/blogposts";
import { Counter } from "@components";

const test = () => {
  //   console.log(BlogPosts());
  // <div><BlogPosts></BlogPosts></div>

  return (
    <div>
      <h1>Hello</h1>
      <Counter />
    </div>
  );
};

export const Head = () => (
  <>
    <title>Test page</title>
    <meta name="test" content="just a test page" />
  </>
);
export default test;
