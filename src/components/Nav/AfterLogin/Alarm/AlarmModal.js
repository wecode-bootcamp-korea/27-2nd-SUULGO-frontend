import React from 'react';
import styled from 'styled-components';

function Alarm({ showModal, closeModal, promiseName }) {
  return (
    <div>
      {!!showModal && (
        <>
          <Background onClick={closeModal} />
          <ModalContainer>
            <PromiseNumber>술고 건수: {promiseName.length}</PromiseNumber>
            <ListBox>
              {promiseName.map((data, i) => {
                return (
                  <NameList key={i}>
                    <ImagePhoto src={data.profile_image} />
                    {data.name}
                  </NameList>
                );
              })}
            </ListBox>
          </ModalContainer>
        </>
      )}
    </div>
  );
}

export default Alarm;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: transparent;
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  width: 21rem;
  max-height: 20rem;
  padding: 16px;
  background: ${({ theme }) => theme.mint};
  border-radius: 10px;
  text-align: center;
  z-index: 2;
`;

const ListBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const PromiseNumber = styled.ul`
  color: #fff;
  text-align: left;
`;

const NameList = styled.li`
  ${({ theme }) => theme.flexSet('center', 'center')}
  margin: 10px;
  padding: 8px 12px;
  color: #fff;
  background-color: ${({ theme }) => theme.mint};
  border: 1px solid #fff;
  border-radius: 30px;

  &:hover {
    color: ${({ theme }) => theme.mint};
    background-color: #fff;
    border: 1px solid #fff;
  }
`;

const ImagePhoto = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 20px;
`;
