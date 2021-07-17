import {
  Anchor,
  Heading,
  Box,
  Text,
  Button,
  Drop,
  Image,
  Layer,
  Menu,
} from 'grommet';
import { Link as ScrollLink, Events } from 'react-scroll';
import { Link } from '../i18n';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';
import { Row, Col } from 'react-grid-system';
import { useState, useRef } from 'react';

import { withTranslation } from '../i18n';
import { activeLanguages } from './LangSwitcher';

const teamMembers = [
  {
    name: 'Sarah Friend',
    image: 'images/team/sarahf.png',
  },
  {
    name: 'Blanka Vay',
    image: 'images/team/blankav.png',
  },
  {
    name: 'Julio Linares',
    image: 'images/team/juliol.png',
  },
  {
    name: '@adz',
    image: 'images/team/adz.png',
  },
  {
    name: 'Martin Köppelmann',
    image: 'images/team/martink.png',
  },
  {
    name: 'Saraswathi Subbaraman',
    image: 'images/team/swathi.png',
  },
];

const contributors = [
  'Andy Milenius',
  'Anne Walther',
  'Ashoka Finley',
  'David Terry',
  'Ed Murphy',
  'Emin Durak',
  'Franziska Börner-Zobel',
  'Harriet von Froreich',
  'Jacob Hühn',
  'Javier Alaves',
  'Justyna Trivedi',
  'Karenina Schröder',
  'Malthus John',
  'Martin Lundfall',
  'Ronit Kory',
  'Wouter Kampmann',
];

const Team = ({ t }) => {
  return (
    <Box
      id="team"
      margin={{ top: 'large' }}
      style={{
        background: `linear-gradient(180deg, #fff 0%, rgb(243, 208, 223) 20%, #fff 40%, #fff 50%, rgb(243, 208, 223)) 100%`,
        position: 'relative',
      }}
    >
      <Heading
        alignSelf="center"
        color="dark-1"
        margin={{ top: 'large', bottom: 'small' }}
        level={1}
        textAlign="center"
      >
        {t('team-title')}
      </Heading>
      <Text textAlign="center" margin={{ bottom: 'medium' }}>
        <em>{t('team-subtitle')}</em>
      </Text>
      <Box margin={{ left: 'large', right: 'large', bottom: 'large' }}>
        <Row>
          {teamMembers.map((member) => (
            <Col md={4} key={member.name}>
              <Box pad="medium" gap="small" align="center" alignSelf="center">
                <Box>
                  <Image width="220px" src={member.image} alt={member.name} />
                </Box>
                <Box alignSelf="center">
                  <Text textAlign="center">{member.name}</Text>
                  <Text textAlign="center">
                    <em>{t(`${member.name} title`)}</em>
                  </Text>
                </Box>
              </Box>
            </Col>
          ))}
        </Row>
      </Box>

      <Box
        pad="medium"
        width="100%"
        style={{
          backgroundImage: `url('/images/team-back-left.svg'), url('/images/team-back-right.svg')`,
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'bottom left, bottom right',
          backgroundSize: '50% 50%',
        }}
      >
        <Text textAlign="center" margin={{ top: 'xlarge', bottom: 'large' }}>
          <em>{t('team-extra-subtitle')}</em>
        </Text>

        <Box
          size="large"
          alignSelf="center"
          direction="row"
          margin={{ bottom: 'large' }}
        >
          <Box pad={{ horizontal: 'large' }} gap="small">
            {contributors
              .filter((c, i) => i < contributors.length / 2)
              .map((c) => (
                <Text key={c}>{c}</Text>
              ))}
          </Box>
          <Box pad={{ horizontal: 'large' }} gap="small">
            {contributors
              .filter((c, i) => i >= contributors.length / 2)
              .map((c) => (
                <Text key={c}>{c}</Text>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withTranslation('team')(Team);
