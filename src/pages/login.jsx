import React from "react";
import styled from "styled-components";
import { BASENAME } from "../Routes";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  width: 9.2rem;
`;

const HorizontalBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1.8rem;
  padding: 1.6rem 2.8rem;
  border: 2px solid #BDBDBD;
  color: rgba(0, 0, 0, .75);
`;

const VerticalBox = styled.div`
  width: auto;
  height: 7.6rem;
  /* 3.8rem per each rows */
`;

const LoginItem = styled.div`
  width: auto;
  height: 3.24rem;
  margin-bottom: .56rem;
`;

const LoginItemLabel = styled.label`
  display: inline-block;
  width: 5.4rem;
  height: 1.24rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.24rem;
`;

const LoginItemInput = styled.input`
  width: 26rem;
  padding: 1rem;
  background-color: rgb(0, 0, 0, .05);
  border: 1px solid #BDBDBD;
  font-size: 1rem;
  
  &::placeholder,
  &::-moz-placeholder,
  &::-webkit-input-placeholder {
    color: rgba(0, 0, 0, .25);
  }
`;

const LoginButton = styled.button`
  width: 8.6rem;
  height: 7.2rem;
  margin-left: .5rem;
  margin-bottom: .56rem;
  border: none;
  border-radius: 3px;
  background-color: rgb(54, 170, 70);
  font-size: 1rem;
  color: white;
  cursor: pointer;

  transition: background-color .1s ease;
  -webkit-transition: background-color .1s ease;

  &:hover {
    background-color: rgb(28, 130, 50);
  }
`;

class LoginPage extends React.Component {
  handleSubmit(evt) {
    alert('TODO: 로그인 API 사용하기');
    window.location.href = window.location.origin + BASENAME + '/admin';
  }

  render() {
    return (
      <Center>
        <Logo src="logo-with-title.png" alt="Moonda logo with title" />
        <form onSubmit={this.handleSubmit}>
          <HorizontalBox>
            <VerticalBox>
              <LoginItem>
                <LoginItemLabel>ID</LoginItemLabel>
                <LoginItemInput type="text" placeholder="Enter your ID" />
              </LoginItem>
              <LoginItem>
                <LoginItemLabel>Password</LoginItemLabel>
                <LoginItemInput type="password" placeholder="Enter your password" />
              </LoginItem>
            </VerticalBox>
            <LoginButton type="submit" onClick={this.onLogin}>Log in</LoginButton>
          </HorizontalBox>
        </form>
      </Center>
    );
  }
}

export default LoginPage;
