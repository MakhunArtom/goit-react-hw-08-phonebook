import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserNavConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: auto;
  margin: 20px;
  padding: 20px;
  border: 2px;
  border-radius: 10px;
`;

export const Link = styled(NavLink)`
  margin: 5px 40px 5px 0;
  padding: 8px 8px;
  border: 2px;
  border-radius: 4px;
  text-decoration: none;

  font-size: 24px;
  font-weight: 700;
`;

export const LogoutButton = styled.button`
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

export const UserNavText = styled.p`
  display: flex;
  justify-content: center;

  font-weight: 700;
  font-size: 20px;
  margin: 10px 0 0 0;
`;
