import Link from 'next/link';
import { Anchor, Box, DropButton, Image } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';
import { Link as ScrollLink, Events } from 'react-scroll';
import { useState } from 'react';

const pageLinks = [
  { label: 'FAQ', value: '/faq', isExternal: false, isRoute: true },
  { label: 'Donate', value: '/donate', isExternal: false, isRoute: true },
];

const homeMenuLinks = [
  {
    label: 'Wallet',
    value: 'wallet',
    isExternal: true,
    isRoute: false,
    href: 'https://circles.garden',
  },
  {
    label: 'About',
    value: 'about',
    isExternal: false,
    isRoute: false,
  },
  {
    label: 'How It Works',
    value: 'how-it-works',
    isExternal: false,
    isRoute: false,
  },
  { label: 'Community', value: 'community', isExternal: false, isRoute: false },
  ...pageLinks,
];

const notHomeMenuLinks = [
  {
    label: 'Home',
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

const MenuContent = ({ large }) => {
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
            label={item.label}
            href={item.href}
            target="_blank"
            color="light-1"
          />
        ) : item.isRoute ? (
          <Link key={item.value} href={item.value}>
            <Anchor as="span" label={item.label} color="light-1" />
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
            <Anchor color="light-1" as="span" label={item.label} />
          </ScrollLink>
        )
      )}
    </Box>
  );
};

export const SocialMenu = ({ ...otherProps }) => (
  <Box direction="row" justify="end" {...otherProps}>
    <Box
      pad="10px"
      gap="14px"
      direction="row"
      justify="end"
      flex={{ grow: 0 }}
      basis="auto"
      style={{ width: 'auto', backgroundColor: 'rgba(255, 255, 255, .2)' }}
    >
      {socialMenuLinks.map((item) => (
        <Anchor href={item.link} key={item.link} style={{ height: 24 }}>
          <Image width="24px" src={item.icon} />
        </Anchor>
      ))}
    </Box>
  </Box>
);

const mobileMenuStyle = {
  transform: 'translateY(-24px)',
};

const Menu = ({ activeSection, large, fixed, ...otherProps }) => {
  const [open, setOpen] = useState(false);

  Events.scrollEvent.register('begin', function (to, element) {
    setOpen(false);
  });

  return (
    <Box
      width="100%"
      pad={{ right: 'none' }}
      style={open && !fixed ? mobileMenuStyle : {}}
      {...otherProps}
    >
      {large ? (
        <MenuContent large />
      ) : (
        <DropButton
          dropAlign={{ top: 'top', right: 'right' }}
          alignSelf="end"
          open={open}
          label={
            <Box
              onClick={() => setOpen(!open)}
              pad="small"
              alignSelf="end"
              hoverIndicator="none"
            >
              {open ? (
                <CloseIcon color="light-1" />
              ) : (
                <MenuIcon color="light-1" />
              )}
            </Box>
          }
          dropContent={
            <Box
              background="dark-1"
              pad="large"
              width="260px"
              height="calc(100vh + 30px)"
            >
              {!fixed && (
                <Box
                  onClick={() => setOpen(false)}
                  alignSelf="end"
                  hoverIndicator="none"
                >
                  <CloseIcon color="light-1" />
                </Box>
              )}
              <Box pad={{ top: 'large' }} hoverIndicator="none">
                <MenuContent large={false} />
              </Box>
              <SocialMenu margin={{ top: 'large' }} />
            </Box>
          }
        />
      )}
    </Box>
  );
};

export default Menu;
