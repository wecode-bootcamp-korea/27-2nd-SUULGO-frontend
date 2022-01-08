import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsBell } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import AlarmModal from './Alarm/AlarmModal';
import API from '../../../config';

function AfterLogin({ username, profileImage, setIsLogin }) {
  const navigate = useNavigate();

  const [promiseCount, setPromiseCount] = useState('');
  const [promiseName, setPromiseName] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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

  useEffect(() => {
    if (!!localStorage.getItem('survey')) {
      fetch(`${API.users}/appointment-alarm`, {
        headers: { Authorization: localStorage.getItem('token') },
      })
        .then(res => res.json())
        .then(data => {
          setPromiseCount(data.message.count);
          setPromiseName(data.message.requester);
        });
    } else {
      alert('설문조사해주세요^^');
    }
  }, []);
  return (
    <AfterLoginBar>
      <Slogan>코드 치다 지친 위코더여..술..GO? </Slogan>
      <AfterContainer>
        <BellButton>
          <Bell onClick={openModal} />
          {!!promiseCount > 0 && <Heart />}
        </BellButton>
        <AlarmModal
          showModal={showModal}
          closeModal={closeModal}
          promiseName={promiseName}
        />
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
  position: relative;
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
