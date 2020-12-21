import React from "react";
import PropTypes from "prop-types";

import Page from "@templates/Page";

import Seo from "../components/Seo";

const NotFoundPage = ({ location }) => (
  <Page location={location}>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
);

NotFoundPage.propTypes = {
  location: PropTypes.object,
};

export default NotFoundPage;
