import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { changeDateForm } from '../../utils';
import API from '../../config';
import 'react-datepicker/dist/react-datepicker.css';

function RequestModal({ isOpen, close, id }) {
  const [startDate, setStartDate] = useState(new Date());
  const dateInForm = changeDateForm(startDate);

  const sendAlarm = () => {
    fetch(API.promise, {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        respondent_id: id,
        time: dateInForm,
      }),
    })
      .then(res => res.json())
      .then(response => {
        switch (response.message) {
          case 'SUCCESS':
            alert('전송완료 !');
            break;
          case 'ALREADY_EXISTS':
            alert('이미 약속이 있어요 ㅠ');
            break;
          case 'DATE_ERROR':
            alert('날짜가 이미 지났어요~!');
            break;
          case 'KEY_ERROR':
          case 'DoesNotExist':
            alert('예상치 못한 에러 ㅠ 처음부터 다시 시작해주세요 !');
            break;
          default:
            break;
        }
      })
      .then(close);
  };

  return (
    <div className="requestModal">
      {isOpen && (
        <Wrapper onClick={close}>
          <Modal onClick={el => el.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>언제 술고! 하시겠나요 ?</ModalTitle>
              <CloseBtn onClick={close}>X</CloseBtn>
            </ModalHeader>
            <ModalBody>
              <DatePickerWrapper>
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  inline
                />
              </DatePickerWrapper>
              <Button onClick={sendAlarm}>술고 !</Button>
            </ModalBody>
          </Modal>
        </Wrapper>
      )}
    </div>
  );
}

export default RequestModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 480px;
  height: 621px;
  background-color: white;
  position: relative;
  padding: 20px;
  border-radius: 0.25rem;
`;

const ModalHeader = styled.header`
  padding: 2.5rem 2.5rem 0;
  border: none;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const ModalTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.0313rem;
  text-align: center;
  padding-left: 50px;
`;

const CloseBtn = styled.button`
  float: right;
  font-size: 1.2rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  background-color: transparent;
  cursor: pointer;
`;

const ModalBody = styled.div`
  display: flex;
  padding: 2.5rem 2.5rem 0;
  border: none;
  flex-direction: column;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  display: inline-block;
  margin: 0 auto;
  width: 60%;
  text-align: center;
  vertical-align: middle;
  padding: 0.6875rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #00c7ae;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
`;
