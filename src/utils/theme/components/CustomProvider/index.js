import React, { Fragment } from "react";
import { Head } from "mdx-deck";

const CustomProvider = ({ children }) => (
  <Fragment>
    <Head>
      <title>Some title</title>
    </Head>
    <main>{children}</main>
  </Fragment>
);

export default CustomProvider;
