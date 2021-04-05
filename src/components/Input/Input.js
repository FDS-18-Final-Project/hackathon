import styled, { css } from 'styled-components'
import propTypes from 'prop-types'

const StyledInputLabel = styled.label`
  font-size: 1.5em;
  transition: all 0.3s;
  position: absolute;
  top: 5px;
  left: 10px;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  box-sizing: border-box;
`

const StyledInputContainer = styled.div`
  position: relative;
  margin-bottom: 40px;

  &:nth-child(6) {
    margin-bottom: 20px;
  }
  label {
    font-size: 1.5em;
  }
`

export default function Input({ type, title, name }) {
  return (
    <>
    <StyledInputContainer>
      <StyledInput 
        type={type}
        id={name}
        name={name}
      />
      <StyledInputLabel
        htmlFor={name}
      >
        {title}
      </StyledInputLabel>
    </StyledInputContainer>
    </>
  )
}

Input.propTypes = {
  type: propTypes.oneOf(['text', 'email']),
  name: propTypes.string.isRequired,
}

Input.defaultProps = {
  type: 'text'
}

Input.displayName = 'Input'
