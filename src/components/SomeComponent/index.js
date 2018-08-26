import React from "react";
import styled from "styled-components";
import { uiGroups } from "nova-colors";

const StyledDiv = styled.div`
  background: ${uiGroups.userCurrentState};
`;

const SomeComponent = () => (
  <section>
    <div>Some component output</div>
    <StyledDiv>Some node</StyledDiv>
  </section>
);

export default SomeComponent;
