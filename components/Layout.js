import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Grommet, Box } from 'grommet';
import { Container, setConfiguration, useScreenClass } from 'react-grid-system';

import theme from '../config/theme';
import Header from './Header';
import Footer from './Footer';

setConfiguration({ gutterWidth: 0 });

const fixedHeaderStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 99,
  paddingRight: 0,
};

function Layout(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    setScrollPosition(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const screenClass = useScreenClass();
  const large = ['xl', 'xxl'].includes(screenClass);
  console.log(large, screenClass);
  return (
    <Grommet theme={theme} {...props}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#660F33" />
      </Head>

      <Container style={{ maxWidth: 'none' }}>
        <Box style={{ paddingTop: 12 }}>
          <Header large={large} />
        </Box>
        {scrollPosition > 400 && (
          <Box>
            <Box
              style={fixedHeaderStyle}
              animation="fadeIn"
              pad="small"
              background="brand3"
              elevation="small"
            >
              <Header large={large} fixed />
            </Box>
          </Box>
        )}
        <Box as="main" margin={{ top: '-36px' }}>
          {props.children(large, screenClass)}
        </Box>
        <Footer />
      </Container>

      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "e7e584e1f91f431da5a98e7e138fc758"}'
      ></script>
    </Grommet>
  );
}

export default Layout;
