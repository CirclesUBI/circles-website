import React, { useState } from 'react';
import Link from 'next/link';
import {
  Anchor,
  Box,
  Button,
  Form,
  FormField,
  Image,
  Text,
  TextInput,
} from 'grommet';
import { Row, Col } from 'react-grid-system';

import { withTranslation } from '../i18n';

const footerLinks = [
  {
    label: 'Rocket Chat',
    value: 'https://chat.joincircles.net',
    imageLink: '/images/rc.svg',
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

const Footer = ({ t, large }) => {
  const [emailValue, setEmailValue] = useState({});
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
              <Image src={link.imageLink} margin={{ right: 'small' }} />
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
          <Form
            onSubmit={({ value }) => console.log(value)}
            value={emailValue}
            onChange={(value) => setEmailValue(value)}
          >
            <FormField color="light-1" name="email">
              <TextInput
                name="email"
                placeholder={t('newsletter-input-placeholder')}
                style={{ color: '#fff' }}
              />
            </FormField>
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
          </Form>
        </Box>
      </Col>
      <Col lg={3}>
        <Box pad="xlarge" gap="medium">
          <Text color="light-1" size="large" margin={{ bottom: 'small' }}>
            {t('links-title')}
          </Text>
          <Link href="/contact">
            <Anchor as="span" color="light-1">
              {t('links-kontakt')}
            </Anchor>
          </Link>

          <Link href="/donate">
            <Anchor as="span" color="light-1">
              {t('links-donate')}
            </Anchor>
          </Link>

          <Link href="/faq">
            <Anchor as="span" color="light-1">
              {t('links-faq')}
            </Anchor>
          </Link>

          <Link href="/privacy-policy">
            <Anchor as="span" color="light-1">
              {t('links-privacy-policy')}
            </Anchor>
          </Link>

          <Link href="/terms">
            <Anchor as="span" color="light-1">
              {t('links-terms')}
            </Anchor>
          </Link>
        </Box>
      </Col>
    </Row>
  );
};

export default withTranslation('footer')(Footer);
