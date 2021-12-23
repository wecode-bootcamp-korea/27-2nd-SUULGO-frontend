import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsBell } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

function AfterLogin({ username, profileImage, setIsLogin }) {
  const navigate = useNavigate();
  const { Kakao } = window;
  const clickToLogout = () => {
    setIsLogin(false);
    if (!Kakao.Auth.getAccessToken()) {
      alert('로그아웃 실패! 가지마세요^^');
      return;
    }
    Kakao.Auth.logout(function () {});
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('profileImage');
    localStorage.removeItem('survey');
    navigate('/');
  };

  return (
    <AfterLoginBar>
      <Slogan>코드 치다 지친 위코더여..술..GO? </Slogan>
      <AfterContainer>
        <BellButton>
          <Bell />
          <Heart />
        </BellButton>
        <Link to="/profile">
          <UserProfile src={profileImage} alt="profile" />
        </Link>
        <Link to="/profile">
          <UserName>{username} 위코더님</UserName>
        </Link>
        <LogoutButton onClick={clickToLogout}>로그아웃</LogoutButton>
      </AfterContainer>
    </AfterLoginBar>
  );
}

const AfterLoginBar = styled.div`
  ${({ theme }) => theme.flexSet('space-between')}
  width: 100%;
`;

const Slogan = styled.h1`
  color: ${({ theme }) => theme.mint};
`;

const AfterContainer = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet}
`;

const BellButton = styled.button`
  padding: 0;
  background: inherit;
  box-shadow: none;
  border: none;
  border-radius: 0;
  overflow: visible;
  cursor: pointer;
`;

const Bell = styled(BsBell)`
  margin: 10px;
  color: ${({ theme }) => theme.mint};
  font-size: 24px;
`;

const Heart = styled(AiFillHeart)`
  position: absolute;
  top: 0;
  left: 10px;
  margin: 10px;
  color: red;
  font-size: 15px;
`;

const UserProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserName = styled.h2`
  margin: 10px;
  color: ${({ theme }) => theme.mint};
  font-size: 18px;
  font-weight: 500;
`;

const LogoutButton = styled.button`
  width: 80px;
  padding: 8px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mint};
  border-style: none;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
`;

export default AfterLogin;
