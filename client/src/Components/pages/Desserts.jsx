import styled from 'styled-components';

const Desserts = () => {
  return (
    <List>
      <Item>
        <img src="/images/gulab_jamun.png" alt="" />
        <Content>
          <h3>Gulab Jamun (2 pcs)</h3>
          <p>Soft milk-solid dumplings soaked in sugar syrup.</p>
        </Content>
        <Price>₹90</Price>
      </Item>

      <Item>
        <img src="/images/rasgulla.png" alt="" />
        <Content>
          <h3>Rasgulla (2 pcs)</h3>
          <p>Spongy cottage cheese balls dipped in light syrup.</p>
        </Content>
        <Price>₹95</Price>
      </Item>

      <Item>
        <img src="/images/kesar_rasmalai.png" alt="" />
        <Content>
          <h3>Kesar Rasmalai</h3>
          <p>Creamy saffron-infused milk with soft paneer discs.</p>
        </Content>
        <Price>₹120</Price>
      </Item>

      <Item>
        <img src="/images/gajar_ka_halwa.png" alt="" />
        <Content>
          <h3>Gajar Ka Halwa</h3>
          <p>Slow-cooked carrot pudding with ghee and nuts.</p>
        </Content>
        <Price>₹140</Price>
      </Item>

      <Item>
        <img src="/images/moong_dal_halwa.png" alt="" />
        <Content>
          <h3>Moong Dal Halwa</h3>
          <p>Rich, aromatic halwa made with lentils, ghee, and dry fruits.</p>
        </Content>
        <Price>₹160</Price>
      </Item>

      <Item>
        <img src="/images/rabdi.png" alt="" />
        <Content>
          <h3>Rabdi</h3>
          <p>Thickened sweet milk flavored with cardamom and nuts.</p>
        </Content>
        <Price>₹130</Price>
      </Item>

      <Item>
        <img src="/images/kulfi_malai.png" alt="" />
        <Content>
          <h3>Kulfi (Malai / Kesar)</h3>
          <p>Traditional Indian frozen dessert with rich creamy texture.</p>
        </Content>
        <Price>₹100</Price>
      </Item>
    </List>
  );
};

export default Desserts;

/* ============ STYLES ============ */

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
