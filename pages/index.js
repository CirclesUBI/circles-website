import Head from 'next/head';
import { Link } from '../i18n';
import { Anchor, Box, Heading, Image, Text, Button } from 'grommet';
import { Row, Col } from 'react-grid-system';
import { Link as ScrollLink } from 'react-scroll';

import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Widget from '../components/Widget';
import PhoneSlider from '../components/PhoneSlider';
import Team from '../components/Team';

import { withTranslation } from '../i18n';

const getAboutImageTopMargin = (screenClass) => {
  if (['xs', 'sm'].includes(screenClass)) {
    return '980px';
  } else if (['md', 'lg', 'xl'].includes(screenClass)) {
    return '320px';
  } else {
    return '320px';
  }
};

function Home({ t }) {
  const sliderContent = [
    {
      count: '1',
      caption: t('hiw-slide-1'),
      imageLink: '/images/slider-1.webp',
    },
    {
      count: '2',
      caption: t('hiw-slide-2'),
      imageLink: '/images/slider-2.webp',
    },
    {
      count: '3',
      caption: t('hiw-slide-3'),
      imageLink: '/images/slider-3.webp',
    },
    {
      count: '4',
      caption: t('hiw-slide-4'),
      imageLink: '/images/slider-4.webp',
    },
  ];

  const isClient = typeof window !== 'undefined';

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
        {(large, screenClass) => (
          <Box>
            <Row>
              <Box width="100%" pad="large">
                <Box pad={{ top: 'large' }} width="large" alignSelf="center">
                  <Image src="/images/circlestitle-big.svg" width="100%" />
                </Box>
              </Box>
            </Row>

            <Box width="100%" pad="large">
              <Text
                size="large"
                color="light-1"
                margin={{ bottom: 'medium' }}
                textAlign="center"
              >
                <b>
                  <em>{t('slogan')}</em>
                </b>
              </Text>

              <Box
                width="medium"
                margin={{ top: 'medium' }}
                alignSelf="center"
                pad="medium"
              >
                <Text margin={{ bottom: 'medium' }} color="white">
                  {t('main-paragraph-1')}
                </Text>
                <Text weight="bold" margin={{ bottom: 'medium' }} color="white">
                  {t('main-paragraph-2')}
                </Text>
              </Box>

              <Box alignSelf="center">
                <Button
                  color="dark-2"
                  plain
                  size="large"
                  fill={false}
                  label={t('get-circles-button-label')}
                  href="https://circles.garden"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '14px 52px',
                    borderRadius: 8,
                    color: '#fff',
                    fontSize: '24px',
                    background: 'rgb(102,15,51)',
                    background:
                      'linear-gradient(135deg,  rgba(204,30,102,1) 0%, rgba(102,15,51,1) 100%)',
                  }}
                />
              </Box>

              <Box pad={{ vertical: 'large' }} align="center">
                <ScrollLink
                  to="about"
                  smooth
                  duration={500}
                  style={{ marginBottom: 20 }}
                  offset={-50}
                >
                  <Anchor as="span" color="dark-1">
                    {t('more-info')}
                  </Anchor>
                </ScrollLink>
                <Image src="/images/arrows-down-dark.svg" />
              </Box>

              <Box
                width="medium"
                alignSelf="center"
                pad="medium"
                id="about"
                margin={{ top: getAboutImageTopMargin(screenClass) }}
              >
                <Image src="images/people.svg" />
              </Box>

              <Heading
                alignSelf="center"
                color="dark-1"
                level={1}
                margin={{ top: 'large', bottom: 'small' }}
                textAlign="center"
              >
                {t('about-title')}
              </Heading>
              <Text textAlign="center" margin={{ bottom: 'medium' }}>
                <em>{t('about-subtitle')}</em>
              </Text>
            </Box>

            <Box margin={{ left: 'large', right: 'large' }}>
              <Row>
                <Col lg={4}>
                  <Box>
                    <Widget
                      title={t('about-widget-1-title')}
                      content={t('about-widget-1-content')}
                      imageLink="/images/unconditional.svg"
                    />
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <Widget
                      title={t('about-widget-2-title')}
                      content={t('about-widget-2-content')}
                      imageLink="/images/people-powered.svg"
                    />
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <Widget
                      title={t('about-widget-3-title')}
                      content={t('about-widget-3-content')}
                      imageLink="/images/decentralized.svg"
                    />
                  </Box>
                </Col>
              </Row>
            </Box>

            <Box
              margin={{ top: 'large', bottom: 'large' }}
              style={{
                background:
                  'linear-gradient(180deg, #fff, rgb(120,230,200), #fff',
              }}
              id="how-it-works"
            >
              <Heading
                alignSelf="center"
                color="dark-1"
                level={1}
                margin={{ top: 'large', bottom: 'small' }}
                textAlign="center"
              >
                {t('hiw-title')}
              </Heading>
              <Text textAlign="center" margin={{ bottom: 'medium' }}>
                <em>{t('hiw-subtitle')}</em>
              </Text>

              <PhoneSlider sliderContent={sliderContent} large={large} />
            </Box>

            <Box id="community" margin={{ top: 'large', bottom: 'large' }}>
              <Heading
                alignSelf="center"
                color="dark-1"
                level={1}
                margin={{ top: 'large', bottom: 'small' }}
                textAlign="center"
              >
                {t('community-title')}
              </Heading>
              <Text textAlign="center" margin={{ bottom: 'medium' }}>
                <em>{t('community-subtitle')}</em>
              </Text>
              <Box margin={{ left: 'large', right: 'large' }}>
                <Row>
                  <Col lg={4}>
                    <Box>
                      <Widget
                        title={t('community-widget-2-title')}
                        content={t('community-widget-2-content')}
                        imageLink="/images/learn.svg"
                        imageHeight="180px"
                        onClick={(e) =>
                          handleRoute(e, 'https://handbook.joincircles.net')
                        }
                      />
                    </Box>
                  </Col>
                  <Col lg={4}>
                    <Box>
                      <Widget
                        title={t('community-widget-1-title')}
                        content={t('community-widget-1-content')}
                        imageLink="/images/chat.svg"
                        imageHeight="180px"
                        onClick={(e) =>
                          handleRoute(e, 'https://t.me/CirclesUBI')
                        }
                      />
                    </Box>
                  </Col>

                  <Col lg={4}>
                    <Box>
                      <Widget
                        title={t('community-widget-3-title')}
                        content={t('community-widget-3-content')}
                        imageLink="/images/build.svg"
                        imageHeight="180px"
                        onClick={(e) =>
                          handleRoute(e, 'https://github.com/CirclesUBI/')
                        }
                      />
                    </Box>
                  </Col>
                </Row>
              </Box>
            </Box>

            <Box margin="large">
              <Box>
                <Text
                  color="brand"
                  size="large"
                  weight="bold"
                  textAlign="center"
                  style={{
                    background:
                      '-webkit-linear-gradient(180deg, rgba(102,15,51,1), rgba(204,30,102,1))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  margin={{ bottom: 'medium' }}
                >
                  {t('marketplace-button-label')}
                </Text>
                <Text textAlign="center" margin={{ bottom: 'medium' }}>
                  {t('marketplace-content')}
                </Text>

                <Box alignSelf="center">
                  <Button
                    href="https://t.me/CirclesUBI"
                    target="_blank"
                    label={<Image src="/images/telegram-nice.svg" />}
                    plain
                  />
                </Box>
              </Box>
            </Box>

            <Team />
          </Box>
        )}
      </Layout>
    </div>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home'],
});

export default withTranslation('home')(Home);
