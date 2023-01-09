import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const Overlay = styled.div`
  background-color: #1e2129;
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 50px; */
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 15px;
  min-height: 40%;
  min-width: 40%;
  border: 3px;
  border-radius: 10px;
`;

export const EditForm = styled.div`
  margin: 5px;
  height: 100%;
  width: 100%;
`;

export const ModalButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 20px 0 0 0;
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

export const ModalTitle = styled.p`
  margin: 0 0 20px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 1, 875;
`;
