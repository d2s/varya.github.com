import React from "react";
import PropTypes from "prop-types";

import { Box, Grommet } from "grommet";
import { Footer, Header } from "@components";

import theme from "../theme";

/**
 * A container component for layout partials
 *
 */

const Layout = ({ children }) => (
  <Grommet theme={theme} full>
    <Box fill>
      <Header
        background="brand"
        pad="small"
        elevation="small"
        justify="between"
        direction="row"
        align="center"
        flex={false}
      />
      <Box
        flex="grow"
        direction="column"
        overflow="auto"
        height="90%" // Real height is 100% - header height. Any value less then that will work because of flex-grow
      >
        <Box as="main" flex="grow" pad={{ bottom: "medium" }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  </Grommet>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
