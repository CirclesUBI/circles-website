import { Box, Anchor, Image } from 'grommet';
import { Row, Col } from 'react-grid-system';

import Menu from './Menu';

const Header = ({ large }) => {
  return (
    <Row style={{ alignItems: 'center' }}>
      <Col lg={2}>
        <Box pad={{ top: 'small' }}>
          <Image src="/images/logo.svg" />
        </Box>
      </Col>
      <Col lg={8}>
        <Menu activeSection="donate" large={large} />
      </Col>
      <Col lg={2}>
        <Box
          pad="small"
          direction="row"
          gap="medium"
          align="center"
          justify="center"
          style={{ backgroundColor: 'rgba(255, 255, 255, .2)' }}
        >
          <Anchor href="https://t.me/CirclesUBI">
            <Image src="/images/tg.svg" />
          </Anchor>
          <Anchor href="https://twitter.com/CirclesUBI">
            <Image src="/images/tw.svg" />
          </Anchor>
          <Anchor href="https://facebook.com/CirclesUBI">
            <Image src="/images/fb.svg" />
          </Anchor>
          <Anchor href="mailto:hello@joincircles.net">
            <Image src="/images/em.svg" />
          </Anchor>
        </Box>
      </Col>
    </Row>
  );
};

export default Header;
