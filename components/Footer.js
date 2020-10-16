import React from 'react';
import Link from 'next/link';
import {
  Anchor,
  Box,
  Button,
  CheckBox,
  FormField,
  Grommet,
  Image,
  Text,
  TextInput,
} from 'grommet';
import { Row, Col } from 'react-grid-system';

import { withTranslation } from '../i18n';

const footerLinks = [
  {
    label: 'Telegram',
    value: 'https://t.me/CirclesUBI',
    imageLink: '/images/tg.svg',
    blank: true,
  },
  {
    label: 'Twitter',
    value: 'https://twitter.com/CirclesUBI',
    imageLink: '/images/tw.svg',
    blank: true,
  },
  {
    label: 'Facebook',
    value: 'https://www.facebook.com/CirclesUBI',
    imageLink: '/images/fb.svg',
    blank: true,
  },
  {
    label: 'Email',
    value: 'mailto:hello@joincircles.net',
    imageLink: '/images/em.svg',
    blank: false,
  },
];

const footerTheme = {
  global: {
    colors: {
      border: 'light-3',
    },
    focus: {
      border: {
        color: '#fff',
      },
    },
  },
  textInput: {
    extend: {
      fontStyle: 'italic',
      fontWeight: 300,
    },
  },
};

const Footer = ({ t }) => {
  return (
    <Row
      style={{
        background: 'rgb(102,15,51)',
        background:
          'linear-gradient(135deg, rgba(102,15,51,1) 0%, rgba(204,30,102,1) 100%)',
      }}
    >
      <Col lg={3}>
        <Box pad="xlarge" gap="medium">
          <Text color="light-1" size="large" margin={{ bottom: 'small' }}>
            {t('follow-us')}
          </Text>
          {footerLinks.map((link) => (
            <Anchor
              key={link.value}
              href={link.value}
              target={link.blank ? '_blank' : '_self'}
              color="light-1"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Image
                width="24px"
                src={link.imageLink}
                margin={{ right: 'small' }}
              />
              <Text size="small">{link.label}</Text>
            </Anchor>
          ))}
        </Box>
      </Col>
      <Col lg={6}>
        <Box pad="xlarge" gap="medium">
          <Text color="light-1" size="large" margin={{ bottom: 'small' }}>
            {t('newsletter-title')}
          </Text>
          <Text color="light-1">‍{t('newsletter-text')}</Text>
          <form action="https://joincircles.us10.list-manage.com/subscribe/post">
            <input
              type="hidden"
              name="u"
              value="ce7ac2789abf7ce01f739a2b6"
            ></input>
            <input type="hidden" name="id" value="35899a122a"></input>
            <Grommet theme={footerTheme}>
              <FormField color="light-1" name="email">
                <TextInput
                  id="MERGE0"
                  name="MERGE0"
                  placeholder={t('newsletter-input-placeholder')}
                  style={{ color: '#fff' }}
                />
              </FormField>
            </Grommet>
            <Box margin={{ bottom: 'medium' }}>
              <CheckBox
                id="gdpr_45553"
                name="gdpr[45553]"
                value="Y"
                label={
                  <Text color="white" size="small">
                    {t('newsletter-gdpr-check')}
                  </Text>
                }
              />
            </Box>

            <Button
              primary
              color="light-1"
              type="submit"
              label={t('newsletter-signup-button-label')}
              style={{
                borderRadius: 8,
                marginTop: 12,
              }}
            />
          </form>
        </Box>
      </Col>
      <Col lg={3}>
        <Box pad="xlarge" gap="medium">
          <Text color="light-1" size="large" margin={{ bottom: 'small' }}>
            {t('links-title')}
          </Text>
          <Anchor href="https://circles.garden" color="light-1">
            {t('links-wallet')}
          </Anchor>
          <Anchor href="https://handbook.joincircles.net/about/whitepaper.html" color="light-1">
            {t('links-whitepaper')}
          </Anchor>

          {/* <Link href="/contact">
            <Anchor as="span" color="light-1">
              {t('links-contact')}
            </Anchor>
          </Link>

          <Link href="/donate">
            <Anchor as="span" color="light-1">
              {t('links-donate')}
            </Anchor>
          </Link> */}

          <Link href="/faq">
            <Anchor as="span" color="light-1">
              {t('links-faq')}
            </Anchor>
          </Link>

          {/* <Link href="/privacy-policy">
            <Anchor as="span" color="light-1">
              {t('links-privacy-policy')}
            </Anchor>
          </Link>

          <Link href="/terms">
            <Anchor as="span" color="light-1">
              {t('links-terms')}
            </Anchor>
          </Link> */}
        </Box>
      </Col>
    </Row>
  );
};

export default withTranslation('footer')(Footer);
