import React from "react";

import { Box } from "grommet";

import Logo from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
};
export const All = () => (
  <Box width="xlarge" direction="row" gap="medium">
    <Logo />
    <Logo size="small" />
    <Logo size="large" />
  </Box>
);
