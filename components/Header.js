import { Box, Image } from 'grommet';
import { Row, Col } from 'react-grid-system';

import Menu, { SocialMenu } from './Menu';

const Header = ({ large }) => {
  return (
    <Row style={{ alignItems: 'center' }}>
      <Col xs={3} md={2}>
        <Box width="72px" pad={{ left: 'medium' }}>
          <Image src="/images/logo.svg" />
        </Box>
      </Col>
      <Col xs={6} md={8}>
        {large && <Menu activeSection="donate" large />}
      </Col>
      <Col xs={3} md={2}>
        {large ? <SocialMenu /> : <Menu large={false} />}
      </Col>
    </Row>
  );
};

export default Header;
