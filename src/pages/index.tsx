import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container, Layout } from "@components";
import { Theatre } from "@components";
import studio from "@theatre/studio";
import { editable as e, SheetProvider } from "@theatre/r3f";
import { UserStaff } from "@components";

const IndexPage: React.FC<PageProps> = () => {
  //   studio.initialize();

  return (
    <Layout>
      <main>
        <h1>Test application</h1>
        <Container />
        {/* <Theatre /> */}
        <UserStaff />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
