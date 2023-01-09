import styled from 'styled-components';

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  margin: 20px 0 0 0;
  padding: 20px;
  border: 2px;
  border-radius: 10px;
`;

export const PhonebookLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0 10px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 1, 875;
`;

export const PhonebookText = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const PhonebookInput = styled.input`
  font: inherit;
  padding: 8px;
  margin: 8px 0 8px 0;
  max-width: 80%;
  border-radius: 8px;
`;

export const PhonebookButton = styled.button`
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

export const PhonebookCheckbox = styled.input`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  border: 1px;
`;

export const PhonebookCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 1, 875;
`;
