import { Link } from '../i18n';
import { Box, Image } from 'grommet';
import { Row, Col } from 'react-grid-system';

import Menu, { SocialMenu } from './Menu';
import LangSwitcher from './LangSwitcher';

const Header = ({ large, fixed = false }) => {
  const smallStyle = {
    width: 30,
    height: 30,
    cursor: 'pointer',
  };

  const largeStyle = {
    width: 60,
    height: 60,
    cursor: 'pointer',
  };

  return (
    <Row
      style={{
        alignItems: 'center',
      }}
    >
      <Col xs={large ? 3 : 5} md={2}>
        <Box pad={{ left: 'large' }} direction="row" align="center">
          <Link href="/">
            <Image
              style={large && !fixed ? largeStyle : smallStyle}
              src="/images/logo.svg"
            />
          </Link>
          <Box>
            <LangSwitcher />
          </Box>
        </Box>
      </Col>
      <Col xs={large ? 6 : 4} md={8}>
        {large && <Menu large />}
      </Col>
      <Col xs={3} md={2}>
        {large ? (
          <SocialMenu fixed={fixed} />
        ) : (
          <Menu fixed={fixed} large={false} />
        )}
      </Col>
    </Row>
  );
};

export default Header;
