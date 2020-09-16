import React, { useState } from 'react';
import Head from 'next/head';
import {
  scroller,
  Element,
  Link as ScrollLink,
  animateScroll,
} from 'react-scroll';

import renderHTML from 'react-render-html';

import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  FormField,
  Heading,
  Image,
  TextInput,
  Text,
  Button,
  Paragraph,
} from 'grommet';
import { Row, Col } from 'react-grid-system';

import Layout from '../../components/Layout';
import { withTranslation } from '../../i18n';

function FAQ({ t }) {
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const items = t('items', { returnObjects: true });

  let suggestions = [];
  if (inputValue.length > 3) {
    items.forEach((item, index) => {
      if (item.question.toLowerCase().includes(inputValue.toLowerCase())) {
        suggestions.push({
          label: (
            <ScrollLink
              onClick={() => handleSelect(index)}
              to={item.question}
              smooth
              duration={300}
              offset={-50}
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

  const handleSelect = (index) => {
    setSelectedIndex(index);
    setInputValue('');
  };

  const onSelect = (event) => {
    const suggestion = event.suggestion;
    handleSelect(suggestion.index);
    scroller.scrollTo(suggestion.value, {
      duration: 300,
      offset: -50,
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
      </Head>

      <Layout>
        {(large) => (
          <Box>
            <Box
              width="large"
              alignSelf="center"
              className="page-wrapper"
              elevation="medium"
            >
              <Row>
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
                      <FormField>
                        <TextInput
                          value={inputValue}
                          onChange={(event) => {
                            setSelectedIndex(null);
                            setInputValue(event.target.value);
                          }}
                          onSelect={onSelect}
                          suggestions={suggestions}
                          placeholder="Describe your issue"
                          type="search"
                          dropProps={{ pad: { horizontal: 'medium' } }}
                        />
                      </FormField>
                    </Box>
                  </Box>
                </Box>
              </Row>
              <Row>
                <Box width="100%">
                  <Box
                    margin={{ left: 'medium', right: 'medium' }}
                    width="large"
                    pad="large"
                    alignSelf="center"
                  >
                    {isClient && (
                      <Accordion activeIndex={selectedIndex}>
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
                              label={
                                <Element name={item.question}>
                                  <Box
                                    pad="medium"
                                    width="100%"
                                    onClick={() => handlePanelSelect(index)}
                                  >
                                    <Text weight="bold">{item.question}</Text>
                                  </Box>
                                </Element>
                              }
                            >
                              <Box
                                pad={{ horizontal: 'medium', bottom: 'medium' }}
                              >
                                {item.answer.map((paragraph) => (
                                  <Paragraph
                                    key={
                                      paragraph && paragraph.subString(0, 10)
                                    }
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
          </Box>
        )}
      </Layout>
    </div>
  );
}

// function AnswerParagraph ({paragraph}) {
//   const answerParagraph = t('')
// }

FAQ.getInitialProps = async () => ({
  namespacesRequired: ['faq'],
});

export default withTranslation('faq')(FAQ);
