import styled from "styled-components";

export const RightNavStyle = styled.ul`
  ul{
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }

  li{
    padding: 15px 10px;
  }

  @media (max-width: 768px){
    display: none;
    flex-flow: column nowrap;
    background-color: '#0d2538';
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
  }

  li{
    color: '#fff';
  }

`