import Link from 'next/link';
import { Anchor, Box, DropButton, Image } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';
import { Link as ScrollLink } from 'react-scroll';
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

const Menu = ({ activeSection, large, ...otherProps }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      width="100%"
      pad={{ right: 'none' }}
      style={open ? mobileMenuStyle : {}}
      {...otherProps}
    >
      {large ? (
        <MenuContent large />
      ) : (
        <DropButton
          label={
            <Box onClick={() => setOpen(true)} pad="small">
              <MenuIcon color="light-1" />
            </Box>
          }
          dropAlign={{ top: 'top', right: 'right' }}
          alignSelf="end"
          open={open}
          dropContent={
            <Box
              background="brand"
              pad="large"
              width="260px"
              height="calc(100vh + 30px)"
            >
              <Box
                onClick={() => setOpen(false)}
                alignSelf="end"
                pad={{ bottom: 'medium' }}
              >
                <CloseIcon color="light-1" />
              </Box>
              <MenuContent large={false} />
              <SocialMenu margin={{ top: 'large' }} />
            </Box>
          }
        />
      )}
    </Box>
  );
};

export default Menu;
