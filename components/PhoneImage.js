import React from 'react';
import { Box, Text, Image } from 'grommet';

const PhoneImage = ({ imageLink, count, caption }) => {
  return (
    <Box
      align="center"
      pad="medium"
      margin="large"
      overflow="hidden"
      flex={{ grow: 0, shrink: 0 }}
      wrap
    >
      <Box
        background={{
          image: `url('/images/phone-frame.svg')`,
          size: 'contain',
          repeat: 'no-repeat',
          position: 'center',
        }}
        align="center"
        pad={{ top: 'large', left: '10px', right: '10px' }}
        margin={{ bottom: 'large' }}
        height="380px"
        width="200px"
        overflow="hidden"
      >
        <Box>
          <Image
            src={imageLink}
            height="100%"
            fit="cover"
            style={{
              borderRadius: 32,
            }}
          />
        </Box>
      </Box>
      <Box
        background="dark-1"
        style={{ borderRadius: '50%' }}
        pad="medium"
        width="60px"
        height="60px"
        margin={{ bottom: 'medium' }}
      >
        <Text size="large" textAlign="center">
          {count}
        </Text>
      </Box>
      <Box>
        <Text weight="bold" size="small" textAlign="center">
          {caption}
        </Text>
      </Box>
    </Box>
  );
};

export default PhoneImage;
