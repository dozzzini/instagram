import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { styled } from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

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
const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  margin-top: 5px;
  box-sizing: border-box;
`;
const Button = styled.button`
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
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const LineBox = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
`;
const Form = styled.form``;
const Line = styled.div`
  border-bottom: 1px solid rgb(219, 219, 219);
  width: 100%;
  height: 30px;
`;
const Recommand = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const Or = styled.div`
  width: 100%;
  height: 30px;
  padding-top: 20px;
  text-align: center;
  color: grey;
  font-size: 15px;
`;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  console.log(formState.isValid);

  const onSubmitValid = (data) => {
    //API 호출
    console.log("data valid", data);
    //axios.post("", data)
  };

  const onSubmitInvalid = (data) => {
    console.log("data invalid", data);
  };

  return (
    <Container>
      <Helmet>
        <title>Instagram</title>
      </Helmet>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
          <Recommand>친구들의 사진과 동영상을 보려면 가입하세요.</Recommand>

          <Button type="submit" value="페이스북으로 로그인">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              size="1x"
              style={{ marginRight: "10px" }}
            ></FontAwesomeIcon>{" "}
            Facebook으로 로그인
          </Button>
          <LineBox>
            <Line></Line>
            <Or>OR</Or>
            <Line></Line>
          </LineBox>
          <Form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
            <Input
              type="text"
              // name="info"
              placeholder="휴대폰 번호 또는 이메일 주소"
              {...register("phone", { required: true })}
            />
            <Input
              type="text"
              // name="name"
              placeholder="성명"
              {...register("name", { required: true, minLength: 3 })}
            />

            {errors.name && errors.name.type === "required" && (
              <p style={{ color: "red", fontWeight: "600" }}>
                이름은 반드시 입력 해주셔야 합니다.
              </p>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <p style={{ color: "red", fontWeight: "600" }}>
                이름은 최소 3글자 이상 입력 해주셔야 합니다.
              </p>
            )}
            <Input
              type="text"
              // name="username"
              placeholder="사용자 이름"
              {...register("username", { required: true, minLength: 3 })}
            />
            <Input
              type="password"
              // name="password"
              placeholder="비밀번호"
              {...register("password", { required: true, minLength: 4 })}
            />
            <Button
              type="submit"
              value="가입하기"
              disabled={!formState.isValid}

              //isValid => 데이터가 맞아?
              //true :  disabled가 비활성화 => 클릭이 되게끔함
              //아니 : disabled가 활성화 => 클릭이 안되게끔함

              //disabled = {!formState.isValid}
            >
              가입하기
            </Button>
          </Form>
        </TopBox>

        <BottomBox>
          <div>
            계정이 있으신가요? <Link to="/signup">로그인</Link>
          </div>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default SignUp;
