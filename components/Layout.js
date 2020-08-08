import React from 'react';
import { Grommet } from 'grommet';
import {
  Container,
  ScreenClassRender,
  setConfiguration,
} from 'react-grid-system';

import theme from '../config/theme';
import Header from './Header';
import Footer from './Footer';

setConfiguration({ gutterWidth: 0 });

const Layout = (props) => (
  <Grommet theme={theme} {...props}>
    <ScreenClassRender
      render={(screenClass) => {
        const large = ['xxl', 'xl', 'lg'].includes(screenClass);
        return (
          <Container style={{ maxWidth: 1280 }}>
            <Header large={large} />
            {props.children(large)}
            <Footer />
          </Container>
        );
      }}
    />
  </Grommet>
);

export default Layout;
