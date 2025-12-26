import styled from 'styled-components';
import OurSpeciality from './pages/OurSpeciality';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

const Home = () => {
  return (
    <>
      <HeroSection>
        <Overlay />

        <HeroContent>
          <SmallText>Welcome to</SmallText>

          <Title>
            The <span>Purple Bloom</span>
          </Title>

          <Subtitle>Experience Delicious Moments With Us</Subtitle>

          <CTAButton>Book a Table</CTAButton>
        </HeroContent>
      </HeroSection>

      <OurSpeciality />
      <Testimonials />
      <Contact />
    </>
  );
};

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 90px);
  background: url('/images/hero-section.png') center / cover no-repeat;
  display: flex;
  align-items: center;
  padding: 0 80px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 20px;
    justify-content: center;
    text-align: center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.15)
  );
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 620px;
  color: #fff;
`;

const SmallText = styled.p`
  font-size: 20px;
  font-style: italic;
  margin-bottom: 6px;
  opacity: 0.9;
`;

const Title = styled.h1`
  font-size: clamp(2.8rem, 5vw, 4.6rem);
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 12px;
  white-space: nowrap;

  span {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    white-space: normal;
  }
`;

const Subtitle = styled.p`
  font-size: 22px;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #eaeaea;
`;

const CTAButton = styled.button`
  padding: 14px 38px;
  font-size: 16px;
  font-weight: 600;
  background: #6b2ca5;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.35s ease;

  &:hover {
    background: #5a2390;
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(107, 44, 165, 0.45);
  }
`;

export default Home;
