import React from "react";
import styled from "styled-components";
import { uiGroups } from "nova-colors";

const StyledButton = styled.button`
  background: ${uiGroups.userCurrentState};
`;

const SomeDemoComponent = () => (
  <section>
    <div>Some component output</div>
    <StyledButton>Some node</StyledButton>
  </section>
);

export default SomeDemoComponent;
