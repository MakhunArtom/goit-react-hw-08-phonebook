import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  min-width: 800px;
  margin: 20px;
  padding: 20px;
  border: 2px;
  border-radius: 10px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  top: 0;

  padding: 0 10px 0 auto;
  border: 2px;
  border-radius: 10px;

  > nav {
    display: flex;
  }
`;
