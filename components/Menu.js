import Link from 'next/link';
import { Anchor, Box, DropButton, Image } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import { Link as ScrollLink } from 'react-scroll';

const menuLinks = [
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
  { label: 'FAQ', value: '/faq', isExternal: false, isRoute: true },
  { label: 'Donate', value: '/donate', isExternal: false, isRoute: true },
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

const MenuContent = ({ large }) => (
  <Box direction={large ? 'row' : 'column'} justify="center" gap="large">
    {menuLinks.map((item, index) =>
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

export const SocialMenu = ({ ...otherProps }) => (
  <Box
    pad="small"
    direction="row"
    gap="medium"
    align="center"
    justify="center"
    width="medium"
    style={{ backgroundColor: 'rgba(255, 255, 255, .2)' }}
    {...otherProps}
  >
    {socialMenuLinks.map((item) => (
      <Anchor href={item.link} key={item.link}>
        <Image src={item.icon} />
      </Anchor>
    ))}
  </Box>
);

const Menu = ({ activeSection, large, ...otherProps }) => {
  return (
    <Box
      width={!large ? '100%' : 'small '}
      pad={{ right: 'none' }}
      {...otherProps}
    >
      {large ? (
        <MenuContent large />
      ) : (
        <DropButton
          label={<MenuIcon color="light-1" />}
          dropAlign={{ top: 'bottom', right: 'right' }}
          pad="xsmall"
          dropContent={
            <Box background="brand" pad="large">
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
