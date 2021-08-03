import Head from 'next/head';
import { Box, Heading, Image, Paragraph, Text } from 'grommet';
import ReactPlayer from 'react-player/vimeo';
import { Row, Col } from 'react-grid-system';

import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';
import { withTranslation } from '../../i18n';
import Widget from '../../components/Widget';

const withCirclesWidgetsImageLinks = [
  '/images/businesses/buy.png',
  '/images/businesses/sell.png',
  '/images/businesses/trust.png',
];

const trustSystemWidgetsImageLinks = [
  '/images/businesses/trust-customer-comes.png',
  '/images/businesses/trust-on-boarding.png',
  '/images/businesses/trust-make-payment.png',
];

function Businesses({ t }) {
  const isClient = typeof window !== 'undefined';

  const acceptWidgets = t('why-accept-widgets', { returnObjects: true });
  const withCirclesWidgets = t('with-circles-widgets', {
    returnObjects: true,
  }).map((item, i) => ({
    ...item,
    imageLink: withCirclesWidgetsImageLinks[i],
  }));

  const trustSystemWidgets = t('trust-system-widgets', {
    returnObjects: true,
  }).map((item, i) => ({
    ...item,
    imageLink: trustSystemWidgetsImageLinks[i],
  }));

  const howFunctionsWidgets = t('how-functions-widgets', {
    returnObjects: true,
  });

  const roleCoopWidgets = t('role-coop-widgets', {
    returnObjects: true,
  });

  const handleRoute = (e, href) => {
    e.preventDefault();
    if (isClient) {
      window.location.href = href;
    }
  };

  return (
    <div className={styles.home}>
      <Head>
        <title>{t('meta')}</title>
        <meta
          name="description"
          content="Circles for Businesses | A Basic Income in the Blockchain"
        />
        <meta
          name="keywords"
          content="circles, circle, gift economy, cryptocurrency, universal basic income, blockchain,
          ubi, money, berlin, andrew yang, bernie sanders, doughnut economics, degrowth, local community currency, p2p, commons, democratic money,
          faircoin, trustlines, gnosis"
        />
      </Head>

      <Layout>
        {(large, screenClass) => (
          <Box>
            <Box width="100%" pad="large" margin={{ vertical: 'medium' }}>
              <Box alignSelf="center" margin={{ bottom: 'medium' }}>
                <Heading
                  alignSelf="center"
                  color="light-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('main-heading')}
                </Heading>

                <Paragraph color="light-1">
                  {t('main-text-paragraph1')}
                </Paragraph>
                <Paragraph color="light-1">
                  <b>{t('main-text-paragraph2')}</b>
                </Paragraph>
              </Box>

              <Box
                width="large"
                height="medium"
                pad="xsmall"
                background="light-1"
                alignSelf="center"
              >
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url="https://player.vimeo.com/video/469130953"
                  controls
                  playerOptions={{ fullscreen: false }}
                />
              </Box>

              <Box alignSelf="center">
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('why-accept-title')}
                </Heading>

                <Row>
                  {acceptWidgets
                    .filter((item, i) => i < 3)
                    .map((widget, i) => (
                      <Col lg={4} md={6}>
                        <Widget title={widget.title} content={widget.text} />
                      </Col>
                    ))}
                </Row>
                <Row>
                  {acceptWidgets
                    .filter((item, i) => i > 2 && i < 6)
                    .map((widget, i) => (
                      <Col lg={4} md={6}>
                        <Widget title={widget.title} content={widget.text} />
                      </Col>
                    ))}
                </Row>
              </Box>

              <Box alignSelf="center">
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('with-circles-title')}
                </Heading>

                <Row>
                  {withCirclesWidgets
                    .filter((item, i) => i < 3)
                    .map((widget, i) => (
                      <Col lg={4} md={6}>
                        <Widget
                          imageLink={widget.imageLink}
                          title={widget.title}
                          content={widget.text}
                        />
                      </Col>
                    ))}
                </Row>
              </Box>

              <Box alignSelf="center">
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('trust-system-title')}
                </Heading>

                <Box
                  direction={large ? 'row' : 'column'}
                  justify="between"
                  background={{
                    image: large
                      ? 'url(/images/businesses/background-line.svg)'
                      : 'none',
                    repeat: 'no-repeat',
                    position: large ? 'center 84px' : 'center',
                    size: 'contain',
                  }}
                  pad={{ top: 'large' }}
                >
                  {trustSystemWidgets.map((item, index) => (
                    <Box
                      key={item.title}
                      align="center"
                      margin={{ bottom: 'xlarge' }}
                    >
                      <Box
                        width="180px"
                        height="180px"
                        background={{
                          image:
                            'url(/images/businesses/background-green-circle.svg)',
                          size: 'contain',
                        }}
                        margin={{ bottom: 'medium' }}
                      >
                        <Image
                          alignSelf="center"
                          fill={false}
                          fit="contain"
                          margin="large"
                          src={item.imageLink}
                        />
                      </Box>
                      <Text weight="bold">{item.title}</Text>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box alignSelf="center">
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'large' }}
                >
                  {t('how-functions-title')}
                </Heading>

                <Box
                  direction={large ? 'row' : 'column'}
                  pad="medium"
                  justify="around"
                >
                  <ParagraphsGreenLeft
                    paragraphs={howFunctionsWidgets
                      .filter((p, i) => i < 5)
                      .map((p) => p.text)}
                  />
                  <Image
                    src="/images/businesses/how-functions-truck.svg"
                    margin="large"
                  />
                </Box>

                <Box
                  direction={large ? 'row' : 'column'}
                  pad="medium"
                  justify="around"
                  align="center"
                >
                  <Image
                    src="/images/businesses/how-functions-woman.svg"
                    margin="large"
                  />
                  <ParagraphsGreenLeft
                    paragraphs={howFunctionsWidgets
                      .filter((p, i) => i > 4)
                      .map((p) => p.text)}
                  />
                </Box>
              </Box>

              <Box alignSelf="center">
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('vs-bitcoin-title')}
                </Heading>

                <Box alignSelf="center">
                  <Paragraph>{t('vs-bitcoin-text')}</Paragraph>
                </Box>
                <Box width="large">
                  <Image
                    src="/images/businesses/colored-map.png"
                    width="100%"
                  />
                </Box>
              </Box>

              <Box alignSelf="center">
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('set-prices-title')}
                </Heading>

                <Box width="small" pad="medium" alignSelf="center">
                  <Image src="/images/businesses/set-prices.png" width="100%" />
                </Box>

                <Box alignSelf="center">
                  <Paragraph>{t('set-prices-text-1')}</Paragraph>
                  <Paragraph>
                    <b>{t('set-prices-text-2')}</b>
                  </Paragraph>
                </Box>
              </Box>

              <Box alignSelf="center">
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('role-coop-title')}
                </Heading>

                <Box width="xlarge" alignSelf="center">
                  <Row>
                    <Col md={8}>
                      <Image
                        src="/images/businesses/role-coop.png"
                        width="100%"
                      />
                    </Col>
                    <Col md={4}>
                      <ParagraphsGreenLeft
                        paragraphs={roleCoopWidgets.map((p) => p.text)}
                      />
                    </Col>
                  </Row>

                  <Box alignSelf="center">
                    <Paragraph>{t('role-coop-links-text')}</Paragraph>
                  </Box>
                </Box>
              </Box>

              <Box alignSelf="center">
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('access-to-credit-title')}
                </Heading>

                <Box width="medium" alignSelf="center">
                  <Image
                    src="/images/businesses/access-to-credit.png"
                    width="100%"
                  />
                </Box>
              </Box>

              <Box alignSelf="center">
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('tax-bookkeeping-title')}
                </Heading>

                <Box alignSelf="center">
                  <Paragraph>{t('tax-bookkeeping-text-1')}</Paragraph>
                  <Paragraph>{t('tax-bookkeeping-text-2')}</Paragraph>
                  <Paragraph>{t('tax-bookkeeping-text-3')}</Paragraph>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Layout>
    </div>
  );
}

const paragraphsGreenLeftStyle = (size) => {
  const large = size !== 'small';
  return {
    marginBottom: 0,
    marginTop: 0,
    paddingBottom: large ? 36 : 24,
    paddingLeft: 12,
    borderLeft: '#08ED95 dashed 3px',
    fontWeight: 'bold',
    lineHeight: large ? '24px' : '20px',
  };
};

function ParagraphsGreenLeft({ paragraphs, size = 'small' }) {
  return (
    <Box pad={{ left: 'small' }} width="medium">
      {paragraphs.map((p, i) => (
        <Box
          key={p.substr(0, 20)}
          background={{
            image: 'url(/images/businesses/tiny-dot.svg)',
            repeat: 'no-repeat',
            position: '1px 0',
            size: '12px 12px',
          }}
          pad={{ left: '6px' }}
        >
          <Paragraph size={size} style={paragraphsGreenLeftStyle(size)}>
            {p}
          </Paragraph>
        </Box>
      ))}
    </Box>
  );
}

Businesses.getInitialProps = async () => ({
  namespacesRequired: ['businesses'],
});

export default withTranslation('businesses')(Businesses);
