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
    console.log('onselect', event);
  };

  const handlePanelSelect = (index) => {
    if (index === selectedIndex) {
      setSelectedIndex(null);
      return;
    }
    setSelectedIndex(index);
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
                      onChange={(event) => {
                        setSelectedIndex(null);
                        setInputValue(event.target.value);
                      }}
                      onSuggestionSelect={onSelect}
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
                      <Box>
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
                          key={item.question}
                          id={item.question}
                          onClick={() => handlePanelSelect(index)}
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
                      </Box>
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
