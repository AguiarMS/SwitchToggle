import styled from "styled-components";

export const ContainerStyles = styled.nav`
  width: 100%;
  height: 65px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;

  .logo{
    padding: 15px 0;
  }
  ul{
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }

  li{
    padding: 15px 10px;
  }
`