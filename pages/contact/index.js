import React from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  Grommet,
  Paragraph,
  TextArea,
  TextInput,
} from 'grommet';

import Layout from '../../components/Layout';

const formTheme = {
  global: {
    colors: {
      border: '#E36567',
    },
    focus: {
      border: {
        color: '#CC1E66',
      },
    },
  },
  textInput: {
    extend: {
      fontWeight: 300,
      fontSize: 16,
    },
  },
  textArea: {
    extend: {
      fontWeight: 300,
      fontSize: 16,
    },
  },
};

export default function Terms() {
  return (
    <div className="page">
      <Head>
        <title>CirclesUBI | Contact Us</title>
      </Head>

      <Layout>
        {(large) => (
          <Box
            pad={{ vertical: 'medium', horizontal: large ? '150px' : 'large' }}
            width="large"
            alignSelf="center"
            className="page-wrapper"
            elevation="medium"
          >
            <Heading level={1}>Contact Us</Heading>
            <Paragraph margin={{ bottom: 'medium' }}>
              We will be happy to hear from you whether you have an inquiry, a
              question, feedback, or a love letter to share! Thank you!
            </Paragraph>

            <Grommet theme={formTheme}>
              <Box pad={{ vertical: 'large' }}>
                <form action="https://formspree.io/f/xrgoljya" method="post">
                  <FormField label="Your email address">
                    <TextInput name="email" type="email" />
                  </FormField>
                  <FormField label="Subject">
                    <TextInput name="subject" />
                  </FormField>
                  <FormField label="Message">
                    <TextArea name="message" />
                  </FormField>
                  <Box pad={{ top: 'medium' }}>
                    <Button
                      primary
                      type="submit"
                      label="Send"
                      alignSelf="end"
                    />
                  </Box>
                </form>
              </Box>
            </Grommet>
          </Box>
        )}
      </Layout>
    </div>
  );
}
