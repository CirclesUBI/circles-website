import React from 'react';
import { Box, Text, Image } from 'grommet';
import { Row, Col } from 'react-grid-system';

const Widget = ({
  imageLink,
  title,
  content,
  imageWidth = 'small',
  imageHeight = '100px',
  onClick = null,
}) => {
  return (
    <Box
      pad="large"
      elevation="small"
      align="start"
      margin="large"
      style={{ borderRadius: 8, maxWidth: '360px' }}
      alignSelf="center"
      background="white"
      hoverIndicator="light-1"
      onClick={onClick}
    >
      {imageLink && (
        <Box margin={{ bottom: 'large' }}>
          <Image
            src={imageLink}
            width={imageWidth}
            height={imageHeight}
            alignSelf="center"
          />
        </Box>
      )}
      <Text weight="bold" margin={{ bottom: 'medium' }}>
        {title}
      </Text>
      <Text size="small">{content}</Text>
    </Box>
  );
};

export default Widget;
