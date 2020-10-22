import Link from 'next/link';
import { Anchor, Box, Button, DropButton, Image, Grommet, Heading, Layer, Text } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';
import { Link as ScrollLink, Events } from 'react-scroll';
import { useState } from 'react';

import { withTranslation } from '../i18n';
import LangSwitcher from './LangSwitcher';
import copy from 'copy-to-clipboard';

const pageLinks = [
  { label: 'FAQ', value: '/faq', isExternal: false, isRoute: true },
  // { label: 'Contact', value: '/contact', isExternal: false, isRoute: true },
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
  const [open, setOpen] = useState(false);

  let pathname;
  if (process.browser) {
    pathname = location.pathname;
  }

  const menu = pathname && pathname === '/' ? homeMenuLinks : notHomeMenuLinks;

  return (
    <Box
      direction={large ? 'row' : 'column'}
      justify="center"
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
            margin={{horizontal: 'large'}}
          />
        ) : item.isRoute ? (
          <Link key={item.value} href={item.value}>
            <Anchor
              as="span"
              label={t(item.label)}
              color={large ? 'white' : 'brand4'}
              margin={{horizontal: 'large'}}
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
              margin={{horizontal: 'large'}}
            />
          </ScrollLink>
        )
      )}
      
      <Grommet>
        <DropButton
          label="Donate"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          dropContent={<DonateContent onClose={() => setOpen(false)} />}
          dropProps={{ align: large ? { top: 'bottom' } : {bottom: 'top', right: 'left'}, style: { borderRadius: 8 } }}
          plain
          style={{ fontWeight: 600, fontSize: 16, color: large ? '#fff' : '#7E133F', transform: 'translateY(-1px)'}}
          margin={{horizontal: 'large'}}
        />
      </Grommet>

    </Box>
  );
});

const ETHADDRESS = '0x7415EfD9D908281ea0279c49A6c23011D9d9A0a4';
const BTCADDRESS = '1P8oaMk65aE5PqJfsfzAzgRwqdPSHoXhw1';

const DonateContent = ({ onClose }) => {
  const [ethCopied, setEthCopied] = useState(false);
  const [btcCopied, setBtcCopied] = useState(false); 

  const copyETH = () => {
    setBtcCopied(false);
    copy(ETHADDRESS);
    setEthCopied(true);
  }
  const copyBTC = () => {
    setEthCopied(false);
    copy(BTCADDRESS);
    setBtcCopied(true);
  }

  const buttonStyle = {
    borderRadius: 8,
    borderColor: '#D12D5F',
  }

  return (
    <Box pad={{vertical: 'small', horizontal: 'large'}} width="medium" elevation="large">
      <Box margin={{bottom: 'small'}}>
        <Heading level={3} margin="small" textAlign="center">
          Donate to Circles
        </Heading>
        <Text textAlign="center" size="small">All donations will go to support and maintenance of this project</Text>
      </Box>
      <Box justify="center" align="center" margin={{bottom: 'small'}} gap="xsmall">
        <Text size="12px">ETH:</Text>
        <Text size="12px" weight="bold" >{ETHADDRESS}</Text>
        <Button plain={false} size="small" style={buttonStyle} onClick={() => copyETH()}>{ethCopied ? 'Copied!' : 'Copy'}</Button>
      </Box>
      <Box justify="center" align="center" margin={{bottom: 'medium'}} gap="xsmall">
        <Text size="12px">BTC:</Text>
        <Text size="12px" weight="bold">{BTCADDRESS}</Text>
        <Button plain={false} size="small" style={buttonStyle} onClick={() => copyBTC()}>{btcCopied ? 'Copied!' : 'Copy'}</Button>
      </Box>

      <Box margin={{bottom: 'small'}}>
        <Text textAlign="center" size="12px">We also have non-profit status via Open Collective</Text>
        <Text textAlign="center" size="12px"><Anchor href="https://opencollective.com/circles" target="_blank">Open Collective</Anchor></Text>
      </Box>
      <Box margin={{bottom: 'small'}}>
        <Text textAlign="center" size="12px">And you can support our work on</Text>
        <Text textAlign="center" size="12px"><Anchor href="https://gitcoin.co/grants/331/circles-ubi" target="_blank" >GitCoin</Anchor></Text>
      </Box>
    </Box>
  )
};

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
          <Anchor href={item.link} key={item.link} style={{ height: 24 }}>
            <Image width="24px" src={mobileMenu ? item.iconp : item.icon} />
          </Anchor>
        ))}
      </Box>
    </Box>
  );
};

const Menu = ({ t, activeSection, large, fixed, ...otherProps }) => {
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
              <LangSwitcher mobileMenu />
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

export default Menu;
