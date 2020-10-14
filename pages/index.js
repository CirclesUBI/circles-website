import Head from 'next/head';
import { Anchor, Box, Heading, Image, Text, Button } from 'grommet';
import { Row, Col } from 'react-grid-system';
import { Link as ScrollLink } from 'react-scroll';

import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Widget from '../components/Widget';
import PhoneSlider from '../components/PhoneSlider';

import { withTranslation } from '../i18n';

const teamMembers = [
  {
    name: 'Sarah Friend',
    image: 'images/team/sarahf.png',
  },
  {
    name: 'Blanka Vay',
    image: 'images/team/blankav.png',
  },
  {
    name: 'Julio Linares',
    image: 'images/team/juliol.png',
  },
  {
    name: '@adz',
    image: 'images/team/adz.png',
  },
  {
    name: 'Martin Köppelmann',
    image: 'images/team/martink.png',
  },
  {
    name: 'Saraswathi Subbaraman',
    image: 'images/team/swathi.png',
  },
];

const contributors = [
  'Andy Milenius',
  'Anne Walther',
  'Ashoka Finley',
  'David Terry',
  'Ed Murphy',
  'Emin Durak',
  'Franziska Börner-Zobel',
  'Harriet von Frohreich',
  'Jacob Hühn',
  'Javier Alaves',
  'Justyna Trivedi',
  'Karenina Schröder',
  'Martin Lundfall',
  'Ronit Kory',
  'Wouter Kampmann',
];

const getAboutImageTopMargin = (screenClass) => {
  if (['xs', 'sm'].includes(screenClass)) {
    return '250px';
  } else if (['md', 'lg'].includes(screenClass)) {
    return '120px';
  } else {
    return 'medium';
  }
};

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

              <Box
                pad={{ top: 'xlarge', bottom: 'medium' }}
                id="about"
                margin={{ top: getAboutImageTopMargin(screenClass) }}
              >
                <Image src="images/people.svg" />
              </Box>

              <Heading
                level={1}
                textAlign="center"
                color="dark-1"
                margin={{ top: 'large', bottom: 'small' }}
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
                level={1}
                textAlign="center"
                color="dark-1"
                margin={{ top: 'large', bottom: 'small' }}
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
                level={1}
                textAlign="center"
                color="dark-1"
                margin={{ top: 'large', bottom: 'small' }}
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

            <Box
              id="team"
              margin={{ top: 'large' }}
              style={{
                background: `linear-gradient(180deg, #fff 0%, rgb(243, 208, 223) 20%, #fff 40%, #fff 50%, rgb(243, 208, 223)) 100%`,
              }}
            >
              <Heading
                level={1}
                textAlign="center"
                color="dark-1"
                margin={{ top: 'large', bottom: 'small' }}
              >
                {t('team-title')}
              </Heading>
              <Text textAlign="center" margin={{ bottom: 'medium' }}>
                <em>{t('team-subtitle')}</em>
              </Text>
              <Box margin={{ left: 'large', right: 'large', bottom: 'large' }}>
                <Row>
                  {teamMembers.map((member) => (
                    <Col md={4} key={member.name}>
                      <Box
                        pad="medium"
                        gap="small"
                        align="center"
                        alignSelf="center"
                      >
                        <Box>
                          <Image
                            width="220px"
                            src={member.image}
                            alt={member.name}
                          />
                        </Box>
                        <Text>{member.name}</Text>
                        <Text>
                          <em>{t(`${member.name} title`)}</em>
                        </Text>
                      </Box>
                    </Col>
                  ))}
                </Row>
              </Box>

              <Box
                pad="medium"
                width="100%"
                style={{
                  backgroundImage: `url('/images/team-back-left.svg'), url('/images/team-back-right.svg')`,
                  backgroundRepeat: 'no-repeat, no-repeat',
                  backgroundPosition: 'bottom left, bottom right',
                  backgroundSize: '50% 50%',
                }}
              >
                <Text
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'large' }}
                >
                  <em>{t('team-extra-subtitle')}</em>
                </Text>

                <Box
                  size="large"
                  alignSelf="center"
                  direction="row"
                  margin={{ bottom: 'large' }}
                >
                  <Box pad={{ horizontal: 'large' }} gap="small">
                    {contributors
                      .filter((c, i) => i < contributors.length / 2)
                      .map((c) => (
                        <Text key={c}>{c}</Text>
                      ))}
                  </Box>
                  <Box pad={{ horizontal: 'large' }} gap="small">
                    {contributors
                      .filter((c, i) => i >= contributors.length / 2)
                      .map((c) => (
                        <Text key={c}>{c}</Text>
                      ))}
                  </Box>
                </Box>
              </Box>
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
