import Head from 'next/head';
import { Anchor, Box, Heading, Image, Paragraph, Text } from 'grommet';
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

function Businesses({ t }) {
  const isClient = typeof window !== 'undefined';

  const acceptWidgets = t('why-accept-widgets', { returnObjects: true });
  const withCirclesWidgets = t('with-circles-widgets', {
    returnObjects: true,
  }).map((item, i) => ({
    ...item,
    imageLink: withCirclesWidgetsImageLinks[i],
  }));

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
            <Box width="100%" pad="large" margin={{ top: 'medium' }}>
              <Box alignSelf="center">
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
                  url="https://player.vimeo.com/video/522476899"
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
              </Box>

              <Box alignSelf="center">
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('how-functions-title')}
                </Heading>
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
              </Box>
            </Box>
          </Box>
        )}
      </Layout>
    </div>
  );
}

Businesses.getInitialProps = async () => ({
  namespacesRequired: ['businesses'],
});

export default withTranslation('businesses')(Businesses);
