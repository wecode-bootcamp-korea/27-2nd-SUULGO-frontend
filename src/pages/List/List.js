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
    fetch(
      `${API.users}${location.search}
    `
    )
      .then(res => res.json())
      .then(data => {
        setmemberList(data.result);
      });
  }, [location.search]);

  return (
    <div>
      <ListPage>
        <Fragment>
          <ListImage src="/images/스인.jpg" alt="listPageHeadPhoto" />
          <Icon />
          <ListMessage>추천 위코더</ListMessage>
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
  opacity: 0.9;
`;

const ListMessage = styled.p`
  margin-top: 30px;
  font-size: 25px;
  font-weight: bold;
`;

const MainCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 0 0 210px;
`;

export default List;
