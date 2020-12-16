import React from "react";

import { Text } from "grommet";
import { Heading, Link, Paragraph } from "@components";
import Page from "@templates/Page";

import heroImage from "./hero-ui-components.jpg";

const HeroContent = () => (
  <Heading level={1} alignSelf="center" responsive margin={{ top: "auto" }}>
    <Text size="inherit" color="accent">
      Design Systems and Components Production
    </Text>
  </Heading>
);

const Development = () => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
  >
    <Heading level={2}>Design system architecture and infrastructure</Heading>
    <Paragraph>
      Whenever you already have a design system or are looking for a technical
      solution for the very first version of it, you will need foundational work
      for it. Meaning, setting up the architecture and infrastructure of the
      system that would support its operations and growth. Well done, such
      foundational work{" "}
      <Link to="https://www.abstract.com/blog/design-system-buy-in">
        “contributes intangible, long-term results, such as increasing the
        velocity of feature launches”
      </Link>
    </Paragraph>
    <Heading level={2}> Development of UI components</Heading>
    <Paragraph>
      If you need well-designed and bulletproof-developed UI components, I will
      be happy to help. With my experience in designing systems, I can offer
      high level expertise allowing me to produce the components which are
      stable and can be easily integrated into the products with different
      architectural solutions behind the scenes.
    </Paragraph>
    <Heading level={2}>Design system production</Heading>
    <Paragraph>
      I can take care of all the technical aspects for your design system. That
      includes foundational archtecture set up, infrastucture machinery, and
      implementing of UI components. With the experience of setting up and
      manitaining different design systems with various technical solutions
      behind, I can help you to select frameworks and tools aligned with the
      requirements of your products and development teams. Well-managed, the
      process ensures both sucessful initial manufactoring and further smooth
      manitaining of your design system.
    </Paragraph>
  </Page>
);

export default Development;
