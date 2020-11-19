import React, { useState } from 'react';
import Head from 'next/head';
import { Anchor, Box, Button, Heading, Text } from 'grommet';
import copy from 'copy-to-clipboard';

import Layout from '../../components/Layout';
import { ETHADDRESS, BTCADDRESS, EuroADDRESS } from './constants';

export default function Donate() {
  const [ethCopied, setEthCopied] = useState(false);
  const [btcCopied, setBtcCopied] = useState(false);
  const [euroCopied, setEuroCopied] = useState(false);

  const copyETH = () => {
    setBtcCopied(false);
    setEuroCopied(false);
    copy(ETHADDRESS);
    setEthCopied(true);
  };
  const copyBTC = () => {
    setEthCopied(false);
    setEuroCopied(false);
    copy(BTCADDRESS);
    setBtcCopied(true);
  };
  const copyEuro = () => {
    setEthCopied(false);
    setBtcCopied(false);
    copy(EuroADDRESS);
    setEuroCopied(true);
  };

  const buttonStyle = {
    borderRadius: 8,
    borderColor: '#D12D5F',
  };

  const addressStyle = {
    fontFamily: 'monospace',
    background: '#eee',
    padding: 4,
    borderRadius: 4,
  };

  console.log(ETHADDRESS);

  return (
    <div className="page">
      <Head>
        <title>CirclesUBI | Donate to Our Cause</title>
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
            <Box margin={{ bottom: 'small' }}>
              <Heading level={1}>Donate to Circles</Heading>
              <Text>
                All donations will go to support and maintenance of this
                project.
              </Text>
            </Box>

            <Box background="light-1" pad="medium">
              <Box margin={{ vertical: 'medium' }} gap="xsmall">
                <Heading level={3} margin="none">
                  EURO
                </Heading>
                <Text size="small">Circles Coop eG. at GLS BANK</Text>
                <Box direction="row" gap="medium" margin={{ bottom: 'medium' }}>
                  <Text size="small" weight="bold" style={addressStyle}>
                    {EuroADDRESS}
                  </Text>
                  <Button
                    plain={false}
                    size="small"
                    style={buttonStyle}
                    onClick={() => copyEuro()}
                  >
                    {euroCopied ? 'Copied!' : 'COPY'}
                  </Button>
                </Box>
              </Box>

              <Box margin={{ vertical: 'medium' }} gap="xsmall">
                <Heading level={3} margin="none">
                  ETHEREUM
                </Heading>
                <Box direction="row" gap="medium" margin={{ bottom: 'medium' }}>
                  <Text size="small" weight="bold" style={addressStyle}>
                    {ETHADDRESS}
                  </Text>
                  <Button
                    plain={false}
                    size="small"
                    style={buttonStyle}
                    onClick={() => copyETH()}
                  >
                    {ethCopied ? 'Copied!' : 'COPY'}
                  </Button>
                </Box>
              </Box>

              <Box margin={{ bottom: 'medium' }} gap="xsmall">
                <Heading level={3} margin="none">
                  BITCOIN
                </Heading>
                <Box direction="row" gap="medium" margin={{ bottom: 'medium' }}>
                  <Text size="small" weight="bold" style={addressStyle}>
                    {BTCADDRESS}
                  </Text>
                  <Button
                    plain={false}
                    size="small"
                    style={buttonStyle}
                    onClick={() => copyBTC()}
                  >
                    {btcCopied ? 'Copied!' : 'COPY'}
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box margin={{ vertical: 'medium' }}>
              <Text>
                We also have non-profit status via{' '}
                <Anchor
                  href="https://opencollective.com/circles"
                  target="_blank"
                >
                  Open Collective
                </Anchor>
              </Text>
            </Box>
            <Box margin={{ vertical: 'medium' }}>
              <Text>
                And you can support our work on{' '}
                <Anchor
                  href="https://gitcoin.co/grants/331/circles-ubi"
                  target="_blank"
                >
                  GitCoin
                </Anchor>
              </Text>
            </Box>
          </Box>
        )}
      </Layout>
    </div>
  );
}
