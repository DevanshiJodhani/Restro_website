import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const ReserveTable = () => {
  useParams();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Title>Book A Table</Title>
        <Subtitle>
          Reserve your spot for a delightful dining experience.
        </Subtitle>

        <TableImage src="/images/available_table.png" alt="Table" />

        <Form>
          <Field>
            <Label>Name</Label>
            <Input placeholder="Full Name" />
          </Field>

          <Field>
            <Label>Phone</Label>
            <Input placeholder="Phone Number" />
          </Field>

          <Row>
            <Field>
              <Label>Date</Label>
              <Input type="date" />
            </Field>

            <Field>
              <Label>Time</Label>
              <Input type="time" />
            </Field>
          </Row>

          <Field>
            <Label>Guests</Label>
            <Select>
              <option value="">Guests</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </Select>
          </Field>

          <BookButton onClick={() => setShowSuccess(true)}>Book Now</BookButton>
        </Form>
      </Container>

      {showSuccess && (
        <Overlay>
          <Popup>
            <PopupTitle>🎉 Table Booked Successfully!</PopupTitle>
            <PopupText>
              Your reservation has been confirmed. We’re excited to welcome you
              💜
            </PopupText>

            <OkButton onClick={() => navigate('/book-table')}>OK</OkButton>
          </Popup>
        </Overlay>
      )}
    </Wrapper>
  );
};


const Wrapper = styled.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  padding: 40px 16px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 420px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #7a4fcf;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 40px;
`;

const TableImage = styled.img`
  width: 100%;
  max-width: 280px;
  margin: 0 auto 40px;
  display: block;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Field = styled.div`
  text-align: left;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 6px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: #7a4fcf;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 15px;
  background: #fff;

  &:focus {
    outline: none;
    border-color: #7a4fcf;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const BookButton = styled.button`
  margin-top: 30px;
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  color: #fff;
  background: linear-gradient(135deg, #7a4fcf, #9b6bff);
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 30px rgba(122, 79, 207, 0.35);
  }
`;


const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  background: #fff;
  width: 90%;
  max-width: 360px;
  padding: 32px;
  border-radius: 18px;
  text-align: center;
`;

const PopupTitle = styled.h3`
  color: #7a4fcf;
  margin-bottom: 12px;
`;

const PopupText = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
`;

const OkButton = styled.button`
  padding: 12px 28px;
  border-radius: 10px;
  border: none;
  background: #7a4fcf;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

export default ReserveTable;
