import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BeforeLogin from './BeforeLogin/BeforeLogin';
import AfterLogin from './AfterLogin/AfterLogin';

function Nav() {
  const [isLogin, setIsLogin] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (!!localStorage.getItem('token')) {
      setIsLogin(true);
    }
  }, [location]);

  return (
    <NavBar>
      <LogoImage src="/images/suulgolog.png" alt="logo" />
      {!isLogin ? (
        <BeforeLogin setIsLogin={setIsLogin} />
      ) : (
        <AfterLogin
          username={localStorage.getItem('username')}
          profileImage={localStorage.getItem('profileImage')}
          setIsLogin={setIsLogin}
        />
      )}
    </NavBar>
  );
}

export default Nav;

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  ${({ theme }) => theme.flexSet('space-between')}
  height: 80px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.borderGrey};
  z-index: 1000;
`;

const LogoImage = styled.img`
  width: 140px;
`;
