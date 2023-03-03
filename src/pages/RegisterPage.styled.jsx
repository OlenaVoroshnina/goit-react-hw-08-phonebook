import styled from 'styled-components';

export const FormRegister = styled.form`
  margin: 20px auto;
  padding: 20px 20px 55px;
  border-radius: 5px;
  background-color: rgb(33 150 243 / 38%);
  display: flex;
  flex-direction: column;
  max-width: 400px;
  align-items: stretch;
  gap: 10px;
  color: #0805dd;
`;
export const FormTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;
export const FormButton = styled.button`
  transition: all 0.3s ease 0s;
  margin-top: 20px;
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  color: rgb(12 53 229);
  background: transparent;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: rgb(18 92 55 / 75%) 0px 2px 8px,
    rgb(255 255 255 / 35%) 0px 1px inset, rgb(255 255 255 / 20%) 0px 10px inset,
    rgb(255 255 255 / 25%) 0px 10px 20px inset,
    rgb(18 92 55 / 75%) 0px -15px 30px inset;

  &:hover {
    cursor: pointer;
    background-color: rgb(12 53 229);
    color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 70%) 0px 5px 10px 0px inset;
  }
`;
