import Link from 'next/link';
import { Anchor, Box, Button, DropButton, Image } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';
import { Link as ScrollLink, Events } from 'react-scroll';
import { useState } from 'react';

import { withTranslation } from '../i18n';
import LangSwitcher from './LangSwitcher';

const pageLinks = [
  { label: 'faq', value: '/faq', isExternal: false, isRoute: true },
  { label: 'donate', value: '/donate', isExternal: false, isRoute: true },
];

const homeMenuLinks = [
  {
    label: 'wallet',
    value: 'wallet',
    isExternal: true,
    isRoute: false,
    href: 'https://circles.garden',
  },
  {
    label: 'about',
    value: 'about',
    isExternal: false,
    isRoute: false,
  },
  {
    label: 'how-it-works',
    value: 'how-it-works',
    isExternal: false,
    isRoute: false,
  },
  { label: 'Community', value: 'community', isExternal: false, isRoute: false },
  ...pageLinks,
];

const notHomeMenuLinks = [
  {
    label: 'home',
    value: '/',
    isExternal: false,
    isRoute: true,
  },
  {
    label: 'Wallet',
    value: 'wallet',
    isExternal: true,
    isRoute: false,
    href: 'https://circles.garden',
  },
  ...pageLinks,
];

const socialMenuLinks = [
  {
    icon: '/images/tg.svg',
    link: 'https://t.me/CirclesUBI',
  },
  {
    icon: '/images/tw.svg',
    link: 'https://twitter.com/CirclesUBI',
  },
  {
    icon: '/images/fb.svg',
    link: 'https://facebook.com/CirclesUBI',
  },
  {
    icon: '/images/em.svg',
    link: 'mailto:hello@joincircles.net',
  },
];

const MenuContent = withTranslation('header')(({ t, large }) => {
  let pathname;
  if (process.browser) {
    pathname = location.pathname;
  }

  const menu = pathname && pathname === '/' ? homeMenuLinks : notHomeMenuLinks;

  return (
    <Box
      direction={large ? 'row' : 'column'}
      justify="center"
      gap="large"
      pad="small"
    >
      {menu.map((item, index) =>
        item.isExternal ? (
          <Anchor
            key={item.value}
            label={t(item.label)}
            href={item.href}
            target="_blank"
            color="light-1"
          />
        ) : item.isRoute ? (
          <Link key={item.value} href={item.value}>
            <Anchor as="span" label={t(item.label)} color="light-1" />
          </Link>
        ) : (
          <ScrollLink
            key={item.value}
            activeClass="menuitem-active"
            className="menuitem"
            to={item.value}
            spy
            hashSpy
            smooth
            duration={500}
            offset={-50}
            // onSetActive={(item) => setActiveSection(item)}
          >
            <Anchor color="light-1" as="span" label={t(item.label)} />
          </ScrollLink>
        )
      )}
    </Box>
  );
});

export const SocialMenu = ({ large, ...otherProps }) => (
  <>
    <Box direction="row" justify="end" {...otherProps}>
      <Box
        pad="10px"
        gap="14px"
        direction="row"
        justify="end"
        flex={{ grow: 0 }}
        basis="auto"
        style={{
          width: 'auto',
          backgroundColor: large ? 'none' : 'rgba(255, 255, 255, .2)',
        }}
      >
        {socialMenuLinks.map((item) => (
          <Anchor href={item.link} key={item.link} style={{ height: 24 }}>
            <Image width="24px" src={item.icon} />
          </Anchor>
        ))}
      </Box>
    </Box>
  </>
);

const mobileMenuStyle = {
  transform: 'translateY(-24px)',
};

const Menu = ({ t, activeSection, large, fixed, ...otherProps }) => {
  const [open, setOpen] = useState(false);

  Events.scrollEvent.register('begin', function (to, element) {
    setOpen(false);
  });

  return (
    <Box>
      <Box
        width="100%"
        style={open && !fixed ? mobileMenuStyle : {}}
        align="center"
        {...otherProps}
      >
        {large ? (
          <MenuContent large />
        ) : (
          <DropButton
            dropAlign={{ top: 'top', right: 'right' }}
            alignSelf="end"
            open={open}
            onClick={() => setOpen(!open)}
            pad={{ right: '0px' }}
            label={
              <Box pad={{ top: '0' }}>
                {open ? (
                  <CloseIcon plain={false} color="light-1" />
                ) : (
                  <MenuIcon plain={false} color="light-1" />
                )}
              </Box>
            }
            dropContent={
              <Box
                background="dark-1"
                pad="large"
                width="260px"
                height="calc(100vh + 30px)"
                justify="between"
              >
                {fixed ? (
                  <div />
                ) : (
                  <Button
                    onClick={() => setOpen(false)}
                    alignSelf="end"
                    hoverIndicator="none"
                    icon={<CloseIcon color="light-1" />}
                  />
                )}
                <Box pad={{ top: 'large' }} hoverIndicator="none">
                  <MenuContent t={t} large={false} />
                </Box>
                <Box align="center">
                  <LangSwitcher />
                  <Box justify="center" direction="row">
                    <SocialMenu large={large} margin={{ top: 'large' }} />
                  </Box>
                </Box>
              </Box>
            }
          />
        )}
      </Box>
    </Box>
  );
};

export default Menu;
