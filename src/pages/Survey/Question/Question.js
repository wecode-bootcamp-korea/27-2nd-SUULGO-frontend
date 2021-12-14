import React from 'react';
import styled from 'styled-components';

function Question({ data, key }) {
  return (
    <SurveyBox>
      {data.map(data => (
        <ListBox key={key}>
          <CheckBox type="checkbox" value="value" />
          <Label>{data}</Label>
        </ListBox>
      ))}
    </SurveyBox>
  );
}

export default Question;

const SurveyBox = styled.ul`
  margin: 20px 0;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey};
  border-bottom: none;
`;

const ListBox = styled.li`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;

const CheckBox = styled.input`
  margin: 0 10px;
`;

const Label = styled.p`
  display: inline;
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  font-weight: 500;
`;
