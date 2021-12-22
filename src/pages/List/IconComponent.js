import React from 'react';
import IconGroup from './IconGroup';
import styled from 'styled-components';

function IconComponent({ name, icon }) {
  return (
    <IconAlcoholBox>
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
