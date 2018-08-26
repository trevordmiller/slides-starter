import React from "react";
import styled from "styled-components";
import colorValues from "nova-colors";

const GreenBackground = styled.div`
  background: ${colorValues.colors.green};
`;

const BlueBackground = styled.div`
  background: ${colorValues.colors.blue};
`;

const SomeComponent = () => (
  <section>
    <GreenBackground>Some component output</GreenBackground>
    <BlueBackground>Some component output</BlueBackground>
  </section>
);

export default SomeComponent;
