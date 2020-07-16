import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Content } from "./Content";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

type LayoutProps = {
  children: any;
  handleThemeChange: () => void;
  handleMapsRendererChange: () => void;
};

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  handleThemeChange,
  handleMapsRendererChange,
}) => {
  return (
    <Container>
      <Header
        handleThemeChange={handleThemeChange}
        handleMapsRendererChange={handleMapsRendererChange}
      />
      <Content>{children}</Content>
    </Container>
  );
};
