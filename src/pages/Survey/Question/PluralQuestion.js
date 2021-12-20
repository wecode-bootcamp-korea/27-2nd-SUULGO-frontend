import React from 'react';
import styled from 'styled-components';

function PluralQuestion({
  surveyLists,
  pluralValue,
  setPluralValue,
  surveyCategory,
}) {
  const handleCheck = e => {
    const { name, value } = e.target;
    pluralValue[name].includes(value)
      ? setPluralValue({
          ...pluralValue,
          [name]: pluralValue[name].filter(
            checkedValue => checkedValue !== value
          ),
        })
      : setPluralValue({
          ...pluralValue,
          [name]: [...pluralValue[name], value],
        });
  };

  return (
    <div className="pluralQuestion">
      {surveyLists && (
        <SurveyBox>
          {surveyLists.map((surveyList, id) => (
            <ListBox key={id}>
              <CheckBox
                value={surveyList}
                type="checkbox"
                onChange={handleCheck}
                name={surveyCategory}
                checked={pluralValue[surveyCategory].includes(surveyList)}
              />
              <Label>{surveyList}</Label>
            </ListBox>
          ))}
        </SurveyBox>
      )}
    </div>
  );
}

export default PluralQuestion;

const SurveyBox = styled.ul`
  margin: 20px 0;
  border: 1px solid ${({ theme }) => theme.grey};
  border-bottom: none;
  background-color: ${({ theme }) => theme.white};
`;

const ListBox = styled.li`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;

const Label = styled.label`
  display: inline;
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  font-weight: 500;
`;

const CheckBox = styled.input`
  margin: 0 10px;
  &:checked + ${Label} {
    color: ${({ theme }) => theme.mint};
  }
`;
