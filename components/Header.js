import Link from 'next/link';
import { Box, Image } from 'grommet';
import { Row, Col } from 'react-grid-system';

import Menu, { SocialMenu } from './Menu';

const Header = ({ large, fixed }) => {
  const fixedStyle = {
    width: 30,
    height: 30,
    cursor: 'pointer',
  };

  const regularStyle = {
    width: 60,
    height: 60,
    cursor: 'pointer',
  };

  return (
    <>
      <Row
        style={{
          alignItems: 'center',
        }}
      >
        <Col xs={3} md={2}>
          <Box pad={{ left: 'large' }}>
            <Link href="/">
              <Image
                style={fixed ? fixedStyle : regularStyle}
                src="/images/logo.svg"
              />
            </Link>
          </Box>
        </Col>
        <Col xs={6} md={8}>
          {large && <Menu activeSection="donate" large />}
        </Col>
        <Col xs={3} md={2}>
          {large ? <SocialMenu /> : <Menu fixed={fixed} large={false} />}
        </Col>
      </Row>
    </>
  );
};

export default Header;
