import React from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <Content>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </Content>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  @media ${QUERIES.tabletOnly} {
    border-bottom: revert;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  float: right;
  margin-left: 16px;
  @media ${QUERIES.tabletOnly} {
    float: revert;
    margin-left: revert;
  }
`;

const Content = styled.div``;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
