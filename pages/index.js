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
import { Container, Row, Col, ScreenClassRender } from 'react-grid-system';
import { Link as ScrollLink } from 'react-scroll';

import styles from '../styles/Home.module.css';
import Gr from '../components/Gr';
import Menu from '../components/Menu';

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

                  <Row>
                    <Box
                      direction="row"
                      justify="center"
                      width="100%"
                      pad="xlarge"
                    >
                      <Box>
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
                        <Button
                          primary
                          size="large"
                          width="auto"
                          fill={false}
                          label="Get Circles"
                          onClick={() => null}
                          margin={{ bottom: 'large' }}
                        />

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
                    </Box>
                  </Row>
                </Container>
              </div>
            );
          }}
        />
      </Gr>
    </div>
  );
}
