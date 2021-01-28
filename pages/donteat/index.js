import React, { useState } from 'react';
import Head from 'next/head';
import { Anchor, Box, Button, Heading, Paragraph, Text } from 'grommet';
import copy from 'copy-to-clipboard';
import Iframe from 'react-iframe';

import Layout from '../../components/Layout';
import { accountAddresses } from '../../config/constants';

const { ETHADDRESS, BTCADDRESS, EuroADDRESS } = accountAddresses;

export default function Donteat() {
  return (
    <div className="page">
      <Head>
        <title>CirclesUBI | Donate to Our Cause</title>
        <script
          src="https://donorbox.org/widget.js"
          paypalexpress="false"
        ></script>
      </Head>

      <Layout>
        {(large) => (
          <Box
            pad={{ vertical: 'medium', horizontal: large ? '150px' : 'large' }}
            width="large"
            alignSelf="center"
            className="page-wrapper"
            elevation="medium"
          >
            <Heading
              level={3}
              margin={{ top: 'medium', bottom: 'none' }}
              textAlign="center"
            >
              Donate with Card
            </Heading>

            <Box
              background={large ? 'dark-1' : 'none'}
              pad={large ? { vertical: 'large', horizontal: 'medium' } : 'none'}
              margin={{ vertical: 'medium' }}
            >
              <Box direction="row" justify="center">
                <div>
                  <Iframe
                    allowpaymentrequest=""
                    frameBorder="0"
                    height="900px"
                    name="donorbox"
                    scrolling="no"
                    seamless="seamless"
                    src="https://donorbox.org/embed/circlesubi"
                    style={{
                      maxWidth: 500,
                      minWidth: 250,
                      maxHeight: 'none !important',
                    }}
                    width={large ? 400 : 320}
                  />
                </div>
              </Box>
            </Box>
          </Box>
        )}
      </Layout>
    </div>
  );
}
