import React, { Component } from "react";
import { AlertAll } from "../components/Messages/Alert";
import Layout from "../components/Layout/Layout";
const Error = () => {
  return (
    <Layout noHeader={false}>
      <AlertAll />
    </Layout>
  );
};
export default Error;
