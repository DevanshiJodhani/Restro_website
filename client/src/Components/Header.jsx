import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoSection>
          {/* Desktop Logo */}
          <img
            className="desktop-logo"
            src="/images/logo.png"
            alt="The Purple Bloom"
          />

          {/* Mobile Favicon */}
          <img
            className="mobile-logo"
            src="/images/favicon.png"
            alt="The Purple Bloom"
          />
        </LogoSection>

        <MenuIcon onClick={() => setOpen(true)}>
          <i className="bx bx-menu"></i>
        </MenuIcon>

        <Nav open={open}>
          <CloseIcon onClick={() => setOpen(false)}>
            <i className="bx bx-x"></i>
          </CloseIcon>

          <StyledLink to="/" end onClick={() => setOpen(false)}>
            Home
          </StyledLink>
          <StyledLink to="/menu" onClick={() => setOpen(false)}>
            Menu
          </StyledLink>
          <StyledLink to="/book-table" onClick={() => setOpen(false)}>
            Book Table
          </StyledLink>
          <StyledLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </StyledLink>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
  border-bottom: 2px solid #eee;
`;

const HeaderContainer = styled.div`
  padding: 18px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;

  img {
    height: auto;
  }

  .desktop-logo {
    width: 250px;
  }

  .mobile-logo {
    display: none;
    width: 42px;
  }

  @media (max-width: 768px) {
    .desktop-logo {
      display: none;
    }

    .mobile-logo {
      display: block;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 22px;
    align-self: flex-end;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 36px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? '0' : '-100%')};
    height: 100vh;
    width: 260px;
    background: #fff;
    flex-direction: column;
    padding: 30px;
    gap: 24px;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.15);
    transition: right 0.35s ease;
  }
`;

const StyledLink = styled(NavLink)`
  position: relative;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
  padding-bottom: 6px;
  transition:
    color 0.25s ease,
    font-weight 0.25s ease;

  &:hover {
    color: #6b2ca5;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background: #6b2ca5;
    border-radius: 2px;
    transform: translateX(-50%);
    transition: width 0.35s ease;
  }

  &.active {
    color: #6b2ca5;
    font-weight: 700;
  }

  &.active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    &::after {
      display: none;
    }
  }
`;

export default Header;
