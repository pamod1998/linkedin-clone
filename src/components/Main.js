import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>

        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
`;
export default Main;
