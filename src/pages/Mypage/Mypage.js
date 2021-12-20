import React, { useState, useEffect } from 'react';
import MatchTagWrapper from '../../components/MatchTagWrapper/MatchTagWrapper';
import { FaGreaterThan } from 'react-icons/fa';
import filterUserInfoStarsWith from '../../utils';
import styled from 'styled-components';

function Mypage() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch('/data/userData.json')
      .then(res => res.json())
      .then(data => setUserData(data.result));
  }, []);

  const textInfo = filterUserInfoStarsWith(userData, 'text');

  return (
    <div className="mypage">
      <Container>
        <MainTitle>계정 설정</MainTitle>
        <ProfileImageWrapper>
          <ProfileImage src="/images/mangorookie.jpeg" alt="profileImage" />
        </ProfileImageWrapper>
        <ProfileInfoWrapper>
          <AccountInfo>
            {textInfo.map(data => {
              const [title, info] = data;
              return (
                <ItemContainer key={data.id}>
                  <Item>
                    <Title>{title.slice(5).toUpperCase()}</Title>
                    <Info>{info}</Info>
                  </Item>
                  <FaGreaterThan className="icon" />
                </ItemContainer>
              );
            })}
          </AccountInfo>
          <SurveyInfo>
            <MatchTagWrapper userData={userData} />
          </SurveyInfo>
        </ProfileInfoWrapper>
      </Container>
    </div>
  );
}

export default Mypage;

const Container = styled.div`
  max-width: 630px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

const MainTitle = styled.h1`
  line-height: 50px;
  font-size: 2.125rem;
  font-weight: 500;
  color: #323232;
  margin: 3rem 0;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 6.25rem;
  height: 6.25rem;
  margin: 0 auto;
`;

const ProfileImage = styled.img`
  position: relative;
  width: 100% !important;
  height: 100% !important;
  border-radius: 50%;
`;

const ProfileInfoWrapper = styled.section`
  font-size: 1rem;
  margin: 3rem 0 5.125rem;
`;

const AccountInfo = styled.ul`
  margin-bottom: 3rem;
  padding: 0;
  margin-top: 0;
`;

const SurveyInfo = styled.ul`
  margin-bottom: 3rem;
  padding: 0;
  margin-top: 0;
`;

const ItemContainer = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 0.5rem;
  border-bottom: 1px solid #f2f2f2;

  .icon {
    width: 18px;
    height: 18px;
  }
`;

const Item = styled.div`
  flex: 1;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`;

const Title = styled.div`
  color: #b5b5b5;
`;

const Info = styled.div`
  padding-top: 0.25rem;
  color: #323232;
  font-size: 1.2rem;
`;
