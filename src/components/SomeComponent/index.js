import React from "react";
import styled from "styled-components";
import colorValues, { uiGroups } from "nova-colors";

const GreenBackground = styled.div`
  background: ${colorValues.colors.green};
  color: ${uiGroups.background};
`;

const BlueBackground = styled.div`
  background: ${colorValues.colors.blue};
  color: ${uiGroups.background};
`;

const SomeComponent = () => (
  <section>
    <GreenBackground>Some component output</GreenBackground>
    <BlueBackground>Some component output</BlueBackground>
  </section>
);

export default SomeComponent;
