import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { styled } from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;
const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px 40px 25px 40px;

  form {
    margin-top: 30px;
  }
`;

const BottomBox = styled(WhiteBox)`
  margin-top: 10px;
  height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.button`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  margin-top: 5px;
  box-sizing: border-box;
`;
const Button = styled.input`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 600;
`;
const LineBox = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
`;
const Line = styled.div`
  border-bottom: 1px solid rgb(219, 219, 219);
  width: 100%;
  height: 30px;
`;

const Or = styled.div`
  width: 100%;
  height: 30px;
  padding-top: 20px;
  text-align: center;
  color: grey;
`;

const Facebook = styled.div`
  width: 100%;
  height: 30px;
  padding: 40px 30px 30px 30px;
  text-align: center;
`;

const Form = styled.div``;
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const { name, value } = event.currentTarget;
    console.log(name, value);

    if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault(); //새로고침 방지
    console.log("onSubmit");
  };

  return (
    <Container>
      <Helmet>
        <title>Instagram</title>
      </Helmet>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>

          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="유저네임"
              onChange={onChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={onChange}
              required
            />
            <Button
              type="submit"
              value="로그인하기"
              onChange={onChange}
              required
            />
          </Form>
          <LineBox>
            <Line></Line>
            <Or>OR</Or>
            <Line></Line>
          </LineBox>
          <Facebook>
            <FontAwesomeIcon
              icon={faSquareFacebook}
              size="1x"
              style={{ marginRight: "10px" }}
            ></FontAwesomeIcon>
            Facebook으로 로그인
          </Facebook>
        </TopBox>

        <BottomBox>
          <div>
            계정이 없으신가요? <Link to="/signup">가입하기</Link>
          </div>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default Login;
