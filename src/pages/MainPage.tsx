import { Helmet } from "react-helmet";

import ArtworkSection from "@components/main/ArtworkSection";

import { ArtworkProvider } from "@contexts/main/artwork.context";

import { PageWrapper, Page } from "@styles/main/index.style";

import type { FC } from "react";

const MainPage: FC = () => {
  const TITLE = "Studio EDDA - 메인";

  return (
    <PageWrapper>
      <Page>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <ArtworkProvider>
          <ArtworkSection />
        </ArtworkProvider>
      </Page>
    </PageWrapper>
  );
};

export default MainPage;
