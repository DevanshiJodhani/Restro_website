import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TOTAL_TABLES = 30;

const availableTables = [1, 3, 5, 8, 10, 12, 15, 18, 20, 22, 25, 28];

const BookTable = () => {
  const navigate = useNavigate();

  const handleTableClick = (tableNumber) => {
    navigate(`/reserve-table/${tableNumber}`);
  };

  return (
    <PageWrapper>
      <Title>Table Reservation</Title>
      <Subtitle>Select an available table to continue</Subtitle>

      <TableGrid>
        {Array.from({ length: TOTAL_TABLES }, (_, index) => {
          const tableNo = index + 1;
          const isAvailable = availableTables.includes(tableNo);

          return (
            <TableCard
              key={tableNo}
              clickable={isAvailable}
              onClick={() => isAvailable && handleTableClick(tableNo)}>
              <TableImage
                src={
                  isAvailable ?
                    '/images/available_table.png'
                  : '/images/booked_table.png'
                }
                alt={`Table ${tableNo}`}
                disabled={!isAvailable}
              />
            </TableCard>
          );
        })}
      </TableGrid>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px 80px;
  background: #ffffff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 42px;
  color: #7a4fcf;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TableGrid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    gap: 28px;
  }

  @media (max-width: 480px) {
    gap: 22px;
  }
`;

const TableCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'not-allowed')};
  transition: transform 0.25s ease;

  &:hover {
    transform: ${({ clickable }) => (clickable ? 'scale(1.05)' : 'none')};
  }
`;

const TableImage = styled.img`
  width: 100%;
  max-width: 200px;
  opacity: ${({ disabled }) => (disabled ? 0.75 : 1)};
  user-select: none;
  pointer-events: none;

  @media (max-width: 480px) {
    max-width: 180px;
  }
`;

export default BookTable;
