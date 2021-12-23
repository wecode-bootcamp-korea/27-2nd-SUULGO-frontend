import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icons from '../Main/Icons';
function Main() {
  const [member, setMember] = useState(true);

  function changPage() {
    setMember(prev => !prev);
  }
  const navigate = useNavigate();
  const goToList = () => {
    navigate('/list/matching');
  };
  return (
    <div>
      {member ? (
        <MainPage>
          <Wrapper>
            <MainPageLeft>
              <MainPageLeftTop>
                <SearchService>서비스 찾기</SearchService>
                <SearchMember onClick={changPage}>술친구 찾기</SearchMember>
              </MainPageLeftTop>
              <Title>1분 만에</Title>
              <Title>당신의 술코더를 찾아드려요!</Title>
              <Icons />
            </MainPageLeft>
            <MainPageRight>
              <RightImage src="/images/suulgolog.png" />
            </MainPageRight>
          </Wrapper>
        </MainPage>
      ) : (
        <MainPage>
          <Wrapper>
            <MainPageLeft>
              <MainPageLeftTop>
                <FindService onClick={changPage}>서비스 찾기</FindService>
                <FindFriend>술친구 찾기</FindFriend>
              </MainPageLeftTop>
              <Title>3초에 1명</Title>
              <Title>위코더를 찾았어요!</Title>

              <Button onClick={goToList}>빠른 서칭</Button>
            </MainPageLeft>
            <MainPageRight>
              <RightImage src="/images/suulgolog.png" />
            </MainPageRight>
          </Wrapper>
        </MainPage>
      )}
    </div>
  );
}
export default Main;

const MainPage = styled.div``;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet()}
  margin-top: 50px;
`;

const MainPageLeft = styled.div`
  width: 500px;
  height: 660px;
`;

const MainPageLeftTop = styled.div`
  display: flex;
`;

const SearchService = styled.div`
  width: 150px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

const SearchMember = styled.div`
  width: 300px;
  padding-left: 10px;
  border-bottom: 1px solid #c0c0c0;
  color: gray;
  font-size: 20px;
  cursor: pointer;
`;

const Title = styled.h1`
  margin-top: 20px;
  color: black;
  font-weight: bold;
  font-size: 30px;
`;

const FindFriend = styled.div`
  width: 300px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  color: black;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const FindService = styled.div`
  width: 150px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c0c0c0;
  color: gray;
  font-size: 20px;
  cursor: pointer;
`;

const MainPageRight = styled.div`
  width: 500px;
  height: 500px;
`;

const RightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-left: 120px;
  padding-top: 50px;
  background-color: white;
`;

const Button = styled.button`
  width: 250px;
  height: 50px;
  margin-top: 50px;
  border-radius: 10px;
  border-style: none;
  color: white;
  background-color: #00c7ae;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
`;
