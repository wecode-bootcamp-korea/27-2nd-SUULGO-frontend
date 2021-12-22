import React from 'react';
import styled from 'styled-components';
import ICONDATA_LIST from './IconData';
import IconComponent from './IconComponent';

function Icon() {
  return (
    <div>
      <IconContainer>
        <IconList>
          {ICONDATA_LIST.map(list => {
            return (
              <IconComponent
                key={list.id}
                name={list.name}
                icon={list.icon_name}
              />
            );
          })}
        </IconList>
      </IconContainer>
    </div>
  );
}

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

const IconList = styled.ul`
  display: flex;
  cursor: pointer;
`;

export default Icon;
