import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
`;
export const Title = styled.h1`
  color: #4503fa;
  margin-bottom: 20px;
`;
export const TitleTwo = styled.h2`
  color: #4503fa;
  margin-bottom: 20px;
`;
export const LayoutContainer = styled.div`
  width: auto;
  margin: 0 auto;
  padding: 0 50px 0 50px;
`;
export const HeaderBar = styled.header`
  border-bottom: 1px solid #9964ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  font-size: 25px;
  font-weight: 600;
  color: #4503fa;
`;
export const HeaderNav = styled(NavLink)`
  margin-right: 25px;
`;
export const HomeContainer = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HomeTitle = styled.h1`
  font-weight: 500;
  font-size: 52px;
  text-align: center;
  color: #4503fa;
`;
