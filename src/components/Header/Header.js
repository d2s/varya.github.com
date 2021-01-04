import React from "react";

import { Box, Header as GrommetHeader, ResponsiveContext } from "grommet";
import { Link, Logo, Menu } from "@components";

/**
 * Header component based on Grommet Header
 *
 */
const Header = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          direction="row"
          fill="horizontal"
          elevation="medium"
          flex={{ shrink: 0 }}
        >
          <GrommetHeader
            width="xlarge"
            responsive
            pad="medium"
            height={size === "small" ? "48px" : "62px"}
            direction="row"
            margin={{ horizontal: "auto" }}
          >
            <Link unstyled to="/">
              <Logo size={size === "small" ? "small" : "medium"} />
            </Link>
            <Menu />
          </GrommetHeader>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Header;
