import styled from 'styled-components';

const MainCourses = () => {
  return (
    <List>
      <Item>
        <img src="/images/panner_butter_masala.png" alt="" />
        <Content>
          <h3>Paneer Butter Masala</h3>
          <p>Soft paneer cubes cooked in a rich creamy tomato gravy.</p>
        </Content>
        <Price>₹260</Price>
      </Item>

      <Item>
        <img src="/images/dal_makhani.png" alt="" />
        <Content>
          <h3>Dal Makhani</h3>
          <p>Slow-cooked black lentils simmered with butter and cream.</p>
        </Content>
        <Price>₹220</Price>
      </Item>

      <Item>
        <img src="/images/veg_kadai.png" alt="" />
        <Content>
          <h3>Veg Kadai</h3>
          <p>Mixed vegetables tossed in spicy kadai masala.</p>
        </Content>
        <Price>₹240</Price>
      </Item>
      <Item>
        <img src="/images/butter_naan.png" alt="" />
        <Content>
          <h3>Butter Naan (2 pcs)</h3>
          <p>Soft, buttery naan baked fresh in a tandoor.</p>
        </Content>
        <Price>₹90</Price>
      </Item>

      <Item>
        <img src="/images/plain_roti.png" alt="" />
        <Content>
          <h3>Plain Roti (2 pcs)</h3>
          <p>Classic whole wheat roti cooked on a hot tawa.</p>
        </Content>
        <Price>₹50</Price>
      </Item>

      <Item>
        <img src="/images/jeera_rice.png" alt="" />
        <Content>
          <h3>Jeera Rice</h3>
          <p>Fragrant basmati rice tempered with cumin seeds.</p>
        </Content>
        <Price>₹180</Price>
      </Item>

      <Item>
        <img src="/images/biryani.png" alt="" />
        <Content>
          <h3>Veg Biryani</h3>
          <p>Aromatic basmati rice cooked with fresh vegetables and spices.</p>
        </Content>
        <Price>₹260</Price>
      </Item>
    </List>
  );
};

const List = styled.div``;

const Item = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    object-fit: cover;
  }

  &:last-child {
    border-bottom: none;
  }

  grid-template-columns: 90px 1fr auto;

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
  font-size: 18px;
  font-weight: 600;
  color: #5c3a87;
`;

export default MainCourses;
