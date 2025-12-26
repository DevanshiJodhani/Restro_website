import styled from 'styled-components';

const Starters = () => {
  return (
    <List>
      <Item>
        <img src="/images/samosa.png" alt="" />
        <Content>
          <h3>Samosa</h3>
          <p>Crispy pastry filled with spiced potatoes and peas.</p>
        </Content>
        <Price>₹80</Price>
      </Item>

      <Item>
        <img src="/images/paneer_tikka.png" alt="" />
        <Content>
          <h3>Paneer Tikka</h3>
          <p>Marinated cottage cheese grilled to perfection.</p>
        </Content>
        <Price>₹180</Price>
      </Item>

      <Item>
        <img src="/images/aloo_tikki.png" alt="" />
        <Content>
          <h3>Aloo Tikki</h3>
          <p>Spiced potato patties served with chutneys.</p>
        </Content>
        <Price>₹120</Price>
      </Item>

      <Item>
        <img src="/images/pakora.png" alt="" />
        <Content>
          <h3>Pakora</h3>
          <p>Mixed vegetables coated in chickpea flour and deep-fried.</p>
        </Content>
        <Price>₹140</Price>
      </Item>
    </List>
  );
};

export default Starters;

const List = styled.div``;

const Item = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid #eee;

  img {
    width: 90px;
    height: 90px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;

    img {
      margin: auto;
    }
  }
`;

const Content = styled.div`
  h3 {
    color: #5c3a87;
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    color: #777;
  }
`;

const Price = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #5c3a87;

  @media (max-width: 768px) {
    margin-top: 6px;
  }
`;
