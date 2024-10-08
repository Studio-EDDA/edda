import { Helmet } from "react-helmet";

import SynopsysSection from "@components/main/SynopsysSection";

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
        <SynopsysSection />
      </Page>
    </PageWrapper>
  );
};

export default MainPage;
