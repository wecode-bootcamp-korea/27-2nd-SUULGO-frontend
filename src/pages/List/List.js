import { React, useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../List/Icon';
import ListMainCard from '../List/ListMainCard';
import API from '../../config';

function List() {
  const [memberList, setmemberList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (!!localStorage.getItem('token')) {
      if (location.pathname === '/list/matching') {
        fetch(`${API.users}/matching`)
          .then(res => res.json())
          .then(data => {
            setmemberList(data.result);
          });
      } else {
        fetch(
          `${API.users}${location.search}
        `
        )
          .then(res => res.json())
          .then(data => {
            setmemberList(data.result);
          });
      }
    } else {
      alert('로그인해주세요^^');
    }
  }, [location.pathname, location.search]);

  return (
    <div>
      <ListPage>
        <Fragment>
          <ListImage src="/images/스인.jpg" alt="listPageHeadPhoto" />
          {location.pathname === '/list' && <Icon />}
          <ListMessage>추천 위코더</ListMessage>
          <CardWrap>
            <MainCard>
              {memberList.map(list => {
                return (
                  <ListMainCard
                    key={list.id}
                    name={list.name}
                    classNumber={list.class_number}
                    img={list.profile_image_url}
                  />
                );
              })}
            </MainCard>
          </CardWrap>
        </Fragment>
      </ListPage>
    </div>
  );
}

const ListPage = styled.div`
  text-align: center;
`;

const ListImage = styled.img`
  width: 100%;
  height: 300px;
`;

const ListMessage = styled.p`
  margin: 30px;
  font-size: 25px;
  font-weight: bold;
`;

const CardWrap = styled.div`
  ${({ theme }) => theme.flexSet('center')}
`;

const MainCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 67%;
`;

export default List;
