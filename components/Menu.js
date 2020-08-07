import Link from 'next/link';
import PropTypes from 'prop-types';
import { Anchor, Box, Menu as GrMenu, Text } from 'grommet';
import { Link as ScrollLink } from 'react-scroll';

const menu = [
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

const Menu = ({ activeSection, large, ...otherProps }) => {
  return (
    <Box
      width={!large ? '100%' : 'small '}
      background={large ? 'none' : 'white'}
      pad="medium"
      {...otherProps}
    >
      {large ? (
        <Box direction="row" justify="center" gap="large">
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
      ) : (
        <Box pad="xsmall" width="100%">
          <GrMenu
            alignSelf="center"
            tabIndex="0"
            label={<Text>Menu</Text>}
            items={menu.map((item) => ({
              label: item,
              href: `#${item}`,
              size: 'large',
            }))}
          />
        </Box>
      )}
    </Box>
  );
};

Menu.propTypes = {
  large: PropTypes.bool.isRequired,
};

export default Menu;
