import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ListMainCard({ point, img, classNumber, name, id, location }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/users/${id}`);
  };

  return (
    <MainList onClick={goToDetail}>
      <MainImage src={img} />
      <MainNickName>
        {location === '/list/matching' && (
          <span>
            술고점수 :&nbsp;<Point>{point}</Point>점&nbsp;&nbsp;
          </span>
        )}
        {classNumber === 1004 ? '멘토' : `${classNumber}기`}&nbsp;
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
  box-shadow: 0px 1px 3px ${({ theme }) => theme.borderGrey};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 280px;
`;

const Point = styled.span`
  color: ${({ theme }) => theme.mint};
  font-weight: 500;
`;

const MainNickName = styled.p`
  margin: 20px;
  font-size: 18px;
  align-items: center;
  color: ${({ theme }) => theme.black};
`;

export default ListMainCard;
