import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VericalSpacing key={story.id}>
              <SecondaryStory {...story} />
            </VericalSpacing>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionVerticalSpacing key={story.id}>
              <OpinionStory {...story} />
            </OpinionVerticalSpacing>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
    gap: 0;
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 5fr 4fr 3fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.tabletAndUp} {
  }
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.tabletAndUp} {
    padding-top: 48px;
  }
  @media ${QUERIES.laptopAndUp} {
    padding-top: revert;
    margin-top: -8px;
  }
`;

const OpinionStoryList = styled.div`
  @media ${QUERIES.tabletOnly} {
    display: flex;
    gap: 16px;
  }
`;

const VericalSpacing = styled.div`
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding-bottom: 16px;
  margin-bottom: 16px;
  flex: 1 1 0;
  &:last-child {
    border-bottom: none;
    padding-bottom: revert;
    margin-bottom: revert;
  }
`;

const OpinionVerticalSpacing = styled(VericalSpacing)`
  @media ${QUERIES.tabletOnly} {
    border-bottom: revert;
    padding-bottom: revert;
    margin-bottom: revert;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.tabletAndUp} {
    padding-top: 48px;
  }
  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
