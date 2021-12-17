import React, { Fragment } from 'react';
import TAG_LIST from '../../components/MatchTagWrapper/tagListData';
import styled from 'styled-components';

function MatchTagWrapper({ userData }) {
  const tagInfo = Object.values(userData).flat(Infinity);
  return (
    <div className="matchTagWrapper">
      <TagTitle># 관심태그</TagTitle>
      {TAG_LIST.map((data, idx) => {
        return (
          <Fragment key={idx}>
            <MatchTagCategoryName>{data.kor_title}</MatchTagCategoryName>
            <MatchTagList>
              {data.value.map((value, id) => {
                return (
                  <MatchTag value={value} tagInfo={tagInfo} key={id}>
                    {value}
                  </MatchTag>
                );
              })}
            </MatchTagList>
          </Fragment>
        );
      })}
    </div>
  );
}

export default MatchTagWrapper;

const TagTitle = styled.h2`
  margin-bottom: 0.875rem;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: -0.03125rem;
  color: #323232;
`;

const MatchTagCategoryName = styled.div`
  margin-bottom: 0.875rem;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.03125rem;
  color: #323232;
`;

const MatchTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const MatchTag = styled.li`
  display: inline-block;
  flex-wrap: wrap;
  text-align: center;
  width: 8rem;
  margin: 0.5rem;
  padding: 9px 18px;
  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: -0.3px;
  border: 1px solid #e1e1e1;
  border-radius: 21px;
  color: ${({ value, tagInfo }) =>
    tagInfo.includes(value) ? 'white' : '#737373'};
  background-color: ${({ value, tagInfo }) =>
    tagInfo.includes(value) ? '#00c7ae' : 'white'};
`;
