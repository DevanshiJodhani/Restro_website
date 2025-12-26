import styled from 'styled-components';

const Contact = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Info>
            <i className="bx bx-map" />
            <span>123 Bloom Street, Cityville</span>
          </Info>

          <Divider />

          <Info>
            <i className="bx bx-phone" />
            <span>+123 456 7890</span>
          </Info>

          <Socials>
            <a href="#" aria-label="Facebook">
              <i className="bx bxl-facebook" />
            </a>

            <a href="#" aria-label="Instagram">
              <i className="bx bxl-instagram" />
            </a>

            <a href="#" aria-label="YouTube">
              <i className="bx bxl-youtube" />
            </a>

            <a href="#" aria-label="WhatsApp">
              <i className="bx bxl-whatsapp" />
            </a>
          </Socials>
        </Left>

        <Right>
          <Logo src="/images/logo.png" alt="The Purple Bloom" />
          <Copyright>© 2025 The Purple Bloom. All rights reserved.</Copyright>
        </Right>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 8%;
  background: #ffffff;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  color: #333;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 15px;
  margin-bottom: 14px;

  i {
    font-size: 20px;
    color: #5b2c83;
  }
`;

const Divider = styled.div`
  width: 260px;
  height: 1px;
  background: #e0d6f2;
  margin: 12px 0 18px;
`;

const Socials = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;

  a {
    width: 38px;
    height: 38px;
    border: 1px solid #e0d6f2;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #5b2c83;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #5b2c83;
      color: #fff;
      transform: translateY(-4px);
      box-shadow: 0 10px 25px rgba(91, 44, 131, 0.25);
    }

    i {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Right = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 250px;
  margin-bottom: 15px;
`;

const Copyright = styled.p`
  font-size: 15px;
  color: #777;
`;

export default Contact;
