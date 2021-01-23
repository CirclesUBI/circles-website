import React, { useState } from 'react';
import Head from 'next/head';
import { Anchor, Box, Button, Heading, Paragraph, Text } from 'grommet';
import copy from 'copy-to-clipboard';
import Iframe from 'react-iframe';

import Layout from '../../components/Layout';
import { accountAddresses } from '../../config/constants';

const { ETHADDRESS, BTCADDRESS, EuroADDRESS } = accountAddresses;

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
            <Box margin={{ bottom: 'small' }}>
              <Heading level={1}>Donate to Circles</Heading>
              <Paragraph>
                Our legal entity is a cooperative: The Circles Coop eG (in
                Gründung). It is founded by the team who have been most busy
                during the last years working on implementing varying features
                that compose Circles ecosystem.{' '}
              </Paragraph>

              <Paragraph>
                We are dedicated to continue improving Circles; with motivations
                to provide access to a community based basic income for many,
                around the entire globe.
              </Paragraph>

              <Paragraph>
                Therefore this huge and long work needs your support too.
              </Paragraph>

              <Paragraph>
                We will make our business plan and our budget transparently
                published here to show you how we are using your donation.
              </Paragraph>
            </Box>

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
                  {/* <iframe
                    allowpaymentrequest=""
                    frameBorder="0"
                    height="900px"
                    name="donorbox"
                    scrolling="no"
                    seamless="seamless"
                    src="https://donorbox.org/embed/circlesubi"
                    style={{
                      maxWidth: 500,
                      minWidth: large ? 400 : 320,
                      maxHeight: 'none !important',
                    }}
                    width="100%"
                  ></iframe> */}
                </div>
              </Box>
            </Box>

            <Box
              background="light-1"
              pad="medium"
              margin={{ vertical: 'medium' }}
            >
              <AddressSection
                title="EURO"
                subtitle="Circles Coop eG. at GLS BANK"
                address={EuroADDRESS}
                action={() => copyEuro()}
                copied={euroCopied}
              />

              <AddressSection
                title="ETHEREUM"
                address={ETHADDRESS}
                action={() => copyETH()}
                copied={ethCopied}
              />

              <AddressSection
                title="BITCOIN"
                address={BTCADDRESS}
                action={() => copyBTC()}
                copied={btcCopied}
              />
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

const buttonStyle = {
  borderRadius: 8,
  borderColor: '#D12D5F',
  borderWidth: 1,
};

const addressStyle = {
  fontFamily: 'monospace',
  background: '#eee',
  padding: 4,
  borderRadius: 4,
  wordBreak: 'break-all',
};

function AddressSection({ title, subtitle, address, action, copied }) {
  return (
    <Box margin={{ vertical: 'medium' }} gap="xsmall">
      <Heading level={3} margin="none">
        {title}
      </Heading>
      {subtitle && <Text size="small">Circles Coop eG. at GLS BANK</Text>}
      <Box
        direction="row"
        gap="small"
        margin={{ bottom: 'medium' }}
        align="center"
      >
        <Text size="small" weight="bold" style={addressStyle}>
          {address}
        </Text>
        <Button
          plain={false}
          size="small"
          style={buttonStyle}
          onClick={action}
          label={copied ? 'COPIED!' : 'COPY'}
        ></Button>
      </Box>
    </Box>
  );
}
