import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  border: 1px solid #4503fa;
  padding: 15px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: inline-block;
  border-radius: 8px;
  padding: 0.8rem 0;
  margin: 0.5rem 0rem;
  width: 11rem;
  font-size: 16px;
  color: white;
  background-color: #c003fa;
  border: 2px solid white;
  cursor: pointer;
`;
export const Label = styled.label`
  margin-bottom: 20px;
  color: #c003fa;
`;
export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin-bottom: 15px;
  border: 1px solid #4503fa;
  outline-color: #c003fa;
`;
