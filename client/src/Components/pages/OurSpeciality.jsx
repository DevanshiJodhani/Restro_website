import styled from 'styled-components';

const OurSpeciality = () => {
  return (
    <Section>
      <Heading>Our Speciality</Heading>

      <CardWrapper>
        <Card>
          <img src="/images/healthy-food.png" alt="Healthy Food" />
          <h3>100% Healthy Food</h3>
          <p>Fresh & Organic Ingredients</p>
        </Card>

        <Card>
          <img src="/images/best-service.png" alt="Best Service" />
          <h3>Best Service</h3>
          <p>Friendly & Quick Service</p>
        </Card>

        <Card>
          <img src="/images/ambiance.png" alt="Perfect Ambiance" />
          <h3>Perfect Ambiance</h3>
          <p>Cozy & Relaxing Atmosphere</p>
        </Card>
      </CardWrapper>
    </Section>
  );
};

const Section = styled.section`
  padding: 90px 8%;
  background: url('/images/speciality-section.png') center/cover no-repeat;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-style: italic;
  color: #5b2c83;
  margin-bottom: 70px;
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100px;
    height: 2px;
    background: #c9b6e4;
  }

  &::before {
    left: -120px;
  }

  &::after {
    right: -120px;
  }

  @media (max-width: 600px) {
    font-size: 28px;

    &::before,
    &::after {
      display: none;
    }
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  padding: 45px 30px;
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 55px rgba(0, 0, 0, 0.18);
  }

  img {
    width: 150px;
    margin-bottom: 26px;
  }

  h3 {
    font-size: 22px;
    color: #5b2c83;
    margin-bottom: 8px;
  }

  p {
    font-size: 15px;
    color: #555;
  }
`;

export default OurSpeciality;
