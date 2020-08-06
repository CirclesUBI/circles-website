import PropTypes from 'prop-types';
import { Anchor, Box, Menu as GrMenu, Text } from 'grommet';
import { Link } from 'react-scroll';

const menu = ['Wallet', 'About', 'How it Works', 'Community', 'FAQ', 'Donate'];

const Menu = ({ setActiveSection, activeSection, large, ...otherProps }) => {
  return (
    <Box
      width={!large ? '100%' : 'small '}
      background={large ? 'none' : 'white'}
      pad="medium"
      {...otherProps}
    >
      {large ? (
        <Box direction="row" justify="center">
          {menu.map((item, index) => {
            const isActive = item === activeSection;
            return (
              <Link
                key={item}
                activeClass="menuitem-active"
                className="menuitem"
                to={item}
                spy
                hashSpy
                smooth
                duration={500}
                onSetActive={(item) => setActiveSection(item)}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  paddingTop: 6,
                  paddingBottom: 6,
                }}
              >
                <Anchor
                  color="light-2"
                  weight={isActive ? 'bold' : 'normal'}
                  as="span"
                  margin="medium"
                  style={{ fontWeight: isActive ? 800 : 400 }}
                >
                  {item}
                </Anchor>
              </Link>
            );
          })}
          {/* <Link
            as="span"
            to="contact"
            smooth
            duration={500}
            style={{ marginTop: 24 }}
          >
            <Anchor>Contact</Anchor>
          </Link>
          <Anchor target="_blank" href="https://github.com/eminx/cocoso">
            Source Code
          </Anchor> */}
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
  setActiveSection: PropTypes.func.isRequired,
  large: PropTypes.bool.isRequired,
};

export default Menu;
