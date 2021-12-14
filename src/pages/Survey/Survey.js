import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Question from './Question/Question';
import SURVEY_DATA from '../data/surveyData';

function Survey() {
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();
  const backToPage = () => setCurrentPage(prevCount => prevCount - 1);
  const goToPage = () => setCurrentPage(prevCount => prevCount + 1);

  const completedPercent = (currentPage / (SURVEY_DATA.length - 1)) * 100;

  return (
    <Section>
      <Thumbnail src="/images/surveyimg.png" />
      <SurveyWrap>
        <Introduce>설문조사 완료까지 얼마나 남았을까요?</Introduce>
        <IndicateBox>
          <Indicate>
            <ColorIndicate width={`${completedPercent}%`} />
          </Indicate>
          <IndicateNumber>{completedPercent}%</IndicateNumber>
        </IndicateBox>
        <SurveyTitle>{SURVEY_DATA[currentPage].title}</SurveyTitle>
        <Question data={SURVEY_DATA[currentPage].question} />
        <ButtonBox>
          {currentPage === 0 ? null : (
            <Button onClick={backToPage}>이전</Button>
          )}
          {currentPage !== SURVEY_DATA.length - 1 ? (
            <NextButton onClick={goToPage}>다음</NextButton>
          ) : (
            <NextButton onClick={() => navigate('/mypage')}>
              제출하기
            </NextButton>
          )}
        </ButtonBox>
      </SurveyWrap>
    </Section>
  );
}

export default Survey;

const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.grey};
`;

const Thumbnail = styled.img`
  position: relative;
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.deepGrey};
`;

const Introduce = styled.p`
  margin: 5px 0;
  color: ${({ theme }) => theme.deepGrey};
  font-size: 12px;
`;

const IndicateBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between')}
`;

const Indicate = styled.div`
  position: relative;
  width: 88%;
  height: 4px;
  background-color: ${({ theme }) => theme.grey};
  border-radius: 5px;
`;

const ColorIndicate = styled.div`
  position: absolute;
  top: 50;
  width: ${props => props.width};
  height: 4px;
  background-color: ${({ theme }) => theme.mint};
  border-radius: 5px;
  transition: all 0.5s;
`;

const IndicateNumber = styled.p`
  display: inline;
  color: ${({ theme }) => theme.mint};
  font-size: 16px;
  font-weight: 600;
`;

const SurveyWrap = styled.article`
  position: absolute;
  top: 150px;
  left: 100px;
  padding: 40px;
  width: 40%;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderGrey};
  font-size: 24px;
`;

const SurveyTitle = styled.h1`
  padding: 30px 0;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.black};
  font-size: 24px;
`;

const ButtonBox = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')}
`;

const Button = styled.button`
  margin: 20px 0 20px 20px;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  color: ${({ theme }) => theme.mint};
  border: 1px solid ${({ theme }) => theme.borderGrey};
  background-color: ${({ theme }) => theme.white};
  font-size: 16px;
  cursor: pointer;
`;

const NextButton = styled(Button)`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mint};
  border: ${({ theme }) => theme.mint};
`;
