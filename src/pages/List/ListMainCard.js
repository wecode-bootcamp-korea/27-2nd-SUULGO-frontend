import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ListMainCard({ img, classNumber, name, id }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/users/${id}`);
  };
  return (
    <MainList onClick={goToDetail}>
      <MainImage src={img} />
      <MainNickName>
        {classNumber}
        {'기'}
        &nbsp;
        {name}
      </MainNickName>
    </MainList>
  );
}

const MainList = styled.div`
  width: 280px;
  margin: 20px;
  border: 1px solid ${({ theme }) => theme.borderGrey};
  border-radius: 5px;
  box-shadow: 3px 3px 3px ${({ theme }) => theme.borderGrey};
  cursor: pointer;
`;

const MainImage = styled.img`
  width: 100%;
  height: 280px;
`;

const MainNickName = styled.p`
  margin: 20px;
  font-size: 18px;
  align-items: center;
  color: ${({ theme }) => theme.black};
`;

export default ListMainCard;
