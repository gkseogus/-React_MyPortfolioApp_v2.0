import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Hamburger from 'components/icon/Hamburger';
import Sidebar from 'components/common/Sidebar';

const Navbar = () => {
  const {
    colors: { black },
  } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(true);
  };

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContain isScroll={isScroll}>
      <NavbarTitle>HDH</NavbarTitle>
      <HamburgerBtn isScroll={isScroll} onClick={() => toggleSide()} displayProps={isOpen ? 'none' : 'normal'}>
        <Hamburger color={black} />
      </HamburgerBtn>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavbarContain>
  );
};

export default Navbar;

const NavbarContain = styled.div<{ isScroll: boolean }>`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  background-color: ${({ isScroll, theme }) => (isScroll ? theme.colors.gray : theme.colors.white)};
  z-index: 10;
`;

const NavbarTitle = styled.title`
  width: 50px;
  height: 50px;
  display: flex;
  margin-left: 60px;
  font-size: 32px;
  font-weight: bold;
`;

const HamburgerBtn = styled.button<{ isScroll: boolean; displayProps: string }>`
  width: 50px;
  height: 50px;
  margin-right: 60px;
  display: ${({ displayProps }) => displayProps};
  background-color: ${({ isScroll, theme }) => (isScroll ? theme.colors.gray : theme.colors.white)};
  border: 0;
  cursor: pointer;
`;
