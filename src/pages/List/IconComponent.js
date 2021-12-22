import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconGroup from './IconGroup';
import styled from 'styled-components';
function IconComponent({ name, icon, id }) {
  const navigate = useNavigate();
  const goToIconList = id => {
    navigate(`?alcohol_category_id=${id}`);
  };

  return (
    <IconAlcoholBox
      onClick={() => {
        goToIconList(id);
      }}
    >
      <IconGroup icon={icon} />
      <ItemName>{name}</ItemName>
    </IconAlcoholBox>
  );
}

export default IconComponent;

const IconAlcoholBox = styled.li`
  align-items: center;
`;

const ItemName = styled.p`
  padding-bottom: 25px;
  text-align: center;
  color: black;
  font-weight: 600;
  font-size: 14px;
`;
