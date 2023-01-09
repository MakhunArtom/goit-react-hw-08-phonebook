import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 5px 5px;
  border: 2px;
  border-radius: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const ContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 8px 10px 8px 20px;
  padding: 8px 8px 8px 8px;
  border-radius: 4px;
  border: none;
  height: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1, 875;
  text-transform: uppercase;
  border: 2px;
  cursor: pointer;
`;

export const ContactSpanDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: auto;
`;

export const ContactButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactCheckbox = styled.input`
  color: black;
`;
