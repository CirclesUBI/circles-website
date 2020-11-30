import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Anchor, Box, Button, Drop, Image, Layer, Menu } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';
import { Link as ScrollLink, Events } from 'react-scroll';

import { withTranslation } from '../i18n';

const pageLinks = [
  { label: 'FAQ', value: '/faq', isExternal: false, isRoute: true },
  { label: 'Donate', value: '/donate', isExternal: false, isRoute: true },
];

const homeMenuLinks = [
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
  {
    label: 'Community',
    value: 'community',
    isExternal: false,
    isRoute: false,
  },
  {
    label: 'Team',
    value: 'team',
    isExternal: false,
    isRoute: false,
  },
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
    link: '/contact',
  },
];

const HomeMenu = ({ item, t, large, isCurrentPage }) => {
  const targetRef = useRef();
  const [show, setShow] = useState(false);

  return (
    <Box
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      <Box ref={targetRef}>
        <Link key={item.value} href={item.value}>
          <Anchor
            as="span"
            label={t(item.label)}
            color={large ? 'white' : 'brand4'}
            margin={{
              horizontal: '28px',
              vertical: large ? 'none' : 'medium',
            }}
            style={{
              fontSize: 16,
            }}
          />
        </Link>
      </Box>
      {isCurrentPage && show && targetRef.current && (
        <Drop
          align={{ top: 'bottom', left: 'left' }}
          target={targetRef.current}
          elevation="none"
          background="none"
          style={{ zIndex: 120 }}
        >
          <Box
            // direction="row"
            pad={{
              left: 'medium',
              top: 'small',
              bottom: 'small',
              right: 'small',
            }}
            background={{ opacity: 'weak' }}
          >
            {homeMenuLinks.map((subItem) => (
              <ScrollLink
                key={subItem.value}
                activeClass="menuitem-active"
                className="menuitem"
                to={subItem.value}
                spy
                hashSpy
                smooth
                duration={500}
                offset={-50}
                style={{ marginTop: 8, marginBottom: 8 }}
              >
                <Anchor
                  as="span"
                  label={t(subItem.label)}
                  color={large ? 'brand' : 'brand4'}
                  margin={{ horizontal: 'small' }}
                />
              </ScrollLink>
            ))}
          </Box>
        </Drop>
      )}
    </Box>
  );
};

const MenuContent = withTranslation('header')(({ t, large }) => {
  let pathname;
  if (process.browser) {
    pathname = location.pathname;
  }

  // const menu = pathname && pathname === '/' ? homeMenuLinks : notHomeMenuLinks;
  const menu = notHomeMenuLinks;
  const isHome = pathname && pathname === '/';

  return (
    <Box direction={large ? 'row' : 'column'} justify="center" pad="small">
      {menu.map((item, index) =>
        item.value === '/' ? (
          <HomeMenu item={item} t={t} large={large} isCurrentPage={isHome} />
        ) : item.isExternal ? (
          <Anchor
            key={item.value}
            label={t(item.label)}
            href={item.href}
            target="_blank"
            color={large ? 'white' : 'brand4'}
            margin={{
              horizontal: '28px',
              vertical: large ? 'none' : 'medium',
            }}
          />
        ) : item.isRoute ? (
          <Link key={item.value} href={item.value}>
            <Anchor
              as="span"
              label={t(item.label)}
              color={large ? 'white' : 'brand4'}
              margin={{
                horizontal: '28px',
                vertical: large ? 'none' : 'medium',
              }}
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
            style={large ? null : { marginTop: 16, marginBottom: 16 }}
          >
            <Anchor
              as="span"
              label={t(item.label)}
              color={large ? 'white' : 'brand4'}
              margin={{ horizontal: '28px' }}
            />
          </ScrollLink>
        )
      )}
    </Box>
  );
});

export const SocialMenu = ({ mobileMenu, fixed, ...otherProps }) => {
  const menuStyle = { width: 'auto' };
  if (!mobileMenu && !fixed) {
    menuStyle.background = 'rgba(255, 255, 255, .3)';
    menuStyle.padding = 8;
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
          <Link key={item.icon} href={item.link}>
            <Anchor as="span" key={item.link} style={{ height: 24 }}>
              <Image width="28px" src={mobileMenu ? item.iconp : item.icon} />
            </Anchor>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

const MainMenu = ({ t, large, fixed, ...otherProps }) => {
  const [open, setOpen] = useState(false);

  Events.scrollEvent.register('begin', function (to, element) {
    setOpen(false);
  });

  if (large) {
    return <MenuContent large />;
  }

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Box width="100%" align="center" {...otherProps}>
      {open && (
        <Layer
          position="right"
          full="vertical"
          onClickOutside={onClose}
          onEsc={onClose}
          responsive={false}
        >
          <Box pad="medium" justify="between" height="100vh">
            {fixed ? (
              <div />
            ) : (
              <Button
                alignSelf="end"
                onClick={onClose}
                icon={<CloseIcon color="brand4" />}
              />
            )}
            <Box pad={{ top: 'large' }}>
              <MenuContent t={t} large={false} />
            </Box>
            <Box>
              <Box justify="center" direction="row">
                <SocialMenu
                  fixed={fixed}
                  mobileMenu={!large}
                  margin={{ top: 'medium' }}
                />
              </Box>
            </Box>
          </Box>
        </Layer>
      )}
      <Button
        alignSelf="end"
        onClick={open ? onClose : onOpen}
        icon={open ? <CloseIcon color="white" /> : <MenuIcon color="white" />}
        margin={{ right: 'medium' }}
      />
    </Box>
  );
};

export default MainMenu;
