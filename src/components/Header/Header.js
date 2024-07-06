import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { COLORS, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <MaxWidthWrapper>
        <DesktopHeader>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <Logo />
          <DesktopSubWrapper>
            <SubscribeButton>Subscribe</SubscribeButton>
            <AlreadySubLink href="/login">Already a subscriber?</AlreadySubLink>
          </DesktopSubWrapper>
        </DesktopHeader>
      </MaxWidthWrapper>
    </>
  );
};

const MobileHeader = styled.header`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopHeader = styled.header`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    padding: 16px 0;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    margin-bottom: 72px;
  }
`;

const DesktopSubWrapper = styled.div`
  justify-self: end;
  align-self: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SubscribeButton = styled(Button)``;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const AlreadySubLink = styled.a`
  font-style: italic;
  text-decoration: underline;
  color: ${COLORS.gray[900]};
  font-size: ${14 / 16} rem;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
`;

export default Header;
