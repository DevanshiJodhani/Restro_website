import { useState } from 'react';
import styled from 'styled-components';

const ReachOut = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <Container>
      {/* HEADER */}
      <Header>
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries or reservations.</p>
      </Header>

      {/* CENTERED TOP SECTION */}
      <TopSection>
        <TopInner>
          <PhoneImage>
            <img src="/images/contact_page_image.png" alt="Contact" />
          </PhoneImage>

          <ContactDetails>
            <Detail>
              <i className="bx bxs-map"></i>
              <p>
                1234 Street Name <br />
                City, State 56789
              </p>
            </Detail>

            <Detail>
              <i className="bx bxs-phone"></i>
              <p>+1 (123) 456-7890</p>
            </Detail>

            <Detail>
              <i className="bx bxs-envelope"></i>
              <p>info@example.com</p>
            </Detail>
          </ContactDetails>
        </TopInner>
      </TopSection>

      {/* FORM SECTION */}
      <FormSection>
        <h2>Send Us a Message</h2>

        <FormCard onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" required />

          <button type="submit">Send Message</button>

          {success && <Success>✅ Message sent successfully!</Success>}
        </FormCard>
      </FormSection>
    </Container>
  );
};

/* ================= STYLES ================= */

const Container = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 80px 20px;
`;

/* HEADER */
const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 42px;
    color: #7b4ba0;
  }

  p {
    margin-top: 10px;
    color: #555;
  }
`;

/* ===== CENTERED TOP SECTION ===== */
const TopSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

const TopInner = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  text-align: center;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const PhoneImage = styled.div`
  img {
    width: 450px;
    max-width: 100%;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: center;

  i {
    font-size: 22px;
    color: #7b4ba0;
  }

  p {
    font-size: 16px;
    color: #333;
    line-height: 1.5;
  }
`;

const FormSection = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 30px;
    font-size: 26px;
    color: #333;
  }
`;

const FormCard = styled.form`
  max-width: 800px;
  margin: auto;
  background: #faf7ff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 15px;

  input,
  textarea {
    padding: 14px 16px;
    border-radius: 10px;
    border: 1px solid #ddd;
    font-size: 14px;
    outline: none;
  }

  textarea {
    height: 120px;
    resize: none;
  }

  button {
    max-width: 180px;
    margin-top: 10px;
    padding: 14px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, #7b4ba0, #9b6bcc);
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    opacity: 0.9;
  }
`;

const Success = styled.p`
  margin-top: 10px;
  color: #2e7d32;
  font-size: 14px;
`;

export default ReachOut;
