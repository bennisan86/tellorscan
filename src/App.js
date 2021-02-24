import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';
import styled from 'styled-components';

import Routes from './Routes';
import HeaderNav from 'components/shared/HeaderNav';
import Footer from 'components/shared/Footer';

const StyledLayout = styled(Layout)`
  height: 100%;
`;

const App = () => {
  const { Content } = Layout;

  return (
    <Fragment>
      <Helmet defaultTitle="Tellor Scan">
        <meta name="description" content="Tellor Scan" />
      </Helmet>
      <StyledLayout>
        <Router>
          <HeaderNav />
          <Content>
            <Routes />
          </Content>
          <Footer />
        </Router>
      </StyledLayout>
    </Fragment>
  );
};

export default App;
