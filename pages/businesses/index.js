import Head from 'next/head';
import { Box, Button, Heading, Image, Paragraph, Text } from 'grommet';
import ReactPlayer from 'react-player/vimeo';
import { Row, Col } from 'react-grid-system';

import styles from '../../styles/Generic.module.css';
import Layout from '../../components/Layout';
import { withTranslation } from '../../i18n';
import Widget from '../../components/Widget';
import AccordionWidget from '../../components/AccordionWidget';
import TooltipPurple from '../../components/TooltipPurple';

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

const vsBitcoinWidgetsPositions = [
  {
    top: '10%',
    left: '67%',
  },
  {
    top: '19%',
    left: '44%',
  },
  {
    top: '40%',
    left: '58%',
  },
  {
    top: '49%',
    left: '27%',
  },
  {
    top: '61%',
    left: '34%',
  },
  {
    top: '85%',
    left: '48%',
  },
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

  const accessToCreditWidgets = t('access-to-credit-widgets', {
    returnObjects: true,
  });

  const vsBitcoinWidgets = t('vs-bitcoin-widgets', {
    returnObjects: true,
  });

  return (
    <div className={styles.businesses}>
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
            <Box width="100%" margin={{ vertical: 'medium' }}>
              <Box
                alignSelf="center"
                margin={{ bottom: 'medium' }}
                pad="medium"
              >
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
                background="dark-1"
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

              <Section>
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('why-accept-title')}
                </Heading>

                <Box direction="row" justify="center" wrap>
                  {acceptWidgets.map((widget, i) => (
                    <Box basis="medium">
                      <Widget title={widget.title} content={widget.text} />
                    </Box>
                  ))}
                </Box>
              </Section>

              <Section>
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('with-circles-title')}
                </Heading>

                <Box alignSelf="center" direction="row" justify="center" wrap>
                  {withCirclesWidgets.map((widget, i) => (
                    <Box basis="medium">
                      <Widget
                        imageLink={widget.imageLink}
                        title={widget.title}
                        content={widget.text}
                      />
                    </Box>
                  ))}
                </Box>
              </Section>

              <Section>
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
                  alignSelf="center"
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
                  width="large"
                  margin={{ top: 'large' }}
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
                          margin={index === 2 ? 'large' : 'medium'}
                          src={item.imageLink}
                        />
                      </Box>
                      <Text weight="bold">{item.title}</Text>
                    </Box>
                  ))}
                </Box>
              </Section>

              <Section pad={{ horizontal: 'xlarge' }}>
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
                  justify="evenly"
                  align="center"
                >
                  <Box basis="1/2">
                    <ParagraphsGreenLeft
                      paragraphs={howFunctionsWidgets
                        .filter((p, i) => i < 5)
                        .map((p) => p.text)}
                    />
                  </Box>
                  <Box basis="1/2" pad="medium">
                    <Image
                      src="/images/businesses/how-functions-truck.svg"
                      fit="contain"
                      fill
                    />
                  </Box>
                </Box>

                <Box
                  direction={large ? 'row' : 'column-reverse'}
                  pad="medium"
                  justify="evenly"
                  align="center"
                >
                  <Box basis="1/2" pad="medium">
                    <Image
                      src="/images/businesses/how-functions-woman.svg"
                      fit="contain"
                      fill
                    />
                  </Box>
                  <Box basis="1/2">
                    <ParagraphsGreenLeft
                      paragraphs={howFunctionsWidgets
                        .filter((p, i) => i > 4)
                        .map((p) => p.text)}
                    />
                  </Box>
                </Box>
              </Section>

              <Section
                background={{
                  color: 'white',
                  size: 'contain',
                }}
              >
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
                <Box
                  width="large"
                  alignSelf="center"
                  style={{ position: 'relative' }}
                >
                  <Image
                    src="/images/businesses/vs-bitcoin-colored-map.png"
                    width="100%"
                    fit="contain"
                  />
                  {vsBitcoinWidgets.map((w, i) => (
                    <TooltipPurple
                      label={
                        <Image
                          width={24}
                          height={24}
                          src="/images/businesses/green-plus-icon.svg"
                        />
                      }
                      content={w}
                      position={vsBitcoinWidgetsPositions[i]}
                      large={large}
                    />
                  ))}
                </Box>
              </Section>

              <Section>
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
              </Section>

              <Section>
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('shared-wallet-title')}
                </Heading>
                <Box alignSelf="center">
                  <Paragraph>{t('shared-wallet-text')}</Paragraph>
                </Box>
              </Section>

              <Section>
                <Heading
                  alignSelf="center"
                  color="dark-1"
                  level={1}
                  textAlign="center"
                  margin={{ top: 'xlarge', bottom: 'small' }}
                >
                  {t('role-coop-title')}
                </Heading>

                <Box direction="row" justify="center" align="center" wrap>
                  <Box basis="medium" alignSelf="center">
                    <Image
                      src="/images/businesses/role-coop.png"
                      width="100%"
                      fill
                    />
                  </Box>
                  <Box basis="small" alignSelf="center">
                    <ParagraphsGreenLeft
                      paragraphs={roleCoopWidgets.map((p) => p.text)}
                      size="medium"
                    />
                  </Box>
                </Box>

                <Box alignSelf="center" margin="large">
                  <Paragraph>{t('role-coop-links-text')}</Paragraph>
                  <Box
                    direction="row"
                    justify="evenly"
                    margin={{ top: 'medium' }}
                    wrap
                  >
                    <LinkButton label="FAQ" href="/faq" />
                    <LinkButton
                      label="Handbook"
                      href="https://handbook.joincircles.net"
                    />
                    <LinkButton
                      label="Telegram Chat"
                      href="https://t.me/CirclesUBI"
                    />
                  </Box>
                </Box>
              </Section>

              <Section>
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

                <Box
                  direction="row"
                  justify="center"
                  gap="medium"
                  wrap
                  height="medium"
                >
                  {accessToCreditWidgets.map((w, i) => (
                    <Box key={w.title} basis="medium">
                      <AccordionWidget content={w} />
                    </Box>
                  ))}
                </Box>
              </Section>

              <Section
                background={{
                  image: 'url(/images/businesses/tax-boy.svg)',
                  position: 'bottom right',
                  size: '262px 369px',
                }}
                pad={{ bottom: '320px', horizontal: 'medium' }}
              >
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
              </Section>
            </Box>
          </Box>
        )}
      </Layout>
    </div>
  );
}

function Section({ children, ...otherProps }) {
  return (
    <Box alignSelf="center" pad="medium" width="100%" {...otherProps}>
      {children}
    </Box>
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

function ParagraphsGreenLeft({ paragraphs, size }) {
  return (
    <Box pad={{ left: 'small' }}>
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
          <Paragraph style={paragraphsGreenLeftStyle(size)}>{p}</Paragraph>
        </Box>
      ))}
    </Box>
  );
}

function LinkButton({ label, href, ...otherProps }) {
  return (
    <Button
      as="a"
      alignSelf="center"
      color="brand"
      href={href}
      label={<Text color="brand">{label}</Text>}
      style={{ border: '1px #CC1E66 solid' }}
      margin="small"
      {...otherProps}
    />
  );
}

Businesses.getInitialProps = async () => ({
  namespacesRequired: ['businesses'],
});

export default withTranslation('businesses')(Businesses);
