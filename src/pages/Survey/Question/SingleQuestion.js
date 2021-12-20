import React from 'react';
import styled from 'styled-components';

function SingleQuestion({
  surveyLists,
  setSingleValue,
  singleValue,
  surveyCategory,
}) {
  const handleInputValue = e => {
    const { name, value } = e.target;
    setSingleValue({
      ...singleValue,
      [name]: value,
    });
  };

  return (
    <div className="singleQuestion">
      {surveyLists && (
        <SurveyBox>
          {surveyLists.answer.map((answers, id) => (
            <ListBox key={id}>
              <CheckBox
                name={surveyCategory}
                type="radio"
                value={answers}
                onChange={handleInputValue}
                //TODO:checked활성화 시키는방법 해결하기
                // checked={!!singleValue.surveyCategory === answers && 'checked'}
              />
              <Label>{answers}</Label>
            </ListBox>
          ))}
        </SurveyBox>
      )}
    </div>
  );
}

export default SingleQuestion;

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
