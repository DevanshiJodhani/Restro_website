import { useState } from 'react';
import styled from 'styled-components';

import Starters from './pages/Starters';
import MainCourses from './pages/MainCourses';
import Desserts from './pages/Desserts';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('starters');

  return (
    <Wrapper>
      <Container>
        <Title>Our Menu</Title>
        <Subtitle>Explore our delicious offerings</Subtitle>

        <Tabs>
          <Tab
            active={activeTab === 'starters'}
            onClick={() => setActiveTab('starters')}>
            Starters
          </Tab>
          <Tab
            active={activeTab === 'main'}
            onClick={() => setActiveTab('main')}>
            Main Courses
          </Tab>
          <Tab
            active={activeTab === 'desserts'}
            onClick={() => setActiveTab('desserts')}>
            Desserts
          </Tab>
        </Tabs>

        <MenuCard>
          {activeTab === 'starters' && <Starters />}
          {activeTab === 'main' && <MainCourses />}
          {activeTab === 'desserts' && <Desserts />}
        </MenuCard>
      </Container>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.section`
  min-height: 100vh;
  background: url('/images/menupage-background.png') center/cover no-repeat;
  padding: 80px 20px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(32px, 5vw, 52px);
  color: #5c3a87;
`;

const Subtitle = styled.p`
  color: #8b6bb8;
  margin: 10px 0 30px;
  font-size: clamp(14px, 2vw, 16px);
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Tab = styled.button`
  background: ${({ active }) => (active ? '#f2a65a' : 'transparent')};
  border: none;
  padding: 10px 22px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  color: ${({ active }) => (active ? '#000' : '#7a5fa3')};
`;

const MenuCard = styled.div`
  background: rgba(255, 255, 255, 0.92);
  border-radius: 14px;
  padding: 20px;
`;
