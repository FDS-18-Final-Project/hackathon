import React, { useState, useRef, useEffect } from 'react';
import { Field } from 'formik';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// condition styles
const isFocused = css`
  ${props =>
    props.isFocused &&
    css`
      & + label {
        top: -30px;
        left: 0px;
      }
    `}
`;

//styled components
const StyledInputContainer = styled.div`
  position: relative;
  margin-bottom: 40px;

  &:nth-child(6) {
    margin-bottom: 20px;
  }
  label {
    font-size: 1.5em;
  }
`;

const StyledInputLabel = styled.label`
  font-size: 1.5em;
  transition: all 0.3s;
  position: absolute;
  top: 5px;
  left: 10px;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  box-sizing: border-box;
  ${isFocused}
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  display: block;
  margin-top: 20px;
  padding: 10px;
  font-size: 1.3em;
  box-sizing: border-box;
`;

const Input = ({ field, form: { touched, errors }, type }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (type !== 'checkbox' && type !== 'textarea') {
      inputRef.current.addEventListener('focus', () => setIsFocused(true));
    }
  }, [type]);

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <StyledInputContainer>
            <label htmlFor={field.name}>
              {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
            </label>
            <StyledTextArea id={field.name} rows='6' {...field} />
          </StyledInputContainer>
        );
      case 'checkbox':
        return (
          <>
            <label>
              <Field type='checkbox' name='services' value={field.name} />
              {field.name}
            </label>
          </>
        );
      default:
        return (
          <StyledInputContainer>
            <StyledInput
              type={type}
              ref={inputRef}
              id={field.name}
              isFocused={isFocused}
              {...field}
            />
            <StyledInputLabel htmlFor={field.name}>
              {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
            </StyledInputLabel>
            {errors[field.name] && touched[field.name] ? (
              <span style={{ color: 'red' }}>{errors[field.name]}</span>
            ) : (
              <span style={{ opacity: 0 }}>Error</span>
            )}
          </StyledInputContainer>
        );
    }
  };
  return renderInput();
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'checkbox', 'textarea']),
  field: PropTypes.object,
  form: PropTypes.object
};

Input.defaultProps = {
  type: 'text'
};

Input.displayName = 'Input';

export default Input;
