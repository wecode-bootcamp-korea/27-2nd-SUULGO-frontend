import React from 'react';
import styled from 'styled-components';

function FreeQuestion({ surveyLists, freeValue, setFreeValue }) {
  const handleInputValue = e => {
    const { name, value } = e.target;
    setFreeValue({
      ...freeValue,
      [name]: value,
    });
  };

  return (
    <SurveyBox>
      {surveyLists.map((surveyList, id) => (
        <ListBox key={id}>
          <Label>{surveyList}:</Label>
          <CheckBox
            type="text"
            placeholder={
              surveyList === '당신에게 술이란?'
                ? '30자 이내로 작성해 주세요....'
                : '10자 이내로 작성해 주세요....'
            }
            name={(() => {
              switch (surveyList) {
                case '취미':
                  return 'hobby';
                case '선호장소':
                  return 'favorite_place';
                case '선호하는 안주':
                  return 'favorite_food';
                case '당신에게 술이란?':
                  return 'comment';
                default:
                  return null;
              }
            })()}
            onChange={handleInputValue}
            maxLength={surveyList === '당신에게 술이란?' ? '30' : '10'}
          />
        </ListBox>
      ))}
    </SurveyBox>
  );
}

export default FreeQuestion;

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

const CheckBox = styled.input`
  display: inline-block;
  margin: 0 10px;
  width: 250px;
  border-bottom: 1px solid ${({ theme }) => theme.deepGrey};
  color: ${({ theme }) => theme.mint};
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    font-size: 13px;
    font-weight: 300;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 150px;
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  font-weight: 500;
`;
