import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { scroller, Link as ScrollLink } from 'react-scroll';

import { Box, FormField, Image, TextInput, Text } from 'grommet';
import { Row } from 'react-grid-system';

import Map from './components/Map';
import Layout from '../../components/Layout';
const hubs = require('./cities.json');

// import { withTranslation } from '../../i18n';

function Hubs({ t }) {
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    scroller.scrollTo('page-wrapper', {
      duration: 200,
      smooth: true,
    });
    inputRef.current.focus();
  }, []);

  const inputRef = useRef();

  // let suggestions = [];
  // if (inputValue.length > 3) {
  //   hubs.forEach((item, index) => {
  //     if (item.question.toLowerCase().includes(inputValue.toLowerCase())) {
  //       suggestions.push({
  //         label: (
  //           <ScrollLink
  //             onClick={() => handleSelect(index)}
  //             to={item.question}
  //             smooth
  //             duration={300}
  //             offset={-50}
  //           >
  //             <Box pad="small">{item.question}</Box>
  //           </ScrollLink>
  //         ),
  //         value: item.question,
  //         topic: item.topic,
  //         index,
  //       });
  //     }
  //   });
  // }

  const handleSelect = (index) => {
    setSelectedIndex(index);
    setInputValue('');
  };

  const onSelect = (event) => {
    const suggestion = event.suggestion;
    handleSelect(suggestion.index);
    scroller.scrollTo(suggestion.value, {
      duration: 300,
      offset: -50,
      smooth: true,
    });
  };

  const isClient = typeof window !== 'undefined';

  return (
    <div className="page">
      <Head>
        <title>Circles UBI | Community Hubs</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta
          name="description"
          content="Circles | A Basic Income in the Blockchain"
        />
        <meta
          name="keywords"
          content="circles, circle, gift economy, cryptocurrency, universal basic income, blockchain,
          ubi, money, berlin, andrew yang, bernie sanders, doughnut economics, degrowth, local community currency, p2p, commons, democratic money,
          faircoin, trustlines, gnosis"
        />
      </Head>

      <Layout>
        {(large) => (
          <Box width="xlarge" style={{ margin: '0 auto' }}>
            <Box width="100%" pad={{ top: 'large' }}>
              <Box alignSelf="center">
                <Image
                  src="/images/logo.svg"
                  margin={{ bottom: 'large' }}
                  style={{ width: 90, height: 90 }}
                />
              </Box>
              <Box
                margin={{ left: 'medium', right: 'medium' }}
                width="medium"
                alignSelf="center"
              >
                <Text
                  weight="bold"
                  size="large"
                  textAlign="center"
                  margin={{ bottom: 'medium' }}
                >
                  Search for Hubs
                </Text>
                <Box
                  pad={{ horizontal: 'medium', top: 'small' }}
                  background="light-1"
                  margin={{ bottom: 'small' }}
                >
                  <FormField>
                    <TextInput
                      ref={inputRef}
                      value={inputValue}
                      onChange={(event) => {
                        setSelectedIndex(null);
                        setInputValue(event.target.value);
                      }}
                      // onSelect={onSelect}
                      // suggestions={suggestions}
                      placeholder="Berlin"
                      // type="search"
                      dropProps={{ pad: { horizontal: 'medium' } }}
                    />
                  </FormField>
                </Box>
              </Box>
            </Box>
            <Row>
              <Box width="100%">
                <Box
                  margin={{ left: 'medium', right: 'medium' }}
                  width="xlarge"
                  pad={{ horizontal: 'large', bottom: 'large' }}
                  alignSelf="center"
                >
                  <Map />
                </Box>
              </Box>
            </Row>
          </Box>
        )}
      </Layout>
    </div>
  );
}

// Hubs.getInitialProps = async () => ({
//   namespacesRequired: ['faq'],
// });

export default Hubs;
