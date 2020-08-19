import Head from 'next/head';
import { Anchor, Box, Heading, Image, Text, Button } from 'grommet';
import { Row, Col } from 'react-grid-system';
import { Link as ScrollLink } from 'react-scroll';

import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Widget from '../components/Widget';
import PhoneSlider from '../components/PhoneSlider';

import { withTranslation } from '../i18n';

function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Circles UBI | Basic Income on the Blockchain</title>
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
              <Box pad={{ top: 'large' }} width="100%">
                <Image src="/images/circlestitle-big.svg" width="100%" />
              </Box>
            </Row>

            <Box width="100%" pad="xlarge">
              <Text
                size="large"
                color="light-1"
                margin={{ bottom: 'large' }}
                textAlign="center"
              >
                <b>
                  <em>A Basic Income on the Blockchain</em>
                </b>
              </Text>
              <Box margin={{ bottom: 'large' }} alignSelf="center">
                <Button
                  color="dark-2"
                  plain
                  size="large"
                  fill={false}
                  label="Get Circles"
                  href="https://circles.garden"
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
                >
                  <Anchor as="span" color="light-1">
                    Learn more
                  </Anchor>
                </ScrollLink>
                <Image src="/images/arrows-down.svg" />
              </Box>

              <Box pad={{ top: 'xlarge', bottom: 'medium' }} id="about">
                <Image src="images/people.svg" />
              </Box>

              <Heading level={1} textAlign="center" color="dark-1">
                BUILD A LOCAL ECONOMY TOGETHER
              </Heading>
              <Text textAlign="center" weight="bold">
                Circles is a basic income by the community, for the community.
              </Text>
            </Box>

            <Box margin={{ left: 'large', right: 'large' }}>
              <Row>
                <Col md={4}>
                  <Box>
                    <Widget
                      title="Unconditional"
                      content="Anyone who joins Circles recieves a basic income regularly, without conditions."
                      imageLink="/images/unconditional.svg"
                    />
                  </Box>
                </Col>
                <Col md={4}>
                  <Box>
                    <Widget
                      title="People Powered"
                      content="The more connected your community is, the more valuable your Circles become."
                      imageLink="/images/people-powered.svg"
                    />
                  </Box>
                </Col>
                <Col md={4}>
                  <Box>
                    <Widget
                      title="Decentralized"
                      content="A worldwide basic income built bottom up, and issued without central leadership."
                      imageLink="/images/decentralized.svg"
                    />
                  </Box>
                </Col>
              </Row>
            </Box>

            <Box
              margin={{ top: 'large', bottom: 'large' }}
              style={{
                backgroundImage: `url('/images/turkuaz-cloud-left.svg'), url('/images/turkuaz-cloud-right.svg')`,
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
                HOW IT WORKS
              </Heading>

              <PhoneSlider large={large} />
            </Box>

            <Box
              margin={{ top: 'large', bottom: 'large' }}
              style={{
                backgroundImage: `url('/images/orange-cloud-left.svg'), url('/images/orange-cloud-right.svg')`,
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
                COMMUNITY
              </Heading>
              <Box margin={{ left: 'large', right: 'large' }}>
                <Row>
                  <Col md={4}>
                    <Box>
                      <Widget
                        title="Chat"
                        content="Explore the Circles community to meet other folks building local economy together."
                        imageLink="/images/chat.svg"
                        imageHeight="180px"
                      />
                    </Box>
                  </Col>
                  <Col md={4}>
                    <Box>
                      <Widget
                        title="Learn"
                        content="Read the Circles Handbook to learn more about how Circles works."
                        imageLink="/images/learn.svg"
                        imageHeight="180px"
                      />
                    </Box>
                  </Col>
                  <Col md={4}>
                    <Box>
                      <Widget
                        title="Build"
                        content="Join the open source community working to develop Circles on Github."
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
                You can also explore our peer-to-peer marketplace on Telegram
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
                      Find us on Telegram
                    </Text>

                    <Box width={large ? 'medium' : '280px'}>
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
  namespacesRequired: ['common', 'footer'],
});

export default withTranslation('home')(Home);
