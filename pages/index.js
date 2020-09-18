import Head from 'next/head';
import { Anchor, Box, Heading, Image, Text, Button } from 'grommet';
import { Row, Col } from 'react-grid-system';
import { Link as ScrollLink } from 'react-scroll';

import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Widget from '../components/Widget';
import PhoneSlider from '../components/PhoneSlider';

import { withTranslation } from '../i18n';

function Home({ t }) {
  const sliderContent = [
    {
      count: '1',
      caption: t('hiw-slide-1'),
      imageLink: '/images/slider-1.png',
    },
    {
      count: '2',
      caption: t('hiw-slide-2'),
      imageLink: '/images/slider-2.png',
    },
    {
      count: '3',
      caption: t('hiw-slide-3'),
      imageLink: '/images/slider-3.png',
    },
    {
      count: '4',
      caption: t('hiw-slide-4'),
      imageLink: '/images/slider-4.png',
    },
  ];

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
      </Head>

      <Layout>
        {(large) => (
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
                margin={{ bottom: 'large' }}
                textAlign="center"
              >
                <b>
                  <em>{t('slogan')}</em>
                </b>
              </Text>
              <Box margin={{ vertical: 'large' }} alignSelf="center">
                <Button
                  color="dark-2"
                  plain
                  size="large"
                  fill={false}
                  label={t('get-circles-button-label')}
                  href="https://circles.garden"
                  target="_blank"
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
              <Box margin={{ bottom: 'xlarge' }} align="center">
                <ScrollLink
                  to="about"
                  smooth
                  duration={500}
                  style={{ marginBottom: 20 }}
                  offset={-50}
                >
                  <Anchor as="span" color="light-1">
                    {t('more-info')}
                  </Anchor>
                </ScrollLink>
                <Image src="/images/arrows-down.svg" />
              </Box>

              <Box pad={{ top: 'xlarge', bottom: 'medium' }} id="about">
                <Image src="images/people.svg" />
              </Box>

              <Heading level={1} textAlign="center" color="dark-1">
                {t('about-title')}
              </Heading>
              <Text textAlign="center" weight="bold">
                {t('about-subtitle')}
              </Text>
            </Box>

            <Box margin={{ left: 'large', right: 'large' }}>
              <Row>
                <Col md={4}>
                  <Box>
                    <Widget
                      title={t('about-widget-1-title')}
                      content={t('about-widget-1-content')}
                      imageLink="/images/unconditional.svg"
                    />
                  </Box>
                </Col>
                <Col md={4}>
                  <Box>
                    <Widget
                      title={t('about-widget-2-title')}
                      content={t('about-widget-2-content')}
                      imageLink="/images/people-powered.svg"
                    />
                  </Box>
                </Col>
                <Col md={4}>
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
                // backgroundImage: `url('/images/turkuaz-cloud-left.svg'), url('/images/turkuaz-cloud-right.svg')`,
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundPosition: 'top left, top right',
                backgroundSize: '320px auto',
              }}
              id="how-it-works"
            >
              <Heading
                level={1}
                textAlign="center"
                color="dark-1"
                margin={{ top: '98px' }}
              >
                {t('hiw-title')}
              </Heading>

              <PhoneSlider sliderContent={sliderContent} large={large} />
            </Box>

            <Box
              margin={{ top: 'large', bottom: 'large' }}
              style={{
                // backgroundImage: `url('/images/orange-cloud-left.svg'), url('/images/orange-cloud-right.svg')`,
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundPosition: 'top left, top right',
                backgroundSize: '320px auto',
              }}
              id="community"
            >
              <Heading
                level={1}
                textAlign="center"
                color="dark-1"
                margin={{ top: '90px' }}
              >
                {t('community-title')}
              </Heading>
              <Box margin={{ left: 'large', right: 'large' }}>
                <Row>
                  <Col md={4}>
                    <Box>
                      <Widget
                        title={t('community-widget-1-title')}
                        content={t('community-widget-1-content')}
                        imageLink="/images/chat.svg"
                        imageHeight="180px"
                      />
                    </Box>
                  </Col>
                  <Col md={4}>
                    <Box>
                      <Widget
                        title={t('community-widget-2-title')}
                        content={t('community-widget-2-content')}
                        imageLink="/images/learn.svg"
                        imageHeight="180px"
                      />
                    </Box>
                  </Col>
                  <Col md={4}>
                    <Box>
                      <Widget
                        title={t('community-widget-3-title')}
                        content={t('community-widget-3-content')}
                        imageLink="/images/build.svg"
                        imageHeight="180px"
                      />
                    </Box>
                  </Col>
                </Row>
              </Box>
            </Box>

            <Box margin="large">
              <Text textAlign="center" margin={{ top: 'large' }}>
                {t('marketplace-content')}
              </Text>
              <Anchor
                href="https://t.me/CirclesUBI"
                target="_blank"
                alignSelf="center"
                margin="medium"
                color="brand"
                label={
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
                        paddingBottom: 24,
                      }}
                    >
                      {t('marketplace-button-label')}
                    </Text>

                    <Box width="280px">
                      <Image src="/images/people-telegram.svg" />
                    </Box>
                  </Box>
                }
              />
            </Box>
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
