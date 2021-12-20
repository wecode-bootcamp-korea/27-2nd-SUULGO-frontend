import React from 'react';
import styled from 'styled-components';

function Description() {
  return (
    <SideArticle>
      <Title>술고는 어떤 곳인가요?</Title>
      <Explain>
        코드치다가 지치지 않으셨나요?
        <br />
        술고는 지친 위코더를 위해, 술 취향이 일치하는 위코더를 쉽고 빠르게
        연결해드리는 매칭 서비스입니다.
        <br />
        1분 내외의 설문조사를 작성하면, 맞춤형 매칭과 리스트를 볼 수 있어요.
        <br />
        맘에 쏙 드는 맞춤형 서비스를 받아보세요!
      </Explain>
      <Title>설문조사 입력 후 약속을 잡아보세요!</Title>
      <Explain>
        코드치다 지친 위코더여, 코드 대신 술잔 같이 부딪쳐요.
        <br />
        약속잡기 기능으로 한 잔 해요!
      </Explain>
    </SideArticle>
  );
}

export default Description;

const SideArticle = styled.article`
  padding: 80px 40px 0 40px;
  width: 400px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.black};
  font-weight: 500;
`;

const Explain = styled.h2`
  margin-bottom: 50px;
  color: ${({ theme }) => theme.deepGrey};
  font-size: 14px;
  line-height: 22px;
`;
