import React, { ReactElement } from 'react';
import { HeadBtnGroup, LogoGroup } from 'components/molecules';
import * as S from './Nav.styled';

const Nav = (): ReactElement => (
  <S.Wrapper>
    <LogoGroup />
    <HeadBtnGroup />
  </S.Wrapper>
);

export default Nav;