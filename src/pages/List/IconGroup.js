import React from 'react';
import styled from 'styled-components';

function IconGroup({ icon }) {
  return <Group>{icon}</Group>;
}

const Group = styled.div`
  margin: 30px 30px 10px 30px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

export default IconGroup;
