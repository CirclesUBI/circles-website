import React, { useState, Fragment } from 'react';
import Head from 'next/head';
import {
  Anchor,
  Box,
  Button,
  Heading,
  Layer,
  Paragraph,
  Select,
  Text,
} from 'grommet';
import { Close, CircleInformation } from 'grommet-icons';
import copy from 'copy-to-clipboard';
import Iframe from 'react-iframe';
import { Row, Col } from 'react-grid-system';

import Layout from '../../components/Layout';
import Team from '../../components/Team';
import { accountAddresses } from '../../config/constants';

const { ETHADDRESS, BTCADDRESS } = accountAddresses;

const paragraphs = [
  'Since launching last year the Circles community has grown to 200k users around the globe. Interest in the project led to rapid scaling, which overloaded our servers, and after overhauling our infrastructure we are at the end of our budget.',
  'We need your support to continue!',
  'We need your help to make basic income a reality worldwide!',
  'We are looking for committed, regular donors who support bringing Circles to a fully thriving life.',
  'Your donation is crucial!',
  'Supports the creation of a basic income for all people, and make sustainable, local economies worldwide.',
];

const paragraphs2 = [
  'Your Donation supports the IT development, the European and Asian pilots, the tests, the research, the community building, the mentoring for the pilot community, and many other works.',
  'Your contribution is crucial, please be a part of Partons of Circles!',
  'Let\'s create together a new world for ourselves!',
];

const paragraphs3 = [
  'Our legal entity is a cooperative: The Circles Coop eG (in Gründung). It is founded by the team who have been most busy during the last years working on implementing varying features that compose Circles ecosystem.',
  'We are dedicated to continually improving Circles; with motivations to provide access to a community-based basic income for many, around the entire globe.',
  'Therefore this huge and long work needs your support too.',
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
  style: { borderRadius: 8, maxWidth: 480 },
  flex: { shrink: 0, grow: 0 },
  margin: { vertical: 'medium' },
};

const boxLightProps = {
  background: { color: 'accent-3', opacity: 0.1 },
  style: { borderRadius: 8 },
  width: '900px',
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

const dollarSrc = 'https://donorbox.org/embed/circlesubi';
const euroSrc = 'https://donorbox.org/embed/circlesubi-2';

export default function Donate() {
  const [modal, setModal] = useState(false);
  const [ethCopied, setEthCopied] = useState(false);
  const [btcCopied, setBtcCopied] = useState(false);
  const [currency, setCurrency] = useState('USD');

  const copyETH = () => {
    setBtcCopied(false);
    copy(ETHADDRESS);
    setEthCopied(true);
  };
  const copyBTC = () => {
    setEthCopied(false);
    copy(BTCADDRESS);
    setBtcCopied(true);
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
        {(large) => {
          return (
            <Fragment>
              <Box pad={{ vertical: 'xlarge' }}>
                <Row
                  style={{
                    backgroundImage: `url('/images/donate-image.jpg')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: large ? 24 : 0,
                    justifyContent: 'space-between',
                  }}
                >
                  <Col
                    lg={5}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Box
                      {...boxProps}
                      pad="large"
                      basis={large ? 'large' : 'full'}
                    >
                      <Heading {...headingProps}>Circles needs you!</Heading>
                      {large ? (
                        <Box>
                          {paragraphs.map((p) => (
                            <Paragraph key={p.substring(0, 30)}>{p}</Paragraph>
                          ))}
                        </Box>
                      ) : (
                        <Box>
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
                                    Circles needs you!
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
                        </Box>
                      )}
                    </Box>
                  </Col>
                  <Col
                    lg={5}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Box
                      {...boxProps}
                      basis={large ? 'large' : 'full'}
                      className="donate-payment-holder"
                    >
                      <Heading {...headingProps}>
                        Give Monthly. or Give Once
                      </Heading>

                      <Box margin={{ horizontal: 'medium' }} background="dark-1">
                        <Select
                          size="large"
                          options={['EUR', 'USD']}
                          value={currency}
                          onChange={({ value }) => setCurrency(value)}
                        />
                      </Box>

                      <Box alignSelf="center" background="dark-1">
                        <Iframe
                          allowpaymentrequest=""
                          frameBorder="0"
                          height="900px"
                          name="donorbox"
                          scrolling="no"
                          seamless="seamless"
                          src={currency === 'USD' ? dollarSrc : euroSrc}
                          style={{
                            maxWidth: 500,
                            minWidth: 250,
                            maxHeight: 'none !important',
                          }}
                          width={large ? 400 : 320}
                        />
                      </Box>
                    </Box>
                  </Col>
                </Row>

                <Box
                  direction="row"
                  justify="center"
                  margin={{ bottom: 'large', top: 'large' }}
                >
                  <Box align="center" pad="large" {...boxLightProps}>
                    {paragraphs2.map((p) => (
                      <Paragraph textAlign="center" style={{ maxWidth: '700px' }} key={p.substring(0, 10)}>{p}</Paragraph>
                    ))}
                  </Box>
                </Box>

                <Box
                  direction="row"
                  justify="center"
                  margin={{ bottom: 'large' }}
                >
                  <Box width="large" pad="large">
                    <Heading {...headingProps} color="dark-1">
                      GOALS FOR 2021
                    </Heading>
                    <ul>
                      {goals2021.map((datum) => (
                        <li key={datum.substr(0, 20)}>
                          <Box pad="small">
                            <Text>{datum}</Text>
                          </Box>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Box>

                <Box direction="row" justify="center">
                  <Box width="large" pad="large">
                    <Heading {...headingProps} color="dark-1">
                      Other Ways to Donate
                    </Heading>
                    <Text size="medium" margin="small">
                      Your donation supports the creation of a basic income for
                      all people, and the creation of sustainable, local economis
                      worldwide.
                    </Text>

                    <Box
                      pad="medium"
                      margin={{ vertical: 'medium' }}
                      align="center"
                      elevation="small"
                    >
                      <AddressSextion
                        title="BITCOIN"
                        address={BTCADDRESS}
                        action={() => copyBTC()}
                        copied={btcCopied}
                      />

                      <AddressSextion
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

                <Box
                  direction="row"
                  justify="center"
                  margin={{ bottom: 'large', top: 'large' }}
                >
                  <Box align="center" pad="large" {...boxLightProps}>
                    {paragraphs3.map((p) => (
                      <Paragraph textAlign="center" style={{ maxWidth: '700px' }} key={p.substring(0, 20)}>{p}</Paragraph>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Team />
            </Fragment>
          );
        }}
      </Layout>
    </div>
  );

  function AddressSextion({ title, subtitle, address, action, copied }) {
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
