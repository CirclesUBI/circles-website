import React from 'react';
import Head from 'next/head';
import { Box, Markdown } from 'grommet';

import Layout from './Layout';

export default function StaticPage ({head, CONTENT, }) {
  return (
    <div className="page">
      <Head>
        <title>{head}</title>
      </Head>

      <Layout>
        {(large) => (
          <Box
            pad={{vertical: 'medium', horizontal: large ? '150px' : 'large'}}
            width="large"
            alignSelf="center"
            className="page-wrapper"
            elevation="medium"
          >
            <Markdown>
              {CONTENT}
            </Markdown>
          </Box>
        )}
      </Layout>
    </div>
  )
}
