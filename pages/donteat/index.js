import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import {
  Anchor,
  Box,
  Button,
  Heading,
  Layer,
  List,
  Paragraph,
  Text,
} from 'grommet';
import { Close, CircleInformation } from 'grommet-icons';
import copy from 'copy-to-clipboard';
import Iframe from 'react-iframe';

import Layout from '../../components/Layout';
import { accountAddresses } from '../../config/constants';

const { ETHADDRESS, BTCADDRESS, EuroADDRESS } = accountAddresses;

const paragraphs = [
  `Since launching in October 2020 the Circles community has grown to 200k users around the globe. Interest in the project led to rapid scaling, which overloaded our servers, and after overhauling our infrastructure we are at the end of our budget.`,
  `Circles is an open source project with an ambitious roadmap, and we need your help to make basic income a reality worldwide!`,
  `Our goal is to have 2,000 recurring donations that support bringing Circles to full thriving life. Your donation supports the creation of a basic income for all people, and the creation of sustainable, local economies worldwide.
Please support the work ahead of us!`,
];

const goals2021 = [
  `Develop Circles to be an alternative for every basic income
  advocate`,
  `Global Support Centre (for support and research, knowledge
  centre)`,
  `Flagship pilot in every continent`,
  `Strong network between Hubs and communities`,
];

const boxProps = {
  background: { color: 'dark-1', opacity: 0.6 },
  pad: 'large',
  style: { borderRadius: 8, maxWidth: 480 },
  flex: { shrink: 0, grow: 0 },
};

const headingProps = {
  level: 1,
  textAlign: 'center',
  color: '#fff',
  margin: {
    bottom: 'small',
    top: 'medium',
  },
};

export default function Donteat() {
  const [modal, setModal] = useState(false);
  const [ethCopied, setEthCopied] = useState(false);
  const [btcCopied, setBtcCopied] = useState(false);
  const [euroCopied, setEuroCopied] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     scroller.scrollTo('donate-section', {
  //       duration: 200,
  //       smooth: true,
  //     });
  //   }, 300);
  // }, []);

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
        <title>CirclesUBI | Donate to CirclesUBI</title>
        <script
          src="https://donorbox.org/widget.js"
          paypalexpress="false"
        ></script>
      </Head>

      <Layout>
        {(large) => (
          <Fragment>
            <Box
              pad="large"
              width="xxlarge"
              alignSelf="center"
              elevation="medium"
              className="page-wrapper"
              background={{
                image: "url('/images/donate-image.jpg')",
                position: 'center',
                repeat: 'no-repeat',
                size: 'cover',
              }}
              direction={large ? 'row' : 'column'}
              justify="between"
              align="center"
              gap="xlarge"
            >
              <Box {...boxProps} basis={large ? 'large' : 'full'}>
                <Heading {...headingProps}>Support Circles</Heading>
                {large ? (
                  <Box>
                    {paragraphs.map((p) => (
                      <Paragraph key={p.substring(0, 10)}>{p}</Paragraph>
                    ))}
                  </Box>
                ) : (
                  <Fragment>
                    <Button
                      icon={<CircleInformation size="large" />}
                      onClick={() => setModal(true)}
                      alignSelf="center"
                    />
                    {modal && (
                      <Layer
                        onEsc={() => setModal(false)}
                        onClickOutside={() => setModal(false)}
                        full
                      >
                        <Box pad="large" background="light-1">
                          <Box direction="row" justify="between">
                            <Heading level={2} margin="none">
                              Support Circles
                            </Heading>
                            <Button
                              icon={<Close />}
                              onClick={() => setModal(false)}
                              margin={{ top: '-24px' }}
                            />
                          </Box>
                          <Box>
                            {paragraphs.map((p) => (
                              <Paragraph key={p.substring(0, 10)}>
                                {p}
                              </Paragraph>
                            ))}
                          </Box>
                        </Box>
                      </Layer>
                    )}
                  </Fragment>
                )}
              </Box>

              <Box {...boxProps} basis={large ? 'large' : 'full'}>
                <Heading {...headingProps}>Give Monthly. or Give Once</Heading>

                <Box direction="row" justify="center">
                  <Box background="dark-1">
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
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box direction="row" justify="center">
              <Box width="large" pad="large">
                <Heading {...headingProps} color="dark-1">
                  Other Ways to Donate
                </Heading>
                <Text size="medium" margin="small">
                  Your donation supports the creation of a basic income for all
                  people, and the creation of sustainable, local economis
                  worldwide.
                </Text>

                <Box
                  // background="light-1"
                  pad="medium"
                  margin={{ vertical: 'medium' }}
                  align="center"
                  elevation="small"
                >
                  <AddressSection
                    title="BITCOIN"
                    address={BTCADDRESS}
                    action={() => copyBTC()}
                    copied={btcCopied}
                  />

                  <AddressSection
                    title="ETHEREUM"
                    address={ETHADDRESS}
                    action={() => copyETH()}
                    copied={ethCopied}
                  />
                </Box>

                <Box margin={{ vertical: 'medium' }}>
                  <Text textAlign="center">
                    We also have non-profit status via{' '}
                    <Anchor
                      href="https://opencollective.com/circles"
                      target="_blank"
                    >
                      Open Collective
                    </Anchor>
                  </Text>
                </Box>
                <Box>
                  <Text textAlign="center">
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
            </Box>

            <Box direction="row" justify="center" margin={{ bottom: 'large' }}>
              <Box width="large" pad="large">
                <Heading {...headingProps} color="dark-1">
                  GOALS FOR 2021
                </Heading>
                <List data={goals2021}>
                  {(datum) => (
                    <Text margin="small" weight="bold">
                      {datum}
                    </Text>
                  )}
                </List>
              </Box>
            </Box>
          </Fragment>
        )}
      </Layout>
    </div>
  );

  function AddressSection({ title, subtitle, address, action, copied }) {
    return (
      <Box margin={{ vertical: 'small' }} gap="xsmall">
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
          <Text
            size="small"
            weight="bold"
            style={{
              fontFamily: 'monospace',
              background: '#eee',
              padding: 4,
              borderRadius: 4,
              wordBreak: 'break-all',
              width: 220,
            }}
          >
            {address}
          </Text>
          <Button
            plain={false}
            size="small"
            style={{ borderRadius: 8, borderColor: '#D12D5F', borderWidth: 1 }}
            onClick={action}
            label={copied ? 'COPIED!' : 'COPY'}
          ></Button>
        </Box>
      </Box>
    );
  }
}
