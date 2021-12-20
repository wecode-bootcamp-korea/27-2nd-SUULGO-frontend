import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

function NumberSelect({ setNumberValue, surveyLists }) {
  const handleChange = e => setNumberValue({ class_number: e.value });
  const customStyles = {
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused ? '#00C7AE' : '',
      color: isFocused ? '#FFFFFF' : '#323232',
      fontSize: '14px',
      display: 'flex',
    }),
  };

  return (
    <Choice
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: 'none',
        },
      })}
      styles={customStyles}
      options={surveyLists}
      onChange={handleChange}
      placeholder="기수를 선택해주세요."
    />
  );
}

export default NumberSelect;

const Choice = styled(Select)`
  font-size: 16px;
`;
