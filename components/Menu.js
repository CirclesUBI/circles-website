import Link from 'next/link';
import { Anchor, Box, Button, DropButton, Image } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';
import { Link as ScrollLink, Events } from 'react-scroll';
import { useState } from 'react';

import { withTranslation } from '../i18n';
import LangSwitcher from './LangSwitcher';

const pageLinks = [
  { label: 'faq', value: '/faq', isExternal: false, isRoute: true },
  // { label: 'donate', value: '/donate', isExternal: false, isRoute: true },
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
    iconp: '/images/tg-p.svg',
    link: 'https://t.me/CirclesUBI',
  },
  {
    icon: '/images/tw.svg',
    iconp: '/images/tw-p.svg',
    link: 'https://twitter.com/CirclesUBI',
  },
  {
    icon: '/images/fb.svg',
    iconp: '/images/fb-p.svg',
    link: 'https://facebook.com/CirclesUBI',
  },
  {
    icon: '/images/em.svg',
    iconp: '/images/em-p.svg',
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
            color={large ? 'white' : 'brand4'}
          />
        ) : item.isRoute ? (
          <Link key={item.value} href={item.value}>
            <Anchor
              as="span"
              label={t(item.label)}
              color={large ? 'white' : 'brand4'}
            />
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
            <Anchor
              as="span"
              label={t(item.label)}
              color={large ? 'white' : 'brand4'}
            />
          </ScrollLink>
        )
      )}
    </Box>
  );
});

export const SocialMenu = ({ mobileMenu, ...otherProps }) => {
  const menuStyle = { width: 'auto' };
  if (!mobileMenu) {
    menuStyle.background = 'rgba(255, 255, 255, .3)';
    menuStyle.padding = 8;
    menuStyle.marginRight = 8;
  }

  return (
    <Box direction="row" justify="end" {...otherProps}>
      <Box
        pad="10px"
        gap="14px"
        direction="row"
        justify="end"
        flex={{ grow: 0 }}
        basis="auto"
        style={menuStyle}
      >
        {socialMenuLinks.map((item) => (
          <Anchor href={item.link} key={item.link} style={{ height: 24 }}>
            <Image width="24px" src={mobileMenu ? item.iconp : item.icon} />
          </Anchor>
        ))}
      </Box>
    </Box>
  );
};

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
            hoverIndicator={false}
            plain
            label={
              <Box pad={{ top: '0', right: 'medium' }}>
                {open ? (
                  <CloseIcon plain color="light-1" />
                ) : (
                  <MenuIcon plain color="light-1" />
                )}
              </Box>
            }
            dropContent={
              <Box
                background="white"
                pad="medium"
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
                    icon={<CloseIcon plain color="brand4" />}
                    plain
                    margin={{ top: 'medium' }}
                  />
                )}
                <Box pad={{ top: 'large' }} hoverIndicator="none">
                  <MenuContent t={t} large={false} />
                </Box>
                <Box align="center">
                  <LangSwitcher mobileMenu />
                  <Box justify="center" direction="row">
                    <SocialMenu
                      fixed={fixed}
                      mobileMenu={!large}
                      margin={{ top: 'large' }}
                    />
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
