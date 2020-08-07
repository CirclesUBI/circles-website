import Head from 'next/head';
import {
  Anchor,
  Box,
  Footer,
  Heading,
  Image,
  Main,
  Paragraph,
  FormField,
  Text,
  TextInput,
  TextArea,
  Button,
} from 'grommet';
import {
  Container,
  Row,
  Col,
  ScreenClassRender,
  setConfiguration,
} from 'react-grid-system';
import { Link as ScrollLink } from 'react-scroll';

import styles from '../styles/Home.module.css';
import Gr from '../components/Gr';
import Menu from '../components/Menu';
import Widget from '../components/Widget';

setConfiguration({ gutterWidth: 0 });

export default function Home() {
  const handleSetActiveSection = null;

  return (
    <div>
      <Head>
        <title>Circles UBI | Basic Income on the Blockchain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Gr>
        <ScreenClassRender
          render={(screenClass) => {
            const large = ['xxl', 'xl', 'lg'].includes(screenClass);
            return (
              <div className={styles.home}>
                <Container style={{ maxWidth: 1280 }}>
                  <Row style={{ alignItems: 'center' }}>
                    <Col lg={2}>
                      <Box pad={{ top: 'small' }}>
                        <Image src="/images/logo.svg" />
                      </Box>
                    </Col>
                    <Col lg={8}>
                      <Menu
                        activeSection="donate"
                        setActiveSection={handleSetActiveSection}
                        large={large}
                      />
                    </Col>
                    <Col lg={2}></Col>
                  </Row>
                  <Row>
                    <Box pad={{ top: 'large' }}>
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
                        hoverIndicator={{ elevation: 'small' }}
                      />
                    </Box>
                    <Box margin={{ bottom: 'xlarge' }}>
                      <Text
                        color="light-1"
                        textAlign="center"
                        margin={{ bottom: 'medium' }}
                      >
                        Learn more
                      </Text>
                      <Image src="/images/arrows-down.svg" />
                    </Box>

                    <Box pad={{ top: 'xlarge', bottom: 'medium' }}>
                      <Image src="images/people.svg" />
                    </Box>

                    <Heading level={1} textAlign="center" color="dark-1">
                      BUILD A LOCAL ECONOMY TOGETHER
                    </Heading>
                    <Text textAlign="center" weight="bold">
                      Circles is a basic income by the community, for the
                      community.
                    </Text>
                  </Box>

                  <Box margin={{ left: 'large', right: 'large' }}>
                    <Row>
                      <Col md={4}>
                        <Widget
                          title="Unconditional"
                          content="Anyone who joins Circles recieves a basic income regularly, without conditions."
                          imageLink="/images/unconditional.svg"
                        />
                      </Col>
                      <Col md={4}>
                        <Widget
                          title="People Powered"
                          content="The more connected your community is, the more valuable your Circles become."
                          imageLink="/images/people-powered.svg"
                        />
                      </Col>
                      <Col md={4}>
                        <Widget
                          title="Decentralized"
                          content="A worldwide basic income built from the bottom up, and issued without central leadership."
                          imageLink="/images/decentralized.svg"
                        />
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
                  >
                    <Heading level={1} textAlign="center" color="dark-1">
                      HOW IT WORKS
                    </Heading>
                  </Box>

                  <Box
                    margin={{ top: 'large', bottom: 'large' }}
                    style={{
                      backgroundImage: `url('/images/orange-cloud-left.svg'), url('/images/orange-cloud-right.svg')`,
                      backgroundRepeat: 'no-repeat, no-repeat',
                      backgroundPosition: 'top left, top right',
                      backgroundSize: '320px auto',
                    }}
                  >
                    <Heading level={1} textAlign="center" color="dark-1">
                      COMMUNITY
                    </Heading>
                    <Box margin={{ left: 'large', right: 'large' }}>
                      <Row>
                        <Col md={4}>
                          <Widget
                            title="Chat"
                            content="Explore the Circles community to meet other folks building local economy together."
                            imageLink="/images/chat.svg"
                            imageHeight="180px"
                          />
                        </Col>
                        <Col md={4}>
                          <Widget
                            title="Learn"
                            content="Read the Circles Handbook to learn more about how Circles works."
                            imageLink="/images/learn.svg"
                            imageHeight="180px"
                          />
                        </Col>
                        <Col md={4}>
                          <Widget
                            title="Build"
                            content="Join the open source community working to develop Circles on Github."
                            imageLink="/images/build.svg"
                            imageHeight="180px"
                          />
                        </Col>
                      </Row>
                    </Box>
                  </Box>

                  <Box margin="large">
                    <Text textAlign="center" margin={{ top: 'large' }}>
                      You can also explore our peer-to-peer marketplace on
                      Telegram
                    </Text>
                    <Anchor
                      href="t.me/blabla"
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

                          <Image src="/images/people-telegram.svg" />
                        </Box>
                      }
                    />
                  </Box>
                </Container>
              </div>
            );
          }}
        />
      </Gr>
    </div>
  );
}
