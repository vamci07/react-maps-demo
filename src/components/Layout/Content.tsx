import React from "react";
import styled from "styled-components";

const Container = styled.div``;

type ContentProps = {
  children: any;
};

export const Content: React.FunctionComponent<ContentProps> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
