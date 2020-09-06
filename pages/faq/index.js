import React, { useState } from 'react';
import Head from 'next/head';
import { scroller, Element, Link as ScrollLink } from 'react-scroll';

import {
  Accordion,
  AccordionPanel,
  Box,
  FormField,
  Heading,
  Image,
  TextInput,
  Text,
  Button,
} from 'grommet';
import { Row, Col } from 'react-grid-system';

import Layout from '../../components/Layout';
import { withTranslation } from '../../i18n';

function FAQ({ t }) {
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const items = t('items', { returnObjects: true });
  const questionsIndex = items.map((item) => item.question);

  let suggestions = [];
  if (inputValue.length > 3) {
    questionsIndex.forEach((q) => {
      if (q.toLowerCase().includes(inputValue.toLowerCase())) {
        suggestions.push(q);
      }
    });
  }

  const onSelect = (event) => {
    questionsIndex.forEach((q, index) => {
      if (q === event.suggestion) {
        setSelectedIndex(index);
        scroller.scrollTo(q);
        setInputValue('');
      }
    });
  };

  return (
    <>
      <Head>
        <title>Circles UBI | Frequently Asked Questions</title>
      </Head>

      <Layout>
        {(large) => (
          <Box>
            <Row>
              <Box width="100%" pad={{ top: 'large' }}>
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
                  <FormField>
                    <TextInput
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      onSelect={onSelect}
                      suggestions={suggestions}
                      placeholder="Describe your issue"
                      type="search"
                    />
                  </FormField>
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
                  <Accordion activeIndex={selectedIndex}>
                    {items.map((item, index) => (
                      <AccordionPanel
                        key={item.question}
                        id={item.question}
                        onClick={() => setSelectedIndex(index)}
                        label={
                          <Element name={item.question}>
                            <Box pad="medium">
                              <Text weight="bold">{item.question}</Text>
                            </Box>
                          </Element>
                        }
                      >
                        <Box pad={{ horizontal: 'medium', bottom: 'medium' }}>
                          {item.answer}
                        </Box>
                      </AccordionPanel>
                    ))}
                  </Accordion>
                </Box>
              </Box>
            </Row>
          </Box>
        )}
      </Layout>
    </>
  );
}

FAQ.getInitialProps = async () => ({
  namespacesRequired: ['faq'],
});

export default withTranslation('faq')(FAQ);
