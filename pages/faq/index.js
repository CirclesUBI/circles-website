import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { scroller, Element, Link as ScrollLink } from 'react-scroll';
import renderHTML from 'react-render-html';
import Slider from 'react-slick';
import ReactPlayer from 'react-player/vimeo';

import {
  Accordion,
  AccordionPanel,
  Box,
  Button,
  FormField,
  Image,
  Grommet,
  Layer,
  TextInput,
  Text,
  Paragraph,
} from 'grommet';
import { Up, Down, Close } from 'grommet-icons';
import { Row } from 'react-grid-system';

import Layout from '../../components/Layout';
import { withTranslation } from '../../i18n';

const textFieldTheme = {
  global: {
    focus: {
      border: {
        color: '#CC1E66',
      },
    },
  },
};

function FAQ({ t }) {
  const [inputValue, setInputValue] = useState('');
  const { query, push } = useRouter();

  const selectedIndex = query.open && Number(query.open);

  const setSelectedIndex = (itemIndex) => {
    push({ query: { open: itemIndex } }, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  useEffect(() => {
    scroller.scrollTo('page-wrapper', {
      duration: 200,
      smooth: true,
    });
    inputRef.current.focus();
  }, []);

  const inputRef = useRef();

  const items = t('items', { returnObjects: true });

  let suggestions = [];
  if (inputValue.length > 3) {
    items.forEach((item, index) => {
      if (item.question.toLowerCase().includes(inputValue.toLowerCase())) {
        suggestions.push({
          label: (
            <ScrollLink
              onClick={() => setSelectedIndex(index)}
              to={item.question}
              smooth
              duration={300}
              offset={-80}
            >
              <Box pad="small">{item.question}</Box>
            </ScrollLink>
          ),
          value: item.question,
          topic: item.topic,
          index,
        });
      }
    });
  }

  const onSelect = (event) => {
    const suggestion = event.suggestion;
    setSelectedIndex(suggestion.index);
    setInputValue('');
    scroller.scrollTo(suggestion.value, {
      duration: 300,
      offset: -80,
      smooth: true,
    });
  };

  const handlePanelSelect = (index) => {
    if (index === selectedIndex) {
      setSelectedIndex(null);
      return;
    }
    setSelectedIndex(index);
  };

  const isClient = typeof window !== 'undefined';

  return (
    <div className="page">
      <Head>
        <title>Circles UBI | Frequently Asked Questions</title>
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
        {(large) => (
          <Box
            width="large"
            alignSelf="center"
            className="page-wrapper"
            elevation="medium"
          >
            <Element name="page-wrapper">
              <Box width="100%" pad={{ top: 'large' }}>
                <Box alignSelf="center">
                  <Image
                    src="/images/logo.svg"
                    margin={{ bottom: 'large' }}
                    style={{ width: 90, height: 90 }}
                  />
                </Box>
                <Box
                  margin={{ left: 'medium', right: 'medium' }}
                  width="medium"
                  alignSelf="center"
                >
                  <Text
                    weight="bold"
                    size="large"
                    textAlign="center"
                    margin={{ bottom: 'medium' }}
                  >
                    {t('title')}
                  </Text>
                  <Box pad={{ horizontal: 'medium' }}>
                    <Grommet theme={textFieldTheme}>
                      <FormField>
                        <TextInput
                          ref={inputRef}
                          value={inputValue}
                          onChange={(event) => {
                            // setSelectedIndex(null);
                            push({ query: {} });
                            setInputValue(event.target.value);
                          }}
                          onSelect={onSelect}
                          suggestions={suggestions}
                          placeholder={t('placeholder')}
                          type="search"
                          dropProps={{ pad: { horizontal: 'medium' } }}
                        />
                      </FormField>
                    </Grommet>
                  </Box>
                </Box>
              </Box>
            </Element>
            <Row>
              <Box width="100%">
                <Box pad={{ top: 'large', horizontal: 'large' }}>
                  <Text
                    margin={{ top: 'medium', bottom: 'medium' }}
                    size="large"
                  >
                    Video Library
                  </Text>
                  <VideoSlider large={large} />
                </Box>

                <Box
                  margin={{ left: 'medium', right: 'medium' }}
                  width="large"
                  pad={{ horizontal: 'large', bottom: 'large' }}
                  alignSelf="center"
                >
                  {isClient && (
                    <Accordion activeIndex={selectedIndex} animate={false}>
                      {items.map((item, index) => (
                        <Box key={item.question}>
                          {(index === 0 ||
                            item.topic !== items[index - 1].topic) && (
                            <Text
                              margin={{ top: 'xlarge', bottom: 'medium' }}
                              size="large"
                            >
                              {item.topic}
                            </Text>
                          )}
                          <AccordionPanel
                            id={item.question}
                            header={
                              <Box
                                direction="row"
                                pad="medium"
                                onClick={() => handlePanelSelect(index)}
                              >
                                <Element
                                  name={item.question}
                                  style={{ flexBasis: '100%', flexGrow: 3 }}
                                >
                                  <Text weight="bold">{item.question}</Text>
                                </Element>
                                {index === selectedIndex ? <Up /> : <Down />}
                              </Box>
                            }
                          >
                            <Box
                              pad={{
                                horizontal: 'medium',
                                bottom: 'medium',
                              }}
                              animation="fadeIn"
                            >
                              {item.answer.map((paragraph) => (
                                <Paragraph
                                  key={paragraph && paragraph.substring(0, 20)}
                                  className="faq-answer-anchor"
                                  size="small"
                                >
                                  {renderHTML(paragraph)}
                                </Paragraph>
                              ))}
                            </Box>
                          </AccordionPanel>
                        </Box>
                      ))}
                    </Accordion>
                  )}
                </Box>
              </Box>
            </Row>
          </Box>
        )}
      </Layout>
    </div>
  );
}

const sliderSettings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: false,
};

const videoThumbs = [
  {
    caption: 'Circles Philosophy',
    videoSrc: 'https://player.vimeo.com/video/469757163',
    imageSrc: '/images/videothumbs/circles-team-philosophy.jpg',
  },
  {
    caption: 'Basic Income March',
    videoSrc: 'https://player.vimeo.com/video/469872391',
    imageSrc: '/images/videothumbs/basic-income-march-berlin.jpg',
  },
  {
    caption: 'About Basic Income',
    videoSrc: 'https://player.vimeo.com/video/469693447',
    imageSrc: '/images/videothumbs/circles-team-basic-income.jpg',
  },
  {
    caption: 'Users Explain Circles',
    videoSrc: 'https://player.vimeo.com/video/475014191',
    imageSrc: '/images/videothumbs/users-explain-circles.jpg',
  },
];

function VideoThumb({ thumb, large }) {
  return (
    <Box
      alignSelf="center"
      width={large ? 'small' : 'medium'}
      height={large ? 'xsmall' : 'small'}
      style={{ margin: '0 auto', position: 'relative' }}
    >
      <Image fit="cover" src={thumb.imageSrc} caption={thumb.caption} />
      <Box
        pad="xsmall"
        background="rgba(255, 255, 255, .8)"
        style={{ position: 'absolute', bottom: 6 }}
      >
        <Text size="small" color="dark-1">
          {thumb.caption}
        </Text>
      </Box>
    </Box>
  );
}

function VideoLayer({ thumb, onClose }) {
  if (!thumb) {
    return null;
  }

  return (
    <Layer animation="fadeIn" onEsc={onClose} onClickOutside={onClose}>
      <Box width="large" height="medium">
        <ReactPlayer
          width="100%"
          height="100%"
          url={thumb.videoSrc}
          controls
          playing
          playerOptions={{ fullscreen: false }}
        />
      </Box>
    </Layer>
  );
}

function VideoSlider({ large }) {
  const [showVideo, setShowVideo] = useState(null);

  if (large) {
    return (
      <Box>
        <Box direction="row" align="start" justify="center" gap="medium">
          {videoThumbs.map((thumb) => (
            <Box key={thumb.caption} onClick={() => setShowVideo(thumb)}>
              <VideoThumb large={large} thumb={thumb} />
            </Box>
          ))}
        </Box>

        {showVideo && (
          <Layer position="top-right" modal={false} plain>
            <Button
              icon={<Close color="white" />}
              onClick={() => setShowVideo(null)}
              style={{ zIndex: 999 }}
            />
          </Layer>
        )}

        <VideoLayer onClose={() => setShowVideo(null)} thumb={showVideo} />
      </Box>
    );
  }

  return (
    <Box>
      <Slider {...sliderSettings}>
        {videoThumbs.map((thumb) => (
          <Box key={thumb.caption} onClick={() => setShowVideo(thumb)}>
            <VideoThumb
              onClick={() => setShowVideo(thumb)}
              large={large}
              thumb={thumb}
            />
          </Box>
        ))}
      </Slider>

      <VideoLayer onClose={() => setShowVideo(null)} thumb={showVideo} />

      {showVideo && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 100,
          }}
        >
          <Box background="dark-1" pad="medium">
            <Button
              icon={<Close />}
              label="CLOSE"
              onClick={() => setShowVideo(null)}
            />
          </Box>
        </div>
      )}
    </Box>
  );
}

FAQ.getInitialProps = async () => ({
  namespacesRequired: ['faq'],
});

export default withTranslation('faq')(FAQ);
