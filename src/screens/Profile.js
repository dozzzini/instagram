import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { faHeart, faComment } from "@fortawesome/fontawesome-free-regular";

const ProfileContainer = styled.div``;
const HeaderContainer = styled.div`
  display: flex;
  // justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 10px;
  border: 2px solid rgb(219, 219, 219);
  border-radius: 5px;
  margin-top: 20px;
`;
const UserProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 0 20px 0 100px;
`;
const UserInfo = styled.div`
  width: 50%;
  height: 100px;
  // border: 1px solid blue;
  text-align: center;
  padding: 20px;
`;
const UserId = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;
const Description = styled.div``;

const ContentContainer = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-auto-rows: 150px;
  grid-template-columns: repeat(3, 1fr);
`;

const Content = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
  background-position: center;
`;
const InnerContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: start;
  justify-content: center;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
`;
function Profile() {
  return (
    <ProfileContainer>
      <HeaderContainer>
        <UserProfileImg src="./profile.jpg" />
        <UserInfo>
          <UserId>사용자 ID</UserId>
          <Description>사용자 설명</Description>
        </UserInfo>
      </HeaderContainer>
      <ContentContainer>
        <Content bg="https://blog.kakaocdn.net/dn/cPs9Im/btrb2k1feQq/BW34tbqjtHscUYkgCPyjcK/img.jpg">
          {/* <InnerContainer>
            <Icon>
              <FontAwesomeIcon icon={faHeart} size="2x" />
              좋아요
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} size="2x" />
              댓글
            </Icon>
          </InnerContainer> */}
        </Content>
        <Content bg="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2kkR/image/_EQ0kcoOcW6bTpoUiFtTbTz9s-s.jpeg">
          <InnerContainer>
            <Icon>
              <FontAwesomeIcon icon={faHeart} size="2x" />
              좋아요
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} size="2x" />
              댓글
            </Icon>
          </InnerContainer>
        </Content>
        <Content bg="https://pbs.twimg.com/media/FEYSxJdaMAEk7-5.jpg:large">
          <InnerContainer>
            <Icon>
              <FontAwesomeIcon icon={faHeart} size="2x" />
              좋아요
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} size="2x" />
              댓글
            </Icon>
          </InnerContainer>
        </Content>
      </ContentContainer>
    </ProfileContainer>
  );
}

export default Profile;
