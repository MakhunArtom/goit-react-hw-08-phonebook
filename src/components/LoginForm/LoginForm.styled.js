import styled from 'styled-components';

export const LoginFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  margin: 20px 0 0 0;
  padding: 20px;
  border: 2px ;
  border-radius: 10px;
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 700;
  font-size: 20px;
  line-height: 1, 875;
`;

export const LoginInput = styled.input`
  font: inherit;
  padding: 8px;
  margin: 8px 0 8px 0;
  border: solid 1px;
  border-radius: 8px;
`;

export const LoginButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: auto;
  padding: 8px 8px 8px 8px;
  border-radius: 4px;
  border: none;
  height: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1, 875;
  text-transform: uppercase;
  cursor: pointer;
`;

export const LoginH1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
`;
