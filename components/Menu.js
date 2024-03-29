import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Link } from '../i18n';
import { Anchor, Box, Button, Drop, Image, Layer } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';
import { Link as ScrollLink, Events } from 'react-scroll';

import { withTranslation } from '../i18n';

const homeMenu = [
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

const menu = [
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
  { label: 'FAQ', value: '/faq', isExternal: false, isRoute: true },
  {
    label: 'News',
    value: 'news',
    isExternal: true,
    isRoute: false,
    href: 'https://medium.com/circles-ubi',
  },
  {
    label: 'Businesses',
    value: '/businesses',
    isExternal: false,
    isRoute: true,
  },
];

const socialMenu = [
  {
    icon: '/images/ig.svg',
    iconp: '/images/ig-p.svg',
    link: 'https://www.instagram.com/circles_ubi_official/',
  },
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

const SubMenuItems = ({ t, large }) => (
  <Box
    pad={{
      left: '22px',
      top: 'small',
      bottom: 'small',
      right: 'small',
    }}
  >
    {homeMenu.map((subItem) => (
      <ScrollLink
        key={subItem.value}
        to={subItem.value}
        spy
        hashSpy
        smooth
        duration={500}
        offset={-50}
        style={{ marginTop: 6, marginBottom: 6 }}
      >
        <Anchor
          as="span"
          label={t(subItem.label)}
          color={large ? 'brand' : 'brand3'}
          margin={{ horizontal: 'small' }}
        />
      </ScrollLink>
    ))}
  </Box>
);

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
              vertical: !isCurrentPage && !large ? 'small' : 'none',
            }}
            style={{
              fontSize: 16,
            }}
            className={isCurrentPage ? 'current-page' : ''}
          />
        </Link>
      </Box>
      {large
        ? isCurrentPage &&
          show &&
          targetRef.current && (
            <Drop
              align={{ top: 'bottom', left: 'left' }}
              target={targetRef.current}
              elevation="xsmall"
              background="white"
              style={{ zIndex: 120 }}
            >
              <SubMenuItems t={t} large={large} />
            </Drop>
          )
        : isCurrentPage && (
            <Box pad={{ left: 'medium' }}>
              <SubMenuItems t={t} large={large} />
            </Box>
          )}
    </Box>
  );
};

const MenuContent = withTranslation('header')(({ t, large }) => {
  const { pathname } = useRouter();

  const isHome = pathname === '/';

  return (
    <Box
      direction={large ? 'row' : 'column'}
      justify="center"
      pad="small"
      align={large ? 'center' : 'start'}
    >
      {menu.map((item, index) =>
        item.value === '/' ? (
          <HomeMenu
            key={item.value}
            item={item}
            t={t}
            large={large}
            isCurrentPage={isHome}
          />
        ) : item.isExternal ? (
          <Anchor
            key={item.value}
            label={t(item.label)}
            href={item.href}
            rel="noreferrer"
            target="_blank"
            color={large ? 'white' : 'brand4'}
            margin={{
              horizontal: '28px',
              vertical: large ? 'none' : 'small',
            }}
          />
        ) : item.isRoute ? (
          <Link key={item.value} href={item.value}>
            <Anchor
              as="span"
              label={t(item.label)}
              color={large ? 'white' : 'brand4'}
              className={pathname === item.value ? 'current-page' : ''}
              margin={{
                horizontal: '28px',
                vertical: large ? 'none' : 'small',
              }}
            />
          </Link>
        ) : (
          <ScrollLink
            key={item.value}
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
      <Link href="/donate">
        <Button
          primary
          as="span"
          alignSelf="center"
          label={
            <span style={{ color: '#fff', fontSize: 16 }}>
              <b>Donate</b>
            </span>
          }
          margin={{
            horizontal: '28px',
            vertical: large ? 'none' : 'small',
          }}
          color="brand5"
        />
      </Link>
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
        {socialMenu.map((item) => (
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
    return (
      <nav>
        <MenuContent large />
      </nav>
    );
  }

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <nav>
      <Box width="100%" align="center" {...otherProps}>
        {open && (
          <Layer
            position="right"
            full="vertical"
            onClickOutside={onClose}
            onEsc={onClose}
            responsive={false}
          >
            <Box pad="small" justify="around" height="100vh">
              {fixed ? (
                <div />
              ) : (
                <Button
                  alignSelf="end"
                  onClick={onClose}
                  icon={<CloseIcon color="brand4" />}
                />
              )}
              <Box pad={{ top: 'medium' }}>
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
    </nav>
  );
};

export default MainMenu;
