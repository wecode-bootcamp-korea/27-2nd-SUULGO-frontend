import React from 'react';
import styled from 'styled-components';

function ListMainCard({ img, classNumber, name }) {
  return (
    <MainList>
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
  width: 350px;
  height: 200px;
  margin: 80px 0px 0px 30px;
  border: 1px solid wheat;
  border-radius: 3px;
`;

const MainImage = styled.img``;

const MainNickName = styled.div`
  height: 50px;
  padding-top: 15px;
  border: 0.5px solid #8fbc8f;
  border-radius: 3px;
  font-weight: bold;
`;

export default ListMainCard;
