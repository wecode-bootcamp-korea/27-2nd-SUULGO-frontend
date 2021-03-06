import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../../config';

function BeforeLogin({ setIsLogin }) {
  const { Kakao } = window;
  const navigate = useNavigate();

  const loginWithKakao = () =>
    Kakao.Auth.loginForm({
      success: function (response) {
        fetch(API.login, {
          headers: {
            Authorization: response.access_token,
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data.message) {
              localStorage.setItem('token', data.token);
              localStorage.setItem('survey', data.survey);
              localStorage.setItem(
                'username',
                data.result.kakao_account.profile.nickname
              );
              localStorage.setItem(
                'profileImage',
                data.result.kakao_account.profile.profile_image_url
              );
              setIsLogin(true);
              if (!!data.survey) {
                navigate('/');
              } else {
                navigate('/survey');
              }
            }
          });
        setIsLogin(true);
      },
      fail: function (error) {
        alert('처음 부터 다시 시도해 주세요.');
      },
    });
  return <LoginButton onClick={loginWithKakao}>로그인</LoginButton>;
}

export default BeforeLogin;

const LoginButton = styled.button`
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
