import { styled } from "styled-components";
import Header from "./Header";

const Content = styled.div`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
`;

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <Content>{children}</Content>
    </div>
  );
}

export default Layout;
