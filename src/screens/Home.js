import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/fontawesome-free-regular";

import { far } from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";

// import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";
const FeedContainer = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
`;
const FeedHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 5px 10px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

const UserName = styled.div`
  padding: 13px;
`;

const ImgBoarder = styled.div`
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const FeedImg = styled.img`
  width: 400px;
  height: 400px;
  margin: 0 70px;
`;

const FourIcons = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  padding: 5px;
  margin-left: 5px;

  justify-content: space-between;
`;
const FeedActions = styled.div`
  width: 120px;
  height: 50px;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
`;
const BookMark = styled.div`
  padding: 5px 0;
`;

const CommentContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 10px;
`;
const CommentBox = styled.div`
  display: flex;
  padding: 10px 10px;
`;
const ViewAll = styled.div`
  padding: 0 10px;
`;
const Writer = styled.div`
  margin-right: 10px;
`;
const Comment = styled.div``;
function Home() {
  return (
    <FeedContainer>
      <Wrapper>
        <FeedHeader>
          <ProfileImg src="../profile.jpg"></ProfileImg>
          <UserName>사용자 ID</UserName>
        </FeedHeader>
        <ImgBoarder>
          <FeedImg src="../feed.png"></FeedImg>
        </ImgBoarder>
        <FourIcons>
          <FeedActions>
            <FontAwesomeIcon
              icon={true ? SolidHeart : far.faHeart}
              // icon={faHeart}
              fontSize="25px"
              color="tomato"
            />
            <FontAwesomeIcon icon={faComment} fontSize="25px" />
            <FontAwesomeIcon icon={faPaperPlane} fontSize="25px" />
          </FeedActions>
          <BookMark>
            <FontAwesomeIcon
              icon={faBookmark}
              fontSize="25px"
              style={{ paddingRight: "10px" }}
            />
          </BookMark>
        </FourIcons>

        <CommentContainer>
          <CommentBox>
            <Writer style={{ fontWeight: " 600" }}>작성자</Writer>
            <Comment>작성내용</Comment>
          </CommentBox>
          <ViewAll>댓글 0개 모두 보기</ViewAll>
          <CommentBox>
            <Writer style={{ fontWeight: " 600" }}>작성자</Writer>
            <Comment>작성 내용</Comment>
          </CommentBox>
        </CommentContainer>
      </Wrapper>
    </FeedContainer>
  );
}

export default Home;
