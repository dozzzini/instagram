import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/fontawesome-free-regular";
import { faUser } from "@fortawesome/fontawesome-free-regular";

const HeaderContainer = styled.div`
  margin-top: 10px;
  padding: 20px 0;
  max-width: 550px;
  margin: 0 auto;
  width: 100%;
  height: 70px;
  border-top: 2px solid rgb(219, 219, 219);
  border-bottom: 2px solid rgb(219, 219, 219);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Column = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
`;

const Button = styled.div`
  border: 2px solid black;
  width: 70px;
  height: 25px;
  border-radius: 5px;
`;
function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Column>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Column>
        <Column>
          <FontAwesomeIcon
            icon={faHouse}
            size="1x"
            style={{ paddingTop: "5px" }}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            size="1x"
            style={{ paddingTop: "5px" }}
          />
          <FontAwesomeIcon
            icon={faUser}
            size="1x"
            style={{ paddingTop: "5px" }}
          />
          <Button></Button>
        </Column>
      </Wrapper>
    </HeaderContainer>
  );
}

export default Header;
